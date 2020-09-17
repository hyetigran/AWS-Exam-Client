import React from "react";
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

  let questionBank;
  let shuffled;
  if (isMultipleChoice) {
    questionBank = [...incorrect_answer, ...correct_answer];
    console.log("lodash", _);
    shuffled = _(questionBank);
  }

  console.log("bank", shuffled);

  return (
    <>
      <h4>Question {props.currentQuestion}:</h4>
      <p>{question}</p>
    </>
  );
};

export default SessionCard;
