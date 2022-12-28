import React from "react";
import styled from "styled-components";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import MainContentLayout from "../../components/layout/MainContentLayout";
import RightSideBarLayout from "../../components/layout/RightSideBarLayout";
import Footer from "../../components/common/Footer";
import QuestionEditEtc from "../../components/questions/QuestionEditEtc";
import QuestionVote from "../../components/questions/QuestionVote";
import AskQuestionForm from "../../components/questions/ask/AskQuestionForm";
import AnswerList from "../../components/answers/AnswerList";
import AskEditor from "../../components/questions/ask/AskEditor";
import Button from "../../components/common/Button";
import ElapsedTime from "../../components/answers/ElapsedTime";
import { ButtonBlue } from "../../components/common/Header";
import { FormProvider, useForm } from "react-hook-form";
import { postAnswer } from "../../api/answerAPI";

const QuestDetailContainer = styled.div`
  /* height: 100vh; */
  /* width: 100%;  */
  height: auto;
  min-height: 100%;
  padding-bottom: 322px;
`;
const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const QuestionHeadContainer = styled.div`
  width: 105.1rem;
  margin-top: 3rem;
  margin-left: 1.8rem;
  border-bottom: 1px solid grey;
`;
const Question = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  font-size: 15px;
`;
const QuestionContent = styled.div`
  width: 66rem;
  font-size: 15px;
  margin-right: 3rem;
`;
const Content = styled.div`
  max-width: 650px;
  border: 1px solid black;
  word-break: break-all;
`;
const TagsContain = styled.div`
  border: 1px solid black;
  width: 65rem;
  height: 4.6rem;
  margin-top: 3rem;
  margin-bottom: -5rem;
`;

const EditContain = styled.div`
  margin-left: -35rem;
`;
const Userinfo = styled.div`
  width: 200px;
  height: 67px;
  background-color: #dce9f6;
  margin-left: 80rem;
  margin-top: -1.5rem;
  border-radius: 3px;
`;
const ProfileImg = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 7px;
  border: 1px solid orange;
  background-color: orange;
  cursor: pointer;
  margin-left: 7px;
`;
const AnswerEditorHeader = styled.h2`
  padding-top: 2rem;
  margin-bottom: 1.9rem;
  font-weight: 400;
  font-size: 1.9rem;
`;
const ButtonContainer = styled.div`
  padding: 10px 0;
`;

const TimeContain = styled.div`
  width: 18.7rem;
  height: 2rem;
  margin-left: 7px;
`;
const UsernameContain = styled.div`
  font-size: 1.3rem;
  color: #0074cc;
  margin-left: 5rem;
  margin-top: -3rem;
`;
const HeadTitleBox = styled.div`
  width: 105.1rem;
  height: 8.089rem;
  display: flex;
  flex-direction: row;
`;
const HeadTitle = styled.div`
  width: 93.598rem;
  height: 7.289rem;
  font-size: 2.7rem;
  margin-bottom: 0.8rem;
`;
const HeadBtnBox = styled.div`
  width: 10.302rem;
  height: 7.289rem;

  margin-left: 3rem;
`;
const SmallTextBox = styled.div`
  width: 105.1rem;
  height: 3.4rem;
  padding-bottom: 0.8rem;
  display: flex;
  flex-direction: row;

  .smallText {
    font-size: 1.3rem;
    margin-right: 2rem;
    color: #6a737c;
  }
`;
const AskQuestionBtn = styled(ButtonBlue)``;
const QuestionDetail = () => {
  const methods = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await postAnswer(data);
    console.log(res);
  };
  return (
    <>
      <QuestDetailContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentContainer>
            <MainContentLayout>
              <QuestionHeadContainer>
                <HeadTitleBox>
                  <HeadTitle>
                    How to resolve './components/AppFooter' or its corresponding
                    type declarations. Error on Netlify and railway.app
                  </HeadTitle>
                  <HeadBtnBox>
                    <AskQuestionBtn fontWeight="550" fontSize="13px">
                      Ask Question
                    </AskQuestionBtn>
                  </HeadBtnBox>
                </HeadTitleBox>
                <SmallTextBox>
                  <div className="smallText">Asked today</div>
                  <div className="smallText">Modified today</div>
                  <div className="smallText">Viewed 9 times</div>
                </SmallTextBox>
              </QuestionHeadContainer>
              <Question>
                <QuestionVote></QuestionVote>
                <QuestionContent>
                  <Content></Content>
                  <TagsContain>Tags</TagsContain>
                  <EditContain>
                    <QuestionEditEtc />
                    <Userinfo>
                      <TimeContain>
                        <ElapsedTime />
                      </TimeContain>
                      <ProfileImg></ProfileImg>
                      <UsernameContain>User</UsernameContain>
                    </Userinfo>
                  </EditContain>
                  <AnswerList />
                  <AnswerEditorHeader>Your Answer</AnswerEditorHeader>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormProvider {...methods}>
                      <AskEditor
                        label="answer"
                        validation={{ required: "answer can not be empty" }}
                      />
                    </FormProvider>
                    <ButtonContainer>
                      <Button width="12rem" radius="3px">
                        Post Your Answer
                      </Button>
                    </ButtonContainer>
                  </form>
                </QuestionContent>
                <RightSideBarLayout />
              </Question>
            </MainContentLayout>
          </ContentContainer>
        </BodyContainer>
      </QuestDetailContainer>
      <Footer />

      {/* <FooterLayout>
      </FooterLayout> */}
    </>
  );
};

export default QuestionDetail;
