import React, { useEffect } from "react";
import styled from "styled-components";
import QuestionsItem from "../questions/QuestionsItem";
import Pagination from "../pagination/Pagination";
import { getQuestions } from "../../api/questionAPI";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeQuestions } from "../../redux/questionsReducer";

const Main = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid hsl(210, 8%, 90%);
  border-bottom: 1px solid hsl(210, 8%, 90%);
`;

const SearchList = ({ questions }) => {
  return (
    <Main>
      {questions?.map((item) => (
        <QuestionsItem question={item} key={item.questionId} />
      ))}
      <Pagination />
    </Main>
  );
};

export default SearchList;
