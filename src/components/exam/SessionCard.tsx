import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Question } from "../../store/types";

import "./SessionCard.css";

type SessionCardProps = {
  question: Question;
  currentQuestion: number;
  answerSelect: Function;
  nextQuestion: Function;
};
const SessionCard: React.FC<SessionCardProps> = (props) => {
  const {
    questionId,
    question,
    shuffledAnswerBank,
    isMultipleChoice,
  } = props.question;
  return (
    <>
      <h4>Question {props.currentQuestion}:</h4>
      <p>{question}</p>
      <ul>
        <Form id="exam-form">
          {shuffledAnswerBank.map((answer) => {
            return (
              <li key={answer.answerId}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type={isMultipleChoice ? "radio" : "checkbox"}
                      name={isMultipleChoice ? "radio1" : "checkbox1"}
                      onChange={() =>
                        props.answerSelect(questionId, answer.answerId)
                      }
                      value={answer.answerId}
                    />
                    {answer.choice}
                  </Label>
                </FormGroup>
              </li>
            );
          })}
          <Button
            size="lg"
            color="primary"
            onClick={(e) => props.nextQuestion(e)}
          >
            {/* {userAnswers![
            examData.questions[
              examData.currentQuestion - 1
            ].questionId.toString()
          ].answers.length
            ? "Next Question"
            : "Skip Question"} */}
            Next Question
          </Button>
        </Form>
      </ul>
    </>
  );
};

export default SessionCard;
