import { Action, Dispatch } from "redux";
import { RootState } from "./";
import { ThunkAction } from "redux-thunk";

import {
  ExamActionTypes,
  FETCH_EXAM,
  NEXT_QUESTION,
  SUBMIT_EXAM,
  PAUSE_EXAM,
} from "./types";

export const getExam = (
  examNumber: number,
  examType: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      const result = await exampleAPI();
      return dispatch({
        type: FETCH_EXAM,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
