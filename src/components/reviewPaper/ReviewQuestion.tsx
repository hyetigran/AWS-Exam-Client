import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./ReviewPaper.css";
import { ExamHistoryType, Question } from "../../store/history/types";

type ReviewQuestionProps = {
  questionObject: Question;
  qNum: number;
};

const ReviewQuestion: React.FC<ReviewQuestionProps> = ({
  questionObject,
  qNum,
}) => {
  const {
    answers,
    status,
    explanation,
    isMultipleChoice,
    question,
  } = questionObject;

  // Correct 1; Incorrect 0; Skipped 2;
  let statusText =
    status > 0 ? (status > 1 ? "Skipped" : "Correct") : "Incorrect";

  return (
    <div className={`review-question ${qNum % 2 !== 0 && "alternate-color"}`}>
      <p>
        Question: {qNum + 1}{" "}
        <strong
          className={status === 1 ? "correct" : status === 0 ? "incorrect" : ""}
        >
          {statusText}
        </strong>
      </p>
      <p>{question}</p>

      <Form id="exam-form">
        {answers.map((answer) => {
          return (
            <FormGroup
              check
              key={answer.gid}
              className={
                answer.isCorrect
                  ? "answer-box-correct"
                  : answer.isSelected
                  ? "answer-box-incorrect"
                  : ""
              }
            >
              <Label check>
                <Input
                  checked={answer.isSelected ? true : false}
                  type={isMultipleChoice ? "radio" : "checkbox"}
                  name={isMultipleChoice ? "radio1" : "checkbox1"}
                  value={answer.gid}
                  disabled
                />
                {answer.choice}
              </Label>
            </FormGroup>
          );
        })}
      </Form>
      <div className="review-explanation">
        <strong>Explanation</strong>
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default ReviewQuestion;
