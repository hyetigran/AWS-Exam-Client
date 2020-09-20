import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Progress } from "reactstrap";
import { RootState } from "../../store/types";
import { Col, Row, Jumbotron } from "reactstrap";

import SessionCard from "../../components/exam/SessionCard";

import "./ExamSessions.css";
import { nextQuestion } from "../../store/actions";

interface UserAnswers {
  [key: string]: number[];
}

const ExamSessions = () => {
  const examData = useSelector((state: RootState) => state.exam);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const { currentQuestion } = examData;
  const dispatch = useDispatch();
  useEffect(() => {});
  //console.log("exam", examData);
  console.log("uA", userAnswers);

  const answerSelectHandler = (qId: number, aId: number) => {
    // question should be refactored to question ID
    // let answerId = id;
    // let question = {
    //   answerId,
    // };
    // if q is MC then only one answer can be selected

    if (examData.questions[currentQuestion - 1].isMultipleChoice) {
      // can only have one answer selected

      setUserAnswers({ ...userAnswers, [qId]: [aId] });
    } else {
      //handle checkbox selection
    }
  };

  const nextQuestionHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    let qId = examData.questions[examData.currentQuestion - 1].questionId;
    let isCorrect = false;
    const { isMultipleChoice, correct_answer } = examData.questions[qId];
    if (userAnswers![qId.toString()] === undefined) {
      //if user skips question without selecting an answer
      setUserAnswers({ ...userAnswers, [qId]: [] });
    } else if (isMultipleChoice) {
      //if question is MC, check selected against correct array
      isCorrect =
        userAnswers![qId.toString()][0] === correct_answer[0].answerId;
    } else {
      // if question is select multiple answers
      //check that no incorrect answers have been selected
      //check that all correct answers have been selected
    }

    dispatch(nextQuestion(isCorrect, examData.currentQuestion));
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.checked = false;
    });
  };

  return (
    <>
      <Row>
        <Col sm={{ size: 1, offset: 1 }}>
          <div>{examData.currentQuestion}/65</div>
        </Col>
        <Col>
          <Progress color="success" value={examData.currentQuestion} max={65} />
        </Col>
        {/* <p>clock icon</p>
        <p>time</p>
        <p>pause</p>
        <p>stop modal</p> */}
      </Row>
      <Jumbotron className="jumbotronCustom">
        <SessionCard
          question={examData.questions[examData.currentQuestion - 1]}
          currentQuestion={examData.currentQuestion}
          answerSelect={answerSelectHandler}
          nextQuestion={nextQuestionHandler}
        />
      </Jumbotron>
    </>
  );
};

export default ExamSessions;
