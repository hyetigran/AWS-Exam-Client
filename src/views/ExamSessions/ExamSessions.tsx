import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Progress } from "reactstrap";
import { RootState } from "../../store/types";
import { Col, Row, Button, Jumbotron } from "reactstrap";

import SessionCard from "../../components/exam/SessionCard";

import "./ExamSessions.css";
import { nextQuestion } from "../../store/actions";

const ExamSessions = () => {
  const examData = useSelector((state: RootState) => state.exam);
  const [answerId, setAnswerId] = useState<number[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {});
  console.log("exam", examData);

  const answerSelectHandler = (id: number) => {
    setAnswerId([...answerId, id]);
  };

  const nextQuestionHandler = (e: React.FormEvent) => {
    dispatch(nextQuestion(answerId, examData.currentQuestion));
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
        />
        <Button
          size="lg"
          color="primary"
          onClick={(e) => nextQuestionHandler(e)}
        >
          {answerId.length ? "Next Question" : "Skip Question"}
        </Button>
      </Jumbotron>
    </>
  );
};

export default ExamSessions;
