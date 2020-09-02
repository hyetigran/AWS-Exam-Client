import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Progress } from "reactstrap";
import { getExam } from "../../store/actions";

const ExamSessions = () => {
  const dispatch = useDispatch();
  useEffect(() => {});

  return (
    <div>
      <Progress bar color="success" value="15" max={65}>
        15
      </Progress>
    </div>
  );
};

export default ExamSessions;
