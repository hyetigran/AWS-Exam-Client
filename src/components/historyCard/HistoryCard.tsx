import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "./HistoryCard.css";
import { ExamHistoryType } from "../../store/history/types";
import { msToHMS } from "../../helpers/utilities";

type HistoryCardProps = {
  exam: ExamHistoryType;
};

const HistoryCard: React.FC<HistoryCardProps> = (props) => {
  const { examNumber, examType, correct, time, gid } = props.exam;
  const history = useHistory();
  const lineWidth = 60;
  let formattedTime = msToHMS(5400000 - parseInt(time));
  return (
    <Card className="text-center" id="history">
      <PieChart
        data={[
          { title: "Correct", value: correct, color: "#85edc2" },
          { title: "Incorrect", value: 65 - correct, color: "#ff7372" },
        ]}
        label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
        radius={PieChart.defaultProps.radius - 6}
        lineWidth={60}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        animate
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          fill: "#fff",
          opacity: 0.75,
          pointerEvents: "none",
        }}
      />
      <CardBody>
        <CardTitle>{`Exam: ${examType}`}</CardTitle>
        <CardSubtitle>{`Exam Number: ${examNumber}`}</CardSubtitle>
        <CardText>{`Score: ${(correct / 65).toFixed(2)}%`}</CardText>
        <CardText>{`Duration: ${formattedTime}`}</CardText>
        <Button
          outline
          color="primary"
          onClick={() =>
            history.push(`exam-review/${examType}/${examNumber}/${gid}`, {
              exam: props.exam,
              from: "history",
            })
          }
        >
          Review Questions
        </Button>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
