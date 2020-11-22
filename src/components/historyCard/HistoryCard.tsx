import React from "react";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "./HistoryCard.css";

const HistoryCard = () => {
  const lineWidth = 60;
  return (
    <Card className="text-center">
      <PieChart
        data={[
          { title: "Correct", value: 10, color: "#85edc2" },
          { title: "Incorrect", value: 15, color: "#ff7372" },
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
        <CardTitle>Exam: Cloud Practitioner</CardTitle>
        <CardSubtitle>Exam Number: 1</CardSubtitle>
        <CardText>70% Correct</CardText>
        <CardText>{Date.now()}</CardText>
        <Button outline color="primary">
          <Link to={`exam-review/`}>Review Questions</Link>
        </Button>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
