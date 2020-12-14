export const FETCH_ALL_EXAM_HISTORY = "FETCH_ALL_EXAM_HISTORY";

export interface ExamHistory {
  EXAM_SESSION_ID: string;
  examNumber: string;
  examType: string;
  correct: number;
  currentQuestion: number;
  time: string;
  isPaused: boolean;
  isFinished: boolean;
}

interface fetchExamHistoryAction {
  type: typeof FETCH_ALL_EXAM_HISTORY;
  payload: ExamHistory[];
}

export type ExamHistoryTypes = fetchExamHistoryAction;
