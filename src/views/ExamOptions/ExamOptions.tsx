import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Button,
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { getExam } from "../../store/actions";
import { ExamState } from "../../store/types";

import "./ExamOptions.css";
const INSTRUCTIONS = [
  "You can pause the test at any time and resume later.",
  "You can retake the test as many times as you would like.",
  "The progress bar will show your progress and the time remaining in the test. If you run out of time, don’t worry; you will still be able to finish the test.",
  "If you want to finish the test and see your results immediately, press the stop button.",
];
const ExamOptions = () => {
  const { examNumber, examType } = useSelector((state: ExamState) => state);

  const dispatch = useDispatch();

  return (
    <Jumbotron className="jumbotronCustom">
      <h4>65 questions | 1 hour 30 minutes | 70% correct required to pass</h4>
      <Col md={{ size: 8, offset: 2 }}>
        <Form>
          <FormGroup>
            <Label for="examName">Select Exam Name</Label>
            <Input type="select" name="examName" id="exampleSelect">
              <option value="CCP">
                AWS Certified Cloud Practitioner Practice Exam
              </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examNumber">Select Exam Number</Label>
            <Input type="select" name="examNumber" id="examNumber">
              <option value="1">First Exam</option>
            </Input>
          </FormGroup>
          <p>INSTRUCTIONS:</p>
          <ul>
            {INSTRUCTIONS.map((el, id) => (
              <li key={id}>{el}</li>
            ))}
          </ul>
          <Col md={{ size: 6, offset: 3 }}>
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => dispatch(getExam(examNumber, examType))}
            >
              Start Test
            </Button>
          </Col>
        </Form>
      </Col>
    </Jumbotron>
  );
};

export default ExamOptions;
