import { ThunkAction } from "redux-thunk";
import { History } from "history";
import { RootState } from "../index";
import { Action } from "redux";
import {
  readAllCompletedExams,
  loadExamQuestions,
  loadQuestionAnswers,
} from "../../localDB/utilities";
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
  gid: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    const questions = await fetchQuestionAnswerFromHistory(gid);

    dispatch(fetchExamReview(questions, gid));
  } catch (error) {
    console.log(error);
  }
};
const fetchExamReview = (
  questions: Question[],
  gid: string
): ExamHistoryTypes => {
  return {
    type: FETCH_QUESTIONS_HISTORY,
    payload: { questions, gid },
  };
};

async function fetchQuestionAnswerFromHistory(
  gid: string
): Promise<Question[]> {
  return await db.transaction(
    "rw",
    db.exams,
    db.questions,
    db.answers,
    async (): Promise<Question[]> => {
      const questions: Question[] = await loadExamQuestions(gid, db);
      for (var i in questions) {
        let question = questions[i];
        let id: string = question.gid!;
        question.answers = await loadQuestionAnswers(id, db);
      }
      return questions;
    }
  );
}
