import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Question } from "../../store/types";

type SessionCardProps = {
  question: Question;
  currentQuestion: number;
  answerSelect: Function;
};
const SessionCard: React.FC<SessionCardProps> = (props) => {
  const { question, shuffledAnswerBank, isMultipleChoice } = props.question;

  return (
    <>
      <h4>Question {props.currentQuestion}:</h4>
      <p>{question}</p>
      <ul>
        <Form>
          {shuffledAnswerBank.map((answer) => {
            return (
              <li key={answer.answerId}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type={isMultipleChoice ? "radio" : "checkbox"}
                      name={isMultipleChoice ? "radio1" : "checkbox1"}
                      onChange={() => props.answerSelect(answer.answerId)}
                    />
                    {answer.choice}
                  </Label>
                </FormGroup>
              </li>
            );
          })}
        </Form>
      </ul>
    </>
  );
};

export default SessionCard;
