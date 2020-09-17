import { Action, Dispatch } from "redux";
import { RootState } from "./";
import { ThunkAction } from "redux-thunk";
import { History } from "history";
import { fakeData } from "../helpers/fakeDataDev";

import {
  ExamActionTypes,
  FETCH_EXAM,
  NEXT_QUESTION,
  SUBMIT_EXAM,
  PAUSE_EXAM,
} from "./types";

export const getExam = (
  examNumber: string,
  examType: string,
  history: History
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const result = await exampleAPI();
      console.log(result);
      dispatch({
        type: FETCH_EXAM,
        payload: result,
      });
      history.push("/exam-sessions");
    } catch (error) {
      console.log(error);
    }
  };
};

function exampleAPI() {
  return Promise.resolve(fakeData);
}
