import { Action } from "redux";
import { RootState } from "./index";
import { ThunkAction } from "redux-thunk";
import { History } from "history";
import { fakeData } from "../helpers/fakeDataDev";
import _ from "lodash/shuffle";

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
  console.log(exam);
  for (let i = 0; i < exam.questions.length; i++) {
    let shuffledAnswers = _([
      ...exam.questions[i].incorrect_answer,
      ...exam.questions[i].correct_answer,
    ]);
    exam.questions[i].shuffledAnswerBank = shuffledAnswers;
  }
  return {
    type: FETCH_EXAM,
    payload: exam,
  };
};

export const nextQuestion = (isCorrect: boolean, curQuestion: number) => {
  let payload = {
    correct: isCorrect ? 1 : 0,
    currentQuestion: curQuestion + 1,
  };
  return {
    type: NEXT_QUESTION,
    payload,
  };
};

export const submitExam = (
  history: History,
  examType: string,
  examNumber: string
) => {
  history.push(`/exam-results/${examType}/${examNumber}`);
  return {
    type: SUBMIT_EXAM,
    payload: true,
  };
};

function exampleAPI() {
  return Promise.resolve(fakeData);
}
