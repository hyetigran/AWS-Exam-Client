// Each answer needs an id
export interface Answer {
  answerId: string;
  choice: string;
  isSelected: number;
  isCorrect: number;
}

export interface Question {
  questionId: string;
  question: string;
  answers: Answer[];
  explanation: string;
  isMultipleChoice: number;
  status: number;
}

export interface ExamState {
  EXAM_SESSION_ID: string;
  examNumber: string;
  examType: string;
  questions: Question[];
  correct: number;
  currentQuestion: number;
  time: string;
  isPaused: number;
  isFinished: number;
}

export interface RootState {
  exam: ExamState;
}

export const FETCH_EXAM = "FETCH_EXAM";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const SUBMIT_EXAM = "SUBMIT_EXAM";
export const PAUSE_EXAM = "PAUSE_EXAM";

interface getExamAction {
  type: typeof FETCH_EXAM;
  payload: ExamState;
}

interface nextQuestionAction {
  type: typeof NEXT_QUESTION;
  payload: { correct: number; currentQuestion: number };
}

interface submitExamAction {
  type: typeof SUBMIT_EXAM;
  payload: number;
}

interface pauseExamToggleAction {
  type: typeof PAUSE_EXAM;
  payload: string;
}

export type ExamActionTypes =
  | getExamAction
  | nextQuestionAction
  | submitExamAction
  | pauseExamToggleAction;
