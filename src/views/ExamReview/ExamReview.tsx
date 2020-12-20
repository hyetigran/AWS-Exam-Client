import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "reactstrap";

import { RootState } from "../../store/history/types";
import { thunkFetchQuestionHistory } from "../../store/history/actions";
import ReviewPaper from "../../components/reviewPaper/ReviewPaper";
import "./ExamReview.css";

interface ReviewParams {
  examType: string;
  examNumber: string;
  examSessionID: string;
}
const ExamReview = () => {
  let { examSessionID } = useParams<ReviewParams>();
  const examReviewData = useSelector((state: RootState) => state.examHistory);
  const dispatch = useDispatch();
  const history = useHistory();
  let isFromHistory = history.location.state?.from === "history" ? true : false;
  let exam = isFromHistory && history.location.state.exam;

  let { examType, examNumber } = examReviewData[0];

  useEffect(() => {
    fetchFullExamSession();
  }, []);

  const fetchFullExamSession = () => {
    dispatch(thunkFetchQuestionHistory(examSessionID, isFromHistory, exam));
  };
  console.log(examReviewData);
  return (
    <div>
      <div className="review-title">
        <h3>{`AWS ${examType} Practice Exam (${examNumber})`}</h3>
      </div>
      <div className="review-link">
        <Button color="link" onClick={() => history.push("/exam-history")}>
          {"< Return to history"}
        </Button>
      </div>
      <ReviewPaper />
    </div>
  );
};

export default ExamReview;
