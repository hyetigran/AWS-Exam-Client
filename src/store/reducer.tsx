import { ExamState, ExamActionTypes, FETCH_EXAM } from "./types";
import { fakeData } from "../helpers/fakeDataDev";

// const initialState = {
//   examNumber: "",
//   examType: "",
//   correct: "0",
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
    case FETCH_EXAM: {
      return action.payload;
    }
    default:
      return state;
  }
}
