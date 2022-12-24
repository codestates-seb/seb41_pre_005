import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import QuestionsItem from "./QuestionsItem";
const Main = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid hsl(210, 8%, 90%);
  border-bottom: 1px solid hsl(210, 8%, 90%);
`;

const QuestionsList = (props) => {
  const [questions, setQuestions] = useState();
  useEffect(() => {
    async function loadQuestions() {
      const questionData = await axios({
        method: "get",
        url: "data/data.json",
      });
      setQuestions(questionData.data.questions);
      return questionData;
    }
    loadQuestions();
  }, []);

  return (
    <Main>
      {questions?.map((item) => (
        <QuestionsItem question={item} key={item.id} />
      ))}
    </Main>
  );
};

export default QuestionsList;
