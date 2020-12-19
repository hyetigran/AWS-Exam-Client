import {
  ExamHistoryTypes,
  ExamHistoryType,
  FETCH_ALL_EXAM_HISTORY,
  FETCH_QUESTIONS_HISTORY,
} from "./types";

const initialExamHistoryState = [
  {
    gid: "",
    examNumber: "",
    examType: "",
    correct: 0,
    time: "",
    currentQuestion: 0,
    isPaused: 0,
    isFinished: 1,
  },
];

export function historyReducer(
  state = initialExamHistoryState,
  action: ExamHistoryTypes
): ExamHistoryType[] {
  switch (action.type) {
    case FETCH_ALL_EXAM_HISTORY:
      return action.payload;
    case FETCH_QUESTIONS_HISTORY:
      let updatedState = state.filter(
        (exam) => exam.gid === action.payload.gid
      );
      debugger;
      let questions = action.payload.questions;
      let examReview = {
        ...updatedState[0],
        questions,
      };
      return [examReview];
    default:
      return state;
  }
}
