import { ExamState, ExamActionTypes, FETCH_EXAM } from "./types";

const initialState = {
  examNumber: "",
  examType: "",
  correct: "0",
  time: "",
  currentQuestion: "",
  isPaused: false,
  questions: [],
};

export function examReducer(
  state = initialState,
  action: ExamActionTypes
): ExamState {
  switch (action.type) {
    case FETCH_EXAM: {
      return action.payload;
    }
    default:
      return state;
  }
}
