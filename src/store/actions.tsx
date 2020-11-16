import { Action } from "redux";
import { RootState } from "./index";
import { ThunkAction } from "redux-thunk";
import { History } from "history";
import { realExam } from "../helpers/realExam";
import _ from "lodash/shuffle";
import {
  ExamActionTypes,
  FETCH_EXAM,
  NEXT_QUESTION,
  SUBMIT_EXAM,
  PAUSE_EXAM,
  ExamState,
} from "./types";
import { db } from "../localDB/db";
import { Exam, BareAnswer, BareQuestion } from "../localDB/model";
import { createExam } from "../localDB/utilities";

export const thunkGetExam = (
  examType: string,
  examNumber: string,
  history: History
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    const result: ExamState = await exampleAPI();

    // Create exam session indexdb
    const EXAM_SESSION_ID = await addExamSession(result);
    const exam = { ...result, EXAM_SESSION_ID };

    dispatch(getExam(exam));
    history.push(`/exam-sessions/${examType}/${examNumber}`);
  } catch (error) {
    console.log(error);
  }
};

const getExam = (exam: ExamState): ExamActionTypes => {
  for (let i = 0; i < exam.questions.length; i++) {
    let shuffledAnswers = _([
      ...exam.questions[i].incorrectAnswer,
      ...exam.questions[i].correctAnswer,
    ]);
    exam.questions[i].shuffledAnswerBank = shuffledAnswers;
  }

  return {
    type: FETCH_EXAM,
    payload: exam,
  };
};

export const nextQuestion = (
  isCorrect: boolean,
  curQuestion: number,
  question: BareQuestion
): ExamActionTypes => {
  let payload = {
    correct: isCorrect ? 1 : 0,
    currentQuestion: curQuestion + 1,
  };
  // Save question/answer in DB

  return {
    type: NEXT_QUESTION,
    payload,
  };
};

export const submitExam = (
  history: History,
  examType: string,
  examNumber: string
): ExamActionTypes => {
  history.push(`/exam-results/${examType}/${examNumber}`);
  return {
    type: SUBMIT_EXAM,
    payload: true,
  };
};

function exampleAPI() {
  return Promise.resolve(realExam);
}

// Local DB functions

async function addExamSession(exam: ExamState): Promise<string> {
  return await db.transaction(
    "rw",
    db.exams,
    async (): Promise<string> => {
      const {
        examNumber,
        examType,
        correct,
        currentQuestion,
        time,
        isPaused,
      } = exam;
      const examSession = new Exam(
        examNumber,
        examType,
        correct,
        currentQuestion,
        time,
        isPaused
      );

      return await createExam(db, examSession);
    }
  );
}
