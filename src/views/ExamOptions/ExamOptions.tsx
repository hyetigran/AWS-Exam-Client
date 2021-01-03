import axios from "axios";
import { access } from "fs";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Col,
  Button,
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { thunkGetExam } from "../../store/exam/actions";

import "./ExamOptions.css";
const INSTRUCTIONS = [
  "You can pause the test at any time and resume later.",
  "You can retake the test as many times as you would like.",
  "The progress bar will show your progress and the time remaining in the test. If you run out of time, don’t worry; you will still be able to finish the test.",
  "If you want to finish the test and see your results immediately, press the stop button.",
];
interface Exams {
  [key: string]: {
    exam_number: string;
    id: number;
  }[];
}

const ExamOptions = () => {
  const [examOption, setExamOption] = useState<Exams>();
  const [selectName, setSelectName] = useState<string>("Cloud Practitioner");
  const [selectID, setSelectID] = useState<number>(-1);

  console.log("select", selectID);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/exams`);
    let initialExamOption = result.data.exams.reduce(
      (
        acc: Exams,
        cur: { exam_type: string; id: number; exam_number: string }
      ) => {
        if (acc.hasOwnProperty(cur.exam_type)) {
          let newEntry = { id: cur.id, exam_number: cur.exam_number };
          acc[cur.exam_type].push(newEntry);
        } else {
          acc[cur.exam_type] = [{ id: cur.id, exam_number: cur.exam_number }];
        }
        return acc;
      },
      {}
    );
    let defaultOption = Object.keys(initialExamOption)[0];
    setExamOption(initialExamOption);
    setSelectID(initialExamOption[defaultOption][0].id);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "examName") {
      setSelectName(e.target.value);
    } else if (e.target.name === "examNumber") {
      let exam = examOption![selectName].filter(
        (el) => el.exam_number === e.target.value
      );
      setSelectID(exam[0].id);
    }
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(thunkGetExam(selectID, history));
  };

  return (
    <Jumbotron className="jumbotronCustom">
      <h4>65 questions | 1 hour 30 minutes | 70% correct required to pass</h4>
      <Col md={{ size: 8, offset: 2 }}>
        <Form>
          {examOption && (
            <>
              <FormGroup>
                <Label for="examName">Select Exam Name</Label>
                <Input
                  type="select"
                  name="examName"
                  id="exampleSelect"
                  onChange={(e) => changeHandler(e)}
                >
                  {Object.keys(examOption).map((el, idx) => {
                    return (
                      <option key={idx} value={el}>
                        AWS Certified {el} Practice Exam
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="examNumber">Select Exam Number</Label>
                <Input
                  type="select"
                  name="examNumber"
                  id="examNumber"
                  onChange={(e) => changeHandler(e)}
                >
                  {examOption[selectName].map(
                    (el: { exam_number: string; id: number }) => {
                      return (
                        <option key={el.id} value={el.exam_number}>
                          Exam {el.exam_number}
                        </option>
                      );
                    }
                  )}
                </Input>
              </FormGroup>
            </>
          )}
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
              onClick={(e) => submitHandler(e)}
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
