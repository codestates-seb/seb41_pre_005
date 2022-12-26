import React, { useState } from "react";
import styled from "styled-components";
// import AskQuestionButton from "../../components/questions/AskQuestionButton";
import PostQuestionBtn from "../../components/questions/PostQuestionBtn";
import AskQuestionForm from "../../components/questions/AskQuestionForm";
import AskQuestionTags from "../../components/questions/AskQuestionTags";
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
  max-height: 125px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  margin: 12px 0 0 0;
`;
const AskQuestion = (props) => {
  const [questionBody, setQuestionBody] = useState();
  return (
    <AskPageLayout>
      <AskContainer>
        <form>
          <Main>
            <Notice></Notice>
            <TitleContainer></TitleContainer>
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
