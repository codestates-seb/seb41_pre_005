import React, { useState } from "react";
import styled from "styled-components";
// import AskQuestionButton from "../../components/questions/AskQuestionButton";
import PostQuestionBtn from "../../components/questions/PostQuestionBtn";
import AskQuestionForm from "../../components/questions/AskQuestionForm";
import AskQuestionTags from "../../components/questions/AskQuestionTags";
import AskQuestionTitle from "../../components/questions/AskQuestionTitle";
import AskQuestionHeadline from '../../components/questions/AskQuestionHeadline';
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
    background-color: #f1f2f3;
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
const AskQuestion = (props) => {
  const [questionBody, setQuestionBody] = useState();
  return (
    <AskPageLayout>
      <AskQuestionHeadline></AskQuestionHeadline>
      <AskContainer>
        <form>
          <Main>
            <Notice></Notice>
            <TitleContainer><AskQuestionTitle></AskQuestionTitle></TitleContainer>
            <AskQuestionForm />
            <AskQuestionTags />
            <ButtonContainer>
              <PostQuestionBtn></PostQuestionBtn>
            </ButtonContainer>
          </Main>
        </form>
      </AskContainer>
    </AskPageLayout>
  );
};

export default AskQuestion;
