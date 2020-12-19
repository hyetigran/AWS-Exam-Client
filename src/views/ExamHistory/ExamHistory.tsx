import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardDeck, Jumbotron } from "reactstrap";
import { thunkFetchExamHistory } from "../../store/history/actions";
import { RootState, ExamHistoryType } from "../../store/history/types";
import emptyImage from "../../assets/undraw_empty_xct9.png";
import HistoryCard from "../../components/historyCard/HistoryCard";

import "./ExamHistory.css";

const ExamHistory = () => {
  const completedExamSessions = useSelector(
    (state: RootState) => state.examHistory
  );
  const dispatch = useDispatch();

  // Fetch completed exam sessions from indexedDB
  useEffect(() => {
    dispatch(thunkFetchExamHistory());
  }, []);

  return (
    <div className="historyContainer">
      <CardDeck>
        {completedExamSessions ? (
          completedExamSessions.map((exam: ExamHistoryType) => {
            return <HistoryCard key={exam.gid} exam={exam} />;
          })
        ) : (
          <Jumbotron>
            <img src={emptyImage} alt="Empty" />
          </Jumbotron>
        )}
      </CardDeck>
    </div>
  );
};

export default ExamHistory;
