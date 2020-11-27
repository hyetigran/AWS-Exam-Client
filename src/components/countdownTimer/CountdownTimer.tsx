import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ClockCircleOutlined,
  PauseOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { RootState } from "../../store/types";
import { pauseExam } from "../../store/actions";

import "./CountdownTimer.css";

interface Props {
  toggle: () => void;
  modal: boolean;
}

const CountdownTimer = ({ toggle, modal }: Props) => {
  console.log("mounted");
  console.log("modal", modal);
  const [unit, setUnit] = useState("");
  const time = useSelector((state: RootState) => state.exam.time);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("uE runs");
    startCountdown();
  }, []);

  useEffect(() => {
    if (modal) {
      console.log("cleared");
      clearInterval(interval);
    }
  }, [modal]);

  let interval: ReturnType<typeof setTimeout>;
  const startCountdown = () => {
    let distance = 5000;
    interval = setInterval(() => {
      // Terminal condition
      if (distance <= 0) {
        setUnit("0:00:00");
        clearInterval(interval);
      } else if (distance > 0) {
        distance -= 1000;
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setUnit(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);
  };

  const pauseCountdown = () => {
    // Open Modal
    toggle();
    // Clear interval
    clearInterval(interval);
    // Dispatch units as new time
    dispatch(pauseExam(unit));
  };

  return (
    <div className="timer-container">
      <ClockCircleOutlined className="icon" />
      <div className="timer">{unit}</div>
      <PauseOutlined className="icon" onClick={() => pauseCountdown()} />
      <CloseOutlined className="icon" onClick={() => console.log("click")} />
    </div>
  );
};

export default CountdownTimer;
