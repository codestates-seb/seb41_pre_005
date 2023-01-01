import styled from "styled-components";
import { useState, useEffect } from "react";
const UploadTime = styled.time`
  color: hsl(210, 8%, 45%);
  white-space: nowrap;
  font-size: 1.3rem;
`;
const QuestionDetailTimeDiff = ({ createdAt }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    function calculateElapsedTime() {
      const uploadTime = new Date(createdAt);
      const currentTime = new Date();
      const timeDiff = (currentTime - uploadTime) / 1000;
      const times = [
        { time: "Year", seconds: 60 * 60 * 24 * 365 },
        { time: "Months", seconds: 60 * 60 * 24 * 30 },
        { time: "Day", seconds: 60 * 60 * 24 },
        { time: "Hours", seconds: 60 * 60 },
        { time: "Minutes", seconds: 60 },
      ];
      let formattedTimeDiff;
      for (let item of times) {
        if (item === "Minutes") {
          formattedTimeDiff =
            Math.floor(timeDiff / item.seconds) + ` ${item.time}`;
        }
        if (timeDiff / item.seconds < 1) {
          continue;
        } else {
          formattedTimeDiff =
            Math.floor(timeDiff / item.seconds) + ` ${item.time}`;
          break;
        }
      }

      return formattedTimeDiff;
    }
    setElapsedTime(calculateElapsedTime());
  });
  return <UploadTime> {elapsedTime || "now"}</UploadTime>;
};

export default QuestionDetailTimeDiff;
