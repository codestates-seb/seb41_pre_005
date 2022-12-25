import React, { useEffect, useState } from "react";
import styled from "styled-components";
const UploadTime = styled.time`
  color: hsl(210, 8%, 45%);
  white-space: nowrap;
  font-size: 1.2rem;
`;
const ElapsedTime = ({ createdAt }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    function calculateElapsedTime() {
      const uploadTime = new Date(createdAt);
      const currentTime = new Date();
      const timeDiff = (currentTime - uploadTime) / 1000;
      const times = [
        { time: "년", seconds: 60 * 60 * 24 * 365 },
        { time: "개월", seconds: 60 * 60 * 24 * 30 },
        { time: "일", seconds: 60 * 60 * 24 },
        { time: "시간", seconds: 60 * 60 },
        { time: "분", seconds: 60 },
      ];
      let formattedTimeDiff;
      for (let item of times) {
        if (item === "분") {
          formattedTimeDiff =
            Math.floor(timeDiff / item.seconds) + `${item.time}전`;
        }
        if (timeDiff / item.seconds < 1) {
          continue;
        } else {
          formattedTimeDiff =
            Math.floor(timeDiff / item.seconds) + `${item.time}전`;
          break;
        }
      }

      return formattedTimeDiff;
    }
    setElapsedTime(calculateElapsedTime());
  }, []);
  return <UploadTime>{elapsedTime || "now"}</UploadTime>;
};

export default ElapsedTime;
