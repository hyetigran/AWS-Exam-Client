import { ExamState, ExamActionTypes } from "./types";

const initialState = {
  examNumber: "",
  examType: "",
  questions: [],
  correct: "0",
  time: "",
  currentQuestion: "",
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
