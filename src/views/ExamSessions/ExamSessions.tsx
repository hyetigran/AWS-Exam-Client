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
import { BareAnswer } from "../../localDB/model";

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

  // useEffect(() => {});
  // console.log("modal", modal);
  // console.log("uA", userAnswers);

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
    let isCorrect = false;
    const {
      isMultipleChoice,
      correctAnswer,
      incorrectAnswer,
      question,
      explanation,
    } = examData.questions[examData.currentQuestion - 1];

    // Toggle isSelected and isCorrect
    let cAnswers = correctAnswer.map((answer) => {
      if (userAnswers[qId].findIndex((aId) => aId === answer.answerId)) {
        answer.isSelected = true;
      }
      let newAnswer = { ...answer, isCorrect: true };
      return newAnswer;
    });
    let iAnswers = incorrectAnswer.map((answer) => {
      if (userAnswers[qId].findIndex((aId) => aId === answer.answerId)) {
        answer.isSelected = true;
      }
      let newAnswer = { ...answer, isCorrect: false };
      return newAnswer;
    });
    if (userAnswers![qId] === undefined) {
      //if user skips question without selecting an answer
      setUserAnswers({ ...userAnswers, [qId]: [] });
    } else if (isMultipleChoice) {
      //if question is MC, check selected against correct array
      isCorrect = userAnswers![qId][0] === correctAnswer[0].answerId;
    } else {
      // if question is select multiple answers
      if (userAnswers![qId].length !== 2) {
        // incorrect if at least 2 answers are not selected
        // or no answers have been selected
      } else {
        //check if the right answers were selected
        let firstChoice = userAnswers[qId][0];
        let secondChoice = userAnswers[qId][1];
        if (
          correctAnswer.findIndex((el: Answer) => firstChoice === el.answerId) >
            -1 &&
          correctAnswer.findIndex(
            (el: Answer) => secondChoice === el.answerId
          ) > -1
        ) {
          isCorrect = true;
        }
      }
    }

    let questioned = {
      isMultipleChoice,
      explanation,
      question,
      answers: [...iAnswers, ...cAnswers],
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
          currentQuestion
        )
      );
    }
  };

  const finishExam = (e: React.MouseEvent) => {
    const {
      isMultipleChoice,
      correctAnswer,
      incorrectAnswer,
      question,
      explanation,
    } = examData.questions[examData.currentQuestion - 1];

    let EXAM_SESSION_ID = examData.EXAM_SESSION_ID;

    let cAnswers = correctAnswer.map((answer) => {
      return { ...answer, isCorrect: true };
    });
    let iAnswers = incorrectAnswer.map((answer) => {
      return { ...answer, isCorrect: false };
    });
    let questioned = {
      isMultipleChoice,
      explanation,
      question,
      answers: [...iAnswers, ...cAnswers],
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
