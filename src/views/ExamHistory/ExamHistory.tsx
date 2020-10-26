import React from "react";
import { CardDeck } from "reactstrap";
import HistoryCard from "../../components/historyCard/HistoryCard";

import "./ExamHistory.css";

const ExamHistory = () => {
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
