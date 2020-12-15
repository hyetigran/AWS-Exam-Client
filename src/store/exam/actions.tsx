import { Action } from "redux";
import { RootState } from "../index";
import { ThunkAction } from "redux-thunk";
import { History } from "history";
import { realExam } from "../../helpers/realExam";
import _ from "lodash/shuffle";
import {
  ExamActionTypes,
  FETCH_EXAM,
  NEXT_QUESTION,
  SUBMIT_EXAM,
  PAUSE_EXAM,
  ExamState,
} from "./types";
import { db } from "../../localDB/db";
import {
  Exam,
  BareAnswer,
  BareQuestion,
  Question,
  Answer,
} from "../../localDB/model";
import {
  createAnswer,
  createExam,
  createQuestion,
  readExam,
  updateExam,
} from "../../localDB/utilities";

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
    let shuffledAnswers = _(exam.questions[i].answers);
    exam.questions[i].answers = shuffledAnswers;
  }

  return {
    type: FETCH_EXAM,
    payload: exam,
  };
};

export const nextQuestion = (
  isCorrect: boolean,
  curQuestion: number,
  question: BareQuestion,
  EXAM_SESSION_ID: string
): ExamActionTypes => {
  let payload = {
    correct: isCorrect ? 1 : 0,
    currentQuestion: curQuestion + 1,
  };
  // Save question/answer in DB
  addQuestionAnswerToExamSession(question, EXAM_SESSION_ID);

  return {
    type: NEXT_QUESTION,
    payload,
  };
};

export const submitExam = (
  history: History,
  examType: string,
  examNumber: string,
  questioned: BareQuestion,
  EXAM_SESSION_ID: string,
  currentQuestion: number,
  examData: ExamState
): ExamActionTypes => {
  addQuestionAnswerToExamSession(questioned, EXAM_SESSION_ID);
  // Toggle isFinished
  examData.isFinished = 1;
  updateExamSession(examData);
  // Exam is finished before last question
  if (currentQuestion !== 65) {
    // store all unanswered questions to indexedDB
    for (let i = currentQuestion; i < 65; i++) {
      let {
        answers,
        isMultipleChoice,
        question,
        explanation,
      } = examData!.questions[i];

      let unansweredQuestions = {
        isMultipleChoice,
        explanation,
        question,
        answers,
      };
      addQuestionAnswerToExamSession(unansweredQuestions, EXAM_SESSION_ID);
    }
  }
  history.push(`/exam-review/${examType}/${examNumber}/${EXAM_SESSION_ID}`);
  return {
    type: SUBMIT_EXAM,
    payload: 1,
  };
};

function exampleAPI() {
  return Promise.resolve(realExam);
}

export const pauseExam = (newTime: string): ExamActionTypes => {
  return {
    type: PAUSE_EXAM,
    payload: newTime,
  };
};

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
        isFinished,
      } = exam;
      const examSession = new Exam(
        examNumber,
        examType,
        correct,
        currentQuestion,
        time,
        isPaused,
        isFinished
      );

      return await createExam(db, examSession);
    }
  );
}

async function addQuestionAnswerToExamSession(
  questioned: BareQuestion,
  EXAM_SESSION_ID: string
) {
  await db.transaction("rw", db.exams, db.questions, db.answers, async () => {
    let { isMultipleChoice, explanation, question, answers } = questioned;
    let exam: Exam = await readExam(db, EXAM_SESSION_ID);
    let questionId = await createQuestion(
      db,
      new Question(exam.gid!, question, explanation, isMultipleChoice)
    );

    for (let i in answers) {
      await createAnswer(
        db,
        new Answer(
          questionId,
          answers[i].choice,
          answers[i].isSelected,
          answers[i].isCorrect
        )
      );
    }
  });
}

async function updateExamSession(exam: ExamState): Promise<string> {
  return await db.transaction(
    "rw",
    db.exams,
    async (): Promise<string> => {
      const {
        EXAM_SESSION_ID,
        examNumber,
        examType,
        correct,
        currentQuestion,
        time,
        isPaused,
        isFinished,
      } = exam;

      let paused = isPaused ? 1 : 0;
      let finished = isFinished ? 1 : 0;
      const examSession = new Exam(
        examNumber,
        examType,
        correct,
        currentQuestion,
        time,
        paused,
        finished,
        EXAM_SESSION_ID
      );
      return await updateExam(db, examSession);
    }
  );
}
