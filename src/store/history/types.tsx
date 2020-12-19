export const FETCH_ALL_EXAM_HISTORY = "FETCH_ALL_EXAM_HISTORY";
export const FETCH_QUESTIONS_HISTORY = "FETCH_QUESTIONS_HISTORY";

export interface RootState {
  examHistory: ExamHistoryType[];
}
export interface Answer {
  questionId: string;
  choice: string;
  isSelected: number;
  isCorrect: number;
  gid?: string;
}
export interface Question {
  examId: string;
  question: string;
  explanation: string;
  isMultipleChoice: number;
  gid?: string;
  answers: Answer[];
}
export interface ExamHistoryType {
  gid: string;
  examNumber: string;
  examType: string;
  correct: number;
  currentQuestion: number;
  time: string;
  isPaused: number;
  isFinished: number;
  questions?: Question[];
}

interface getExamHistory {
  type: typeof FETCH_QUESTIONS_HISTORY;
  payload: { questions: Question[]; gid: string };
}

interface fetchExamHistoryAction {
  type: typeof FETCH_ALL_EXAM_HISTORY;
  payload: ExamHistoryType[];
}

export type ExamHistoryTypes = fetchExamHistoryAction | getExamHistory;
