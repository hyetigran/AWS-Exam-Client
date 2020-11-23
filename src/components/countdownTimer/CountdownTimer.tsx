import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ClockCircleOutlined,
  PauseOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { RootState } from "../../store/types";

import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [unit, setUnit] = useState("");
  const time = useSelector((state: RootState) => state.exam.time);
  console.log("unit", unit);

  useEffect(() => {
    startCountdown();
  }, []);

  const startCountdown = () => {
    let distance = +time;
    setInterval(() => {
      distance -= 1000;
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setUnit(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  };

  return (
    <div className="timer-container">
      <ClockCircleOutlined className="icon" />
      <div className="timer">{unit}</div>
      <PauseOutlined className="icon" onClick={() => console.log("click")} />
      <CloseOutlined className="icon" onClick={() => console.log("click")} />
    </div>
  );
};

export default CountdownTimer;
