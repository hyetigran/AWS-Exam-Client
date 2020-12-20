import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useHistory } from "react-router-dom";

import "./ReviewPaper.css";

type ReviewPaperProps = {};

const ReviewPaper: React.FC<ReviewPaperProps> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Questions");
  let dropdownOptions = ["All Questions", "Correct", "Incorrect", "Skipped"];
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
            segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
            // labelPosition={100 - lineWidth / 2}
            labelStyle={{
              fill: "#fff",
              opacity: 0.75,
              pointerEvents: "none",
            }}
          />
        </div>
        <div className="review-dropdown">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{selectedOption}</DropdownToggle>
            <DropdownMenu>
              {dropdownOptions.map((opt) => (
                <DropdownItem key={opt} onClick={() => setSelectedOption(opt)}>
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
