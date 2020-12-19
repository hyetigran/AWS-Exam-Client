import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/history/types";

import { thunkFetchQuestionHistory } from "../../store/history/actions";

interface ReviewParams {
  examType: string;
  examNumber: string;
  examSessionID: string;
}
const ExamReview = () => {
  debugger;
  let { examSessionID } = useParams<ReviewParams>();
  const examReviewData = useSelector((state: RootState) => state.examHistory);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchFullExamSession();
  }, []);

  const fetchFullExamSession = () => {
    dispatch(thunkFetchQuestionHistory(examSessionID));
  };
  console.log(examReviewData);
  return <div>ExamReviewComponent</div>;
};

export default ExamReview;
