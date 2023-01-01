import React, { useEffect } from "react";
import styled from "styled-components";
import QuestionsItem from "./QuestionsItem";
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

const QuestionsList = (props) => {
  const questions = useSelector((state) => state.questions.data);
  const dispatch = useDispatch();
  const location = useLocation();
  let query = location.search;
  useEffect(() => {

    async function paginationQuestions() {
      if (location.pathname === "/") return;
      if (query.trim() === "") {
        query = "?page=1";
      }
      const questions = await getQuestions(query);
      dispatch(storeQuestions(questions));
    }
    paginationQuestions();
  }, [query]);

  return (
    <Main>
      {questions?.map((item) => (
        <QuestionsItem question={item} key={item.questionId} />
      ))}
      <Pagination />
    </Main>
  );
};

export default QuestionsList;
