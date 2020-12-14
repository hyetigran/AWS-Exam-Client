import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  ClockCircleOutlined,
  PauseOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { RootState } from "../../store/exam/types";
import { pauseExam } from "../../store/exam/actions";

import "./CountdownTimer.css";

interface Props {
  toggle: (arg0: boolean) => void;
  modal: boolean;
  time: string;
  pauseExam: (arg0: string) => void;
}

class CountdownTimer extends React.Component<Props> {
  state = {
    hours: "0",
    minutes: "00",
    seconds: "00",
  };
  componentDidMount() {
    this.startCountdown();
  }
  componentDidUpdate(prevProps: Props) {
    if (!this.props.modal && this.props.modal !== prevProps.modal) {
      this.startCountdown();
    }
  }

  interval: NodeJS.Timeout;
  startCountdown = () => {
    let distance = +this.props.time;
    this.interval = setInterval(() => {
      // Terminal condition
      if (distance <= 0) {
        this.setState({ hours: "0", minutes: "00", seconds: "00" });
        clearInterval(this.interval);
      } else if (distance > 0) {
        distance -= 1000;
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({
          hours: hours.toString(),
          minutes: minutes.toString(),
          seconds: seconds.toString(),
        });
      }
    }, 1000);
  };
  pauseCountdown = (isStopped: boolean) => {
    // Open Modal
    this.props.toggle(isStopped);
    // Clear interval
    clearInterval(this.interval);
    // Dispatch units as new time
    let { hours, minutes, seconds } = this.state;
    let newTime =
      +hours * 1000 * 60 * 60 + +minutes * 1000 * 60 + +seconds * 1000;
    this.props.pauseExam(newTime.toString());
  };

  render() {
    let { hours, minutes, seconds } = this.state;
    let formattedMinutes =
      minutes.length < 2 ? "0" + minutes.toString() : minutes;
    let formattedSeconds =
      seconds.length < 2 ? "0" + seconds.toString() : seconds;
    return (
      <div className="timer-container">
        <ClockCircleOutlined className="icon" />
        <div className="timer">{`${hours}:${formattedMinutes}:${formattedSeconds}`}</div>
        <PauseOutlined
          className="icon"
          onClick={() => this.pauseCountdown(false)}
        />
        <CloseOutlined
          className="icon"
          onClick={() => this.pauseCountdown(true)}
        />
      </div>
    );
  }
}
const mapState = (state: RootState) => ({
  time: state.exam.time,
});

export default connect(mapState, { pauseExam })(CountdownTimer);
