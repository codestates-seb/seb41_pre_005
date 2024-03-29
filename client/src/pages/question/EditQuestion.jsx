import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AskQuestionHeadline from "../../components/questions/ask/AskQuestionHeadline";
import Footer from "../../components/common/Footer";
import { FormProvider, useForm } from "react-hook-form";
import { postQuestion } from "../../api/questionAPI";
import { useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import QuestionEditor from "../../components/questions/edit/QuestionEditor";
import { useLocation } from "react-router-dom";

const AskPageLayout = styled.div`
  width: 851px;
  height: 100%;
  &::after {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: "";
    background-color: #f8f9f9;

    @media screen and (max-height: 1024px) {
      height: 160%;
    }
    @media screen and (max-height: 660px) {
      height: 220%;
    }
  }
`;
const AskContainer = styled.div`
  width: 851px;
  height: 100%;
  margin: auto;
  max-width: 770px;
  min-height: 750px;

  overflow: visible;
`;
const Main = styled.main`
  margin-bottom: 4.8rem;
`;
const Notice = styled.div`
  max-height: 411px;
`;
const TitleContainer = styled.div`
  width: 85.1rem;
  height: 100%;
  max-width: 77rem;
  max-height: 14.9578rem;
  background-color: #ffffff;
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;
  padding: 2.4rem;
  border: 1px solid hsl(210, 8%, 90%);
`;
const ButtonContainer = styled.div`
  width: 100%;
  margin: 12px 0 0 0;
`;
const initialValue = {
  title: "",
  content: "",
  tags: [],
};
const EditQuestion = (props) => {
  const methods = useForm(initialValue);
  const user = useSelector((state) => state.currentUser);
  const cookie = new Cookies();
  const Token = cookie.get("token");
  const { state } = useLocation();

  const onSubmit = async (data) => {
    console.log(user);
    const res = await postQuestion(data, user.token || Token, user.userId);
    console.log(res);
  };
  return (
    <>
      <AskPageLayout>
        <AskQuestionHeadline></AskQuestionHeadline>
        <AskContainer>
          <Main>
            <Notice></Notice>
            <QuestionEditor
              title={state?.title}
              questionContent={state?.content}
              tagList={state?.tagList}
              questionId={state.questionId}
            />
          </Main>
        </AskContainer>
      </AskPageLayout>
      <Footer />
    </>
  );
};

export default EditQuestion;
