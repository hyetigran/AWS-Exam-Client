import { Action } from "redux";
import { RootState } from "./index";
import { ThunkAction } from "redux-thunk";
import { History } from "history";
import { fakeData } from "../helpers/fakeDataDev";

import {
  ExamActionTypes,
  FETCH_EXAM,
  NEXT_QUESTION,
  SUBMIT_EXAM,
  PAUSE_EXAM,
  ExamState,
} from "./types";

export const thunkGetExam = (
  examType: string,
  examNumber: string,
  history: History
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    const result = await exampleAPI();
    console.log("result", result);
    dispatch(getExam(result));
    history.push(`/exam-sessions/${examType}/${examNumber}`);
  } catch (error) {
    console.log(error);
  }
};

const getExam = (exam: ExamState): ExamActionTypes => {
  return {
    type: FETCH_EXAM,
    payload: exam,
  };
};

function exampleAPI() {
  return Promise.resolve(fakeData);
}
