import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
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
  time: string;
  pauseExam: (arg0: string) => void;
}

// const CountdownTimer = ({ toggle, modal }: Props) => {
//   console.log("mounted");
//   console.log("modal", modal);
//   const [unit, setUnit] = useState("");
//   const time = useSelector((state: RootState) => state.exam.time);
//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   startCountdown();
//   // }, []);

//   useEffect(() => {
//     if (modal) {
//       console.log("cleared", interval);
//       clearInterval(interval);
//     } else {
//       startCountdown();
//     }
//   }, [modal]);

//   let interval: ReturnType<typeof setTimeout>;

//   // const timer = () => {
//   //   console.log(distance);
//   //   // Terminal condition
//   //   if (distance <= 0) {
//   //     setUnit("0:00:00");
//   //     clearInterval(interval);
//   //   } else if (distance > 0) {
//   //     distance -= 1000;
//   //     var hours = Math.floor(
//   //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   //     );
//   //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   //     setUnit(`${hours}:${minutes}:${seconds}`);
//   //   }
//   // };
//   const startCountdown = () => {
//     let distance = +time;
//     interval = setInterval(() => {
//       // Terminal condition
//       if (distance <= 0) {
//         setUnit("0:00:00");
//         clearInterval(interval);
//       } else if (distance > 0) {
//         distance -= 1000;
//         var hours = Math.floor(
//           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//         setUnit(`${hours}:${minutes}:${seconds}`);
//       }
//     }, 1000);
//   };

//   const pauseCountdown = () => {
//     // Open Modal
//     toggle();
//     // Clear interval
//     clearInterval(interval);
//     // Dispatch units as new time
//     dispatch(pauseExam(unit));
//   };

//   return (
//     <div className="timer-container">
//       <ClockCircleOutlined className="icon" />
//       <div className="timer">{unit}</div>
//       <PauseOutlined className="icon" onClick={() => pauseCountdown()} />
//       <CloseOutlined className="icon" onClick={() => console.log("click")} />
//     </div>
//   );
// };

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
      console.log("hit");
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
  pauseCountdown = () => {
    // Open Modal
    this.props.toggle();
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
        <PauseOutlined className="icon" onClick={() => this.pauseCountdown()} />
        <CloseOutlined className="icon" onClick={() => console.log("click")} />
      </div>
    );
  }
}
const mapState = (state: RootState) => ({
  time: state.exam.time,
});

export default connect(mapState, { pauseExam })(CountdownTimer);
