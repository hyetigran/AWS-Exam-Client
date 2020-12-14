import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { Action } from "redux";
import { readAllCompletedExams } from "../../localDB/utilities";
import { ExamHistory, ExamHistoryTypes, FETCH_ALL_EXAM_HISTORY } from "./types";
import { db } from "../../localDB/db";

const fetchExamHistory = (examHistory: ExamHistory[]): ExamHistoryTypes => {
  return {
    type: FETCH_ALL_EXAM_HISTORY,
    payload: examHistory,
  };
};

async function getSavedExams(): Promise<ExamHistory[]> {
  return await db.transaction(
    "rw",
    db.exams,
    async (): Promise<ExamHistory[]> => {
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
