import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import _ from "lodash/shuffle";
import { Question } from "../../store/types";

type SessionCardProps = {
  question: Question;
  currentQuestion: number;
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
          {questionBank.map((question, id) => {
            return (
              <li key={id}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name={"radio1" + id}
                      onChange={(e) => {
                        console.log(e.target.name);
                      }}
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
