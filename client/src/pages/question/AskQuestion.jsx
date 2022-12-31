import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import AskQuestionButton from "../../components/questions/AskQuestionButton";
import PostQuestionBtn from "../../components/questions/PostQuestionBtn";
import AskQuestionForm from "../../components/questions/ask/AskQuestionForm";
import AskQuestionTags from "../../components/questions/ask/AskQuestionTags";
import AskQuestionTitle from "../../components/questions/ask/AskQuestionTitle";
import AskQuestionHeadline from "../../components/questions/ask/AskQuestionHeadline";
import Footer from "../../components/common/Footer";
import { FormProvider, useForm } from "react-hook-form";
import { postQuestion } from "../../api/questionAPI";
import { useSelector } from "react-redux";
import { Cookies } from "react-cookie";
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
  /* 임시로 지정 */
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
const AskQuestion = (props) => {
  const methods = useForm(initialValue);
  const user = useSelector((state) => state);
  const cookie = new Cookies();
  const Token = cookie.get("token");

  const onSubmit = async (data) => {
    console.log(data);
    /*     const tagNameList = data.tags.map((item) => item.tagName);

    const formData = {
      content: data.content,
      title: data.title,
      tagNameList,
    };
    try {
      const response = await axios({
        method: "post",
        url: "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090/questions/ask",
        data: formData,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    } */
    const res = await postQuestion(data, user.token || Token);
    console.log(res);
  };
  return (
    <>
      <AskPageLayout>
        <AskQuestionHeadline></AskQuestionHeadline>
        <AskContainer>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Main>
                <Notice></Notice>
                <TitleContainer>
                  <AskQuestionTitle></AskQuestionTitle>
                </TitleContainer>
                <AskQuestionForm />
                <AskQuestionTags />
                <ButtonContainer>
                  <PostQuestionBtn></PostQuestionBtn>
                </ButtonContainer>
              </Main>
            </form>
          </FormProvider>
        </AskContainer>
      </AskPageLayout>
      <Footer />
    </>
  );
};

export default AskQuestion;
