//fake exam data for development purposes

export const fakeData = {
  examNumber: "1",
  examType: "CCP",
  correct: 0,
  time: "1:30",
  currentQuestion: 1,
  isPaused: false,
  questions: [
    {
      questionId: 1,
      question:
        "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrect_answer: [
        { answerId: 1, choice: "first choice", isSelected: false },
        { answerId: 2, choice: "second choice", isSelected: false },
        { answerId: 3, choice: "third choice", isSelected: false },
      ],
      correct_answer: [
        { answerId: 4, choice: "fourth choice", isSelected: false },
      ],
      explanation:
        "this is the explanation of why choice is correct for the first question",
    },
    {
      questionId: 2,
      question: "second question",
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrect_answer: [
        { answerId: 1, choice: "first choice2", isSelected: false },
        { answerId: 2, choice: "second choice2", isSelected: false },
        { answerId: 3, choice: "third choice2", isSelected: false },
      ],
      correct_answer: [
        { answerId: 4, choice: "fourth choice2", isSelected: false },
      ],
      explanation:
        "this is the explanation of why choice is correct for the second question",
    },
    {
      questionId: 3,
      question: "third question",
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrect_answer: [
        { answerId: 1, choice: "first choice3", isSelected: false },
        { answerId: 2, choice: "second choice3", isSelected: false },
        { answerId: 3, choice: "third choice3", isSelected: false },
      ],
      correct_answer: [
        { answerId: 4, choice: "fourth choice", isSelected: false },
      ],
      explanation:
        "this is the explanation of why choice is correct for the third question",
    },
    {
      questionId: 4,
      question: "fourth question",
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrect_answer: [
        { answerId: 1, choice: "first choice4", isSelected: false },
        { answerId: 2, choice: "second choice4", isSelected: false },
        { answerId: 3, choice: "third choice4", isSelected: false },
      ],
      correct_answer: [
        { answerId: 4, choice: "fourth choice4", isSelected: false },
      ],
      explanation:
        "this is the explanation of why choice is correct for the fourth question",
    },
    {
      questionId: 5,
      question: "fith question",
      isMultipleChoice: false,
      shuffledAnswerBank: [],
      incorrect_answer: [
        { answerId: 1, choice: "first choice5", isSelected: false },
        { answerId: 2, choice: "second choice5", isSelected: false },
        { answerId: 3, choice: "third choice5", isSelected: false },
      ],
      correct_answer: [
        { answerId: 4, choice: "fourth choice5", isSelected: false },

        { answerId: 5, choice: "fith choice5", isSelected: false },
      ],

      explanation:
        "this is the explanation of why choice is correct for the fith question",
    },
    {
      questionId: 6,
      question: "fourth question",
      isMultipleChoice: true,
      shuffledAnswerBank: [],
      incorrect_answer: [
        { answerId: 1, choice: "first choice4", isSelected: false },
        { answerId: 2, choice: "second choice4", isSelected: false },
        { answerId: 3, choice: "third choice4", isSelected: false },
      ],
      correct_answer: [
        { answerId: 4, choice: "fourth choice4", isSelected: false },
      ],
      explanation:
        "this is the explanation of why choice is correct for the fourth question",
    },
  ],
};
