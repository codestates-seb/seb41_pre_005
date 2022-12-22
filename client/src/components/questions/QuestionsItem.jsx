import React from "react";

const QuestionsItem = ({ question }) => {
  return <li>{question?.questionTitle}</li>;
};

export default QuestionsItem;
