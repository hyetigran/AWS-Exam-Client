import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./ReviewPaper.css";
import { ExamHistoryType } from "../../store/history/types";

type ReviewPaperProps = {
  exam: ExamHistoryType;
};

const ReviewPaper: React.FC<ReviewPaperProps> = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Questions");
  let dropdownOptions = ["All Questions", "Correct", "Incorrect", "Skipped"];
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const filterQuestions = (selOpts: string) => {
    if (dropdownOptions[0] === selOpts) {
      return props.exam.questions!;
    }

    return props.exam.questions!.filter((question) => {
      if (selOpts === "Correct") {
        return question.status === 1;
      } else if (selOpts === "Incorrect") {
        return question.status === 0;
      } else if (selOpts === "Skipped") {
        return question.status === 2;
      }
    });
  };
  let filteredQuestions = filterQuestions(selectedOption);

  return (
    <div className="review-paper">
      <div className="review-overview">
        <div className="review-chart">
          <PieChart
            className="thumb-piechart"
            data={[
              { title: "Correct", value: 1, color: "#85edc2" },
              { title: "Incorrect", value: 65 - 1, color: "#ff7372" },
            ]}
            radius={PieChart.defaultProps.radius - 10}
            lineWidth={15}
          />
        </div>
        <div className="review-dropdown">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{selectedOption}</DropdownToggle>
            <DropdownMenu>
              {dropdownOptions.map((opt) => (
                <DropdownItem
                  key={opt}
                  onClick={() => {
                    if (opt !== selectedOption) setSelectedOption(opt);
                  }}
                >
                  {opt}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div>review</div>
    </div>
  );
};

export default ReviewPaper;
