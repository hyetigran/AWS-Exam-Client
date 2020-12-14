import {
  ExamState,
  ExamActionTypes,
  FETCH_EXAM,
  NEXT_QUESTION,
  SUBMIT_EXAM,
  PAUSE_EXAM,
} from "./types";
import { realExam } from "../../helpers/realExam";

// const initialState = {
//   examNumber: "",
//   examType: "",
//   correct: 0,
//   time: "",
//   currentQuestion: 0,
//   isPaused: false,
//   questions: Question[],
//   isFinished
// };

export function examReducer(
  state = realExam,
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
    case SUBMIT_EXAM:
      return {
        ...state,
        isFinished: action.payload,
      };
    case PAUSE_EXAM:
      return {
        ...state,
        time: action.payload,
      };
    default:
      return state;
  }
}
