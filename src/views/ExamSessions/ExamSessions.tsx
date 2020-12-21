import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Progress } from "reactstrap";
import { RootState } from "../../store/exam/types";
// import { RootState } from "../../store/index";
import { Col, Row, Jumbotron } from "reactstrap";

import SessionCard from "../../components/exam/SessionCard";
import CountdownTimer from "../../components/countdownTimer/CountdownTimer";
import ControlsModal from "../../components/modal/ControlsModal";

import "./ExamSessions.css";
import { nextQuestion, submitExam } from "../../store/exam/actions";
import { Answer } from "../../store/exam/types";

interface UserAnswers {
  [key: string]: string[];
}

const ExamSessions = () => {
  const examData = useSelector((state: RootState) => state.exam);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [modal, setModal] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const { currentQuestion } = examData;
  const dispatch = useDispatch();
  const history = useHistory();

  const answerSelectHandler = (
    isChecked: boolean,
    //event: React.ChangeEvent<HTMLInputElement>,
    qId: string,
    aId: string
  ) => {
    // if q is MC then only one answer can be selected
    if (examData.questions[currentQuestion - 1].isMultipleChoice) {
      // can only have one answer selected
      setUserAnswers({ ...userAnswers, [qId]: [aId] });
    } else {
      //handle checkbox selection
      let answers = userAnswers[qId] === undefined ? [] : userAnswers[qId];
      if (isChecked) {
        answers.push(aId);
      } else {
        //if target is un checked, remove from userAnswers
        let answersIndex = userAnswers[qId].findIndex((el) => el === aId);
        answers.splice(answersIndex, 1);
      }
      setUserAnswers({ ...userAnswers, [qId]: answers });
    }
  };

  const nextQuestionHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    let EXAM_SESSION_ID = examData.EXAM_SESSION_ID;
    let qId = examData.questions[examData.currentQuestion - 1].questionId;
    let isCorrect = true;

    // Correct 1; Incorrect 0; Skipped 2;
    let newStatus = 2;
    const {
      isMultipleChoice,
      answers,
      question,
      explanation,
    } = examData.questions[examData.currentQuestion - 1];

    // Toggle isSelected
    let updatedAnswers: Answer[] = [];

    for (let i in answers) {
      let answer = answers[i];

      if (userAnswers[qId].findIndex((aId) => aId === answer.answerId) >= 0) {
        answer.isSelected = 1;
      }
      // Selected and not correct OR not selected and is correct
      if (answer.isSelected !== answer.isCorrect) {
        isCorrect = false;
        newStatus = 0;
      } else if (answer.isSelected && answer.isCorrect) {
        newStatus = 1;
      }
      updatedAnswers.push(answer);
    }

    let questioned = {
      isMultipleChoice,
      explanation,
      question,
      status: newStatus,
      answers: updatedAnswers,
    };
    // Redux Action
    dispatch(
      nextQuestion(isCorrect, currentQuestion, questioned, EXAM_SESSION_ID)
    );
    // All exams have 65 questions
    if (currentQuestion === 65) {
      dispatch(
        submitExam(
          history,
          examData.examType,
          examData.examNumber,
          questioned,
          EXAM_SESSION_ID,
          currentQuestion,
          examData
        )
      );
    }
  };

  const finishExam = (e: React.MouseEvent) => {
    const {
      isMultipleChoice,
      answers,
      question,
      explanation,
      status,
    } = examData.questions[examData.currentQuestion - 1];

    let EXAM_SESSION_ID = examData.EXAM_SESSION_ID;

    let questioned = {
      isMultipleChoice,
      explanation,
      question,
      answers,
      status,
    };

    dispatch(
      submitExam(
        history,
        examData.examType,
        examData.examNumber,
        questioned,
        EXAM_SESSION_ID,
        currentQuestion,
        examData
      )
    );
  };

  const toggleModal = (isStopped: boolean) => {
    setModal(!modal);
    setIsStopped(isStopped);
  };

  return (
    <>
      <Row>
        <Col sm={{ size: 1, offset: 1 }}>
          <div>{examData.currentQuestion}/65</div>
        </Col>
        <Col sm={{ size: 7 }}>
          <Progress color="success" value={examData.currentQuestion} max={65} />
        </Col>
        <Col sm={{ size: 1 }}>
          <CountdownTimer toggle={toggleModal} modal={modal} />
        </Col>
      </Row>
      <Jumbotron className="jumbotronCustom">
        <SessionCard
          question={examData.questions[examData.currentQuestion - 1]}
          currentQuestion={examData.currentQuestion}
          answerSelect={answerSelectHandler}
          nextQuestion={nextQuestionHandler}
        />
      </Jumbotron>
      {modal && (
        <ControlsModal
          finishExam={finishExam}
          isStopped={isStopped}
          toggle={toggleModal}
          modal={modal}
        />
      )}
    </>
  );
};

export default ExamSessions;
