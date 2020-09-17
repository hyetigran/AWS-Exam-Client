export interface Answer {
  choice: string;
  isSelected: boolean;
}

export interface Question {
  question: string;
  incorrect_answer: Answer[];
  correct_answer: Answer | Answer[];
  explanation: string;
  isMultipleChoice: boolean;
}

export interface ExamState {
  examNumber: string;
  examType: string;
  questions: Question[];
  correct: string;
  currentQuestion: string;
  time: string;
  isPaused: boolean;
}

export const FETCH_EXAM = "FETCH_EXAM";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const SUBMIT_EXAM = "SUBMIT_EXAM";
export const PAUSE_EXAM = "PAUSE_EXAM";

interface getExamAction {
  type: typeof FETCH_EXAM;
  payload: ExamState;
}

// interface nextQuestionAction {
//   type: typeof NEXT_QUESTION;
//   payload: boolean;
// }

// interface submitExamAction {
//   type: typeof FETCH_EXAM;
//   payload: ExamState;
// }

// interface pauseExamToggleAction {
//   type: typeof FETCH_EXAM;
//   payload: boolean;
// }

export type ExamActionTypes = getExamAction;
// | nextQuestionAction
// | submitExamAction
// | pauseExamToggleAction;
