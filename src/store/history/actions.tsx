import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { Action } from "redux";
import {
  readAllCompletedExams,
  loadExamQuestions,
  loadQuestionAnswers,
  readExam,
} from "../../localDB/utilities";
import { Exam } from "../../localDB/model";

import {
  Question,
  ExamHistoryType,
  ExamHistoryTypes,
  FETCH_ALL_EXAM_HISTORY,
  FETCH_QUESTIONS_HISTORY,
} from "./types";
import { db } from "../../localDB/db";

const fetchExamHistory = (examHistory: ExamHistoryType[]): ExamHistoryTypes => {
  return {
    type: FETCH_ALL_EXAM_HISTORY,
    payload: examHistory,
  };
};

async function getSavedExams(): Promise<ExamHistoryType[]> {
  return await db.transaction(
    "rw",
    db.exams,
    async (): Promise<ExamHistoryType[]> => {
      return await readAllCompletedExams(db);
    }
  );
}

export const thunkFetchExamHistory = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    const examHistory = await getSavedExams();

    dispatch(fetchExamHistory(examHistory));
  } catch (error) {
    console.log(error);
  }
};
export const thunkFetchQuestionHistory = (
  gid: string,
  isFromHistory: boolean,
  exam: ExamHistoryType
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    const updatedExam = await fetchQuestionAnswerFromHistory(
      gid,
      isFromHistory,
      exam
    );

    dispatch(fetchExamReview(updatedExam));
  } catch (error) {
    console.log(error);
  }
};
const fetchExamReview = (exam: ExamHistoryType): ExamHistoryTypes => {
  return {
    type: FETCH_QUESTIONS_HISTORY,
    payload: exam,
  };
};

async function fetchQuestionAnswerFromHistory(
  gid: string,
  isFromHistory: boolean,
  exam: ExamHistoryType
): Promise<ExamHistoryType> {
  return await db.transaction(
    "rw",
    db.exams,
    db.questions,
    db.answers,
    async (): Promise<ExamHistoryType> => {
      // If user did not navigate from exam-history component
      if (!isFromHistory) {
        // Fetch exam by id
        exam = await readExam(db, gid);
      }
      const questions: Question[] = await loadExamQuestions(gid, db);
      for (var i in questions) {
        let question = questions[i];
        let id: string = question.gid!;
        question.answers = await loadQuestionAnswers(id, db);
      }
      exam.questions = questions;

      return exam;
    }
  );
}
