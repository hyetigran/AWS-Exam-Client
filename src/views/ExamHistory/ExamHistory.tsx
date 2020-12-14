import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardDeck } from "reactstrap";
import HistoryCard from "../../components/historyCard/HistoryCard";

import "./ExamHistory.css";

const ExamHistory = () => {
  // const completedExamSessions = useSelector()
  const dispatch = useDispatch();
  // Fetch completed exam sessions from indexedDB
  useEffect(() => {});

  return (
    <div className="historyContainer">
      <CardDeck>
        <HistoryCard />
        <HistoryCard />
      </CardDeck>
    </div>
  );
};

export default ExamHistory;
