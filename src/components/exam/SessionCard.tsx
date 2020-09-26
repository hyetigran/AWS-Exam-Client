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
  // Consolidate Input components from two to one
  return (
    <>
      <p>Question {props.currentQuestion}:</p>
      <p>{question}</p>

      <Form id="exam-form">
        {shuffledAnswerBank.map((answer) => {
          return (
            <FormGroup check key={answer.answerId}>
              <Label check>
                {isMultipleChoice ? (
                  <Input
                    type="radio"
                    name="radio1"
                    onChange={(event) =>
                      props.answerSelect(event, questionId, answer.answerId)
                    }
                    value={answer.answerId}
                  />
                ) : (
                  <Input
                    type="checkbox"
                    name="checkbox1"
                    onChange={(event) =>
                      props.answerSelect(event, questionId, answer.answerId)
                    }
                    value={answer.answerId}
                  />
                )}
                {answer.choice}
              </Label>
            </FormGroup>
          );
        })}
        <Button
          size="lg"
          color="primary"
          className="actionButton"
          onClick={(e) => props.nextQuestion(e)}
        >
          {props.currentQuestion === 6 ? "Finish Exam" : "Next Question"}
        </Button>
      </Form>
    </>
  );
};

export default SessionCard;
