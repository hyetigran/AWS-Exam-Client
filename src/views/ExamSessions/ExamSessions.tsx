import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Progress } from "reactstrap";
import { RootState } from "../../store/types";
import {
  Col,
  Row,
  Button,
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import SessionCard from "../../components/exam/SessionCard";

import "./ExamSessions.css";
import { thunkGetExam } from "../../store/actions";

const ExamSessions = () => {
  const examData = useSelector((state: RootState) => state.exam);
  const dispatch = useDispatch();
  useEffect(() => {});
  console.log("exam", examData);
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
        />
      </Jumbotron>
    </>
  );
};

export default ExamSessions;
