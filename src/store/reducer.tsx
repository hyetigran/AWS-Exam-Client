import { ExamState, ExamActionTypes, FETCH_EXAM, NEXT_QUESTION } from "./types";
import { fakeData } from "../helpers/fakeDataDev";

// const initialState = {
//   examNumber: "",
//   examType: "",
//   correct: 0,
//   time: "",
//   currentQuestion: 0,
//   isPaused: false,
//   questions: [],
// };

export function examReducer(
  state = fakeData,
  action: ExamActionTypes
): ExamState {
  switch (action.type) {
    case FETCH_EXAM:
      return action.payload;
    case NEXT_QUESTION:
      return {
        ...state,
        correct: state.correct + action.payload.correct,
        currentQuestion: action.payload.currentQuestion,
      };
    default:
      return state;
  }
}
