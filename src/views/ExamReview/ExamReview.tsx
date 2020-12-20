import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/history/types";

import { thunkFetchQuestionHistory } from "../../store/history/actions";
import { useHistory, useParams } from "react-router-dom";

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

  useEffect(() => {
    fetchFullExamSession();
  }, []);

  const fetchFullExamSession = () => {
    dispatch(thunkFetchQuestionHistory(examSessionID, isFromHistory, exam));
  };
  console.log(examReviewData);
  return <div>ExamReviewComponent</div>;
};

export default ExamReview;
