import React, { useState } from "react";
import styled from "styled-components";
import AskQuestionButton from "../../components/questions/AskQuestionButton";
import AskQuestionForm from "../../components/questions/AskQuestionForm";
import AskQuestionTags from "../../components/questions/AskQuestionTags";
const AskPageLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f2f3;
`;
const AskContainer = styled.div`
  width: 100%;
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
              <AskQuestionButton>Review your question</AskQuestionButton>
            </ButtonContainer>
          </Main>
        </form>
      </AskContainer>
    </AskPageLayout>
  );
};

export default AskQuestion;
