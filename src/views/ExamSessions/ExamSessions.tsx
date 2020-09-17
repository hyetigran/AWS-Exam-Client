import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Progress } from "reactstrap";
import { RootState } from "../../store";
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

import "./ExamSessions.css";

const ExamSessions = () => {
  const examData = useSelector((state: RootState) => state.exam);
  const dispatch = useDispatch();
  useEffect(() => {});
  console.log("exam", examData);
  return (
    <>
      <Row>
        <Col sm={{ size: 1, offset: 1 }}>
          <div>1/65</div>
        </Col>
        <Col>
          <Progress color="success" value="50" max={65} />
        </Col>
        {/* <p>clock icon</p>
        <p>time</p>
        <p>pause</p>
        <p>stop modal</p> */}
      </Row>
      <Jumbotron className="jumbotronCustom">
        <h3>Question 1:</h3>
        <p></p>
      </Jumbotron>
    </>
  );
};

export default ExamSessions;
