//fake exam data for development purposes

export const fakeData = {
  examNumber: "1",
  examType: "CCP",
  correct: "0",
  time: "1:30",
  currentQuestion: 1,
  isPaused: false,
  questions: [
    {
      question:
        "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
      isMultipleChoice: true,
      incorrect_answer: [
        { choice: "first choice", isSelected: false },
        { choice: "second choice", isSelected: false },
        { choice: "third choice", isSelected: false },
      ],
      correct_answer: [{ choice: "fourth choice", isSelected: false }],
      explanation:
        "this is the explanation of why choice is correct for the first question",
    },
    {
      question: "second question",
      isMultipleChoice: true,
      incorrect_answer: [
        { choice: "first choice", isSelected: false },
        { choice: "second choice", isSelected: false },
        { choice: "third choice", isSelected: false },
      ],
      correct_answer: [{ choice: "fourth choice", isSelected: false }],
      explanation:
        "this is the explanation of why choice is correct for the second question",
    },
    {
      question: "third question",
      isMultipleChoice: true,
      incorrect_answer: [
        { choice: "first choice", isSelected: false },
        { choice: "second choice", isSelected: false },
        { choice: "third choice", isSelected: false },
      ],
      correct_answer: [{ choice: "fourth choice", isSelected: false }],
      explanation:
        "this is the explanation of why choice is correct for the third question",
    },
    {
      question: "fourth question",
      isMultipleChoice: true,
      incorrect_answer: [
        { choice: "first choice", isSelected: false },
        { choice: "second choice", isSelected: false },
        { choice: "third choice", isSelected: false },
      ],
      correct_answer: [{ choice: "fourth choice", isSelected: false }],
      explanation:
        "this is the explanation of why choice is correct for the fourth question",
    },
    {
      question: "fith question",
      isMultipleChoice: false,
      incorrect_answer: [
        { choice: "first choice", isSelected: false },
        { choice: "second choice", isSelected: false },
        { choice: "third choice", isSelected: false },
      ],
      correct_answer: [
        { choice: "fourth choice", isSelected: false },

        { choice: "fith choice", isSelected: false },
      ],

      explanation:
        "this is the explanation of why choice is correct for the fith question",
    },
  ],
};
