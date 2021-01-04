import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Question, Answer } from "../../store/exam/types";

import "./SessionCard.css";

type SessionCardProps = {
  question: Question;
  currentQuestion: number;
  answerSelect: Function;
  nextQuestion: Function;
};
interface InputSelected {
  [key: string]: boolean;
}
const SessionCard: React.FC<SessionCardProps> = (props) => {
  const { questionId, question, answers, isMultipleChoice } = props.question;
  console.log(answers);
  const [answerChecked, setAnswerChecked] = useState<InputSelected>({});
  const [
    initialAnswerChecked,
    setInitialAnswerChecked,
  ] = useState<InputSelected>({});

  useEffect(() => {
    initialCheckedState();
  }, [question]);

  const initialCheckedState = () => {
    let initialSelected: InputSelected = {};
    for (let i = 0; i < answers.length; i++) {
      let aId = answers[i].answerId;
      initialSelected[aId] = false;
    }
    setAnswerChecked(initialSelected);
    setInitialAnswerChecked(initialSelected);
  };

  const inputSelectHandler = (
    e: React.MouseEvent<HTMLDivElement | MouseEvent>,
    answer: Answer
  ) => {
    e.preventDefault();
    let isChecked = !answerChecked[answer.answerId];
    props.answerSelect(isChecked, questionId, answer.answerId);

    let shouldResetChecked = isMultipleChoice
      ? initialAnswerChecked
      : answerChecked;

    setAnswerChecked({
      ...shouldResetChecked,
      [answer.answerId]: isChecked,
    });
  };

  return (
    <>
      <p>Question {props.currentQuestion}:</p>
      <p>{question}</p>

      <Form id="exam-form">
        {answers.map((answer) => {
          return (
            <FormGroup
              check
              key={answer.answerId}
              onClick={(e) => inputSelectHandler(e, answer)}
            >
              <Label check>
                <Input
                  checked={answerChecked[answer.answerId]}
                  type={isMultipleChoice ? "radio" : "checkbox"}
                  name={isMultipleChoice ? "radio1" : "checkbox1"}
                  value={answer.answerId}
                />
                {answer.choice}
              </Label>
            </FormGroup>
          );
        })}
        <Button
          size="lg"
          color={
            Object.values(answerChecked).includes(true)
              ? "primary"
              : "secondary"
          }
          className="actionButton"
          onClick={(e) => props.nextQuestion(e)}
        >
          {Object.values(answerChecked).includes(true)
            ? props.currentQuestion === 65
              ? "Finish Exam"
              : "Next Question"
            : "Skip Question"}
        </Button>
      </Form>
    </>
  );
};

export default SessionCard;
