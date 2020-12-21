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
      return [action.payload];
    default:
      return state;
  }
}
