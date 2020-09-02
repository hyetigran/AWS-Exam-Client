import { ExamState, ExamActionTypes } from "./types";

const initialState = {
  examNumber: 0,
  examType: "",
  questions: [],
  correct: 0,
  time: "",
  currentQuestion: 0,
  isPaused: false,
};

export function examReducer(
  state = initialState,
  action: ExamActionTypes
): ExamState {
  switch (action.type) {
    default:
      return state;
  }
}
