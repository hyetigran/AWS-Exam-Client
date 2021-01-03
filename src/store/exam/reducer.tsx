import {
  ExamState,
  ExamActionTypes,
  FETCH_EXAM,
  NEXT_QUESTION,
  SUBMIT_EXAM,
  PAUSE_EXAM,
} from "./types";

const initialState = {
  EXAM_SESSION_ID: "",
  examNumber: "",
  examType: "",
  correct: -1,
  time: "",
  currentQuestion: -1,
  isPaused: -1,
  isFinished: -1,
  questions: [
    {
      questionId: "",
      question: "",
      explanation: "",
      isMultipleChoice: -1,
      status: -1,
      answers: [{ answerId: "", choice: "", isSelected: -1, isCorrect: -1 }],
    },
  ],
};

export function examReducer(
  state = initialState,
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
