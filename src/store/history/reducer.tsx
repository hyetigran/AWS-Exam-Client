import {
  ExamHistoryTypes,
  ExamHistoryType,
  FETCH_ALL_EXAM_HISTORY,
} from "./types";

const initialExamHistoryState = [
  {
    EXAM_SESSION_ID: "",
    examNumber: "",
    examType: "",
    correct: 0,
    time: "",
    currentQuestion: 0,
    isPaused: false,
    isFinished: true,
  },
];

export function historyReducer(
  state = initialExamHistoryState,
  action: ExamHistoryTypes
): ExamHistoryType[] {
  switch (action.type) {
    case FETCH_ALL_EXAM_HISTORY:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
