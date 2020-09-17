import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import _ from "lodash/shuffle";
import { Question } from "../../store/types";

type SessionCardProps = {
  question: Question;
  currentQuestion: number;
  answerSelect: Function;
};
const SessionCard: React.FC<SessionCardProps> = (props) => {
  const {
    question,
    incorrect_answer,
    correct_answer,
    isMultipleChoice,
  } = props.question;

  let questionBank = _([...incorrect_answer, ...correct_answer]);

  return (
    <>
      <h4>Question {props.currentQuestion}:</h4>
      <p>{question}</p>
      <ul>
        <Form>
          {questionBank.map((question) => {
            return (
              <li key={question.answerId}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type={isMultipleChoice ? "radio" : "checkbox"}
                      name={isMultipleChoice ? "radio1" : "checkbox1"}
                      onChange={() => props.answerSelect(question.answerId)}
                    />
                    {question.choice}
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
