import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import MainContentLayout from "../../components/layout/MainContentLayout";
import RightSideBarLayout from "../../components/layout/RightSideBarLayout";
import Footer from "../../components/common/Footer";
import QuestionEditEtc from "../../components/questions/QuestionEditEtc";
import QuestionVote from "../../components/questions/QuestionVote";
import AnswerList from "../../components/answers/AnswerList";
import { ButtonBlue } from "../../components/common/Header";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { getQuestion } from "../../api/questionAPI";
import Parser from "html-react-parser";
import Tags from "../../components/questions/Tags";
import { getUser } from "../../api/userAPI";
import AnswerForm from "../../components/answers/AnswerForm";
import QuestionDetailTimeDiff from "../../components/questions/QuestionDetailTimeDiff";

const QuestDetailContainer = styled.div`
  /* height: 100vh; */
  /* width: 100%;  */
  height: auto;
  min-height: 100%;
  /* padding-bottom: 322px; */
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
  margin-top: 1rem;
  margin-left: 2.8rem;
  border-bottom: 1.5px solid #e4e6e8;
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
  /* border: 1px solid black; */
  word-break: break-all;
  .ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    border-radius: 3px;
    padding: 5px;
    margin: 0 10px;
  }
`;
const TagsContain = styled.div`
  /* border: 1px solid black; */
  width: 65rem;
  height: 3.6rem;
  margin-top: 3rem;
  margin-bottom: -5rem;
  display: flex;
  margin-left: -1.5rem;
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

const TimeContain = styled.div`
  width: 18.7rem;
  height: 2rem;
  margin-left: 7px;
  margin-bottom: 3px;
`;
const UsernameContain = styled.div`
  font-size: 1.3rem;
  color: #0074cc;
  margin-left: 5rem;
  margin-top: -3rem;
`;
const HeadTitleBox = styled.div`
  width: 105.1rem;
  /* height: 8.089rem; */
  display: flex;
  flex-direction: row;
`;
const HeadTitle = styled.div`
  width: 93.598rem;
  /* height: 7.289rem; */
  font-size: 2.7rem;
  margin-bottom: 0.8rem;
  word-break: break-all;
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
const UploadTime = styled.time`
  color: hsl(210, 8%, 45%);
  white-space: nowrap;
  font-size: 1.3rem;
`;
const Bold = styled.span`
  margin-right: 2rem;
  color: black;
`;

const AskQuestionBtn = styled(ButtonBlue)``;
const QuestionDetail = ({ createdAt }) => {
  const methods = useForm();
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    async function selectQuestion() {
      const res = await getQuestion(id);
      // getUser(id);
      console.log(res);
      setQuestion(res);
      // setUserInfo(res);
    }
    selectQuestion();
  }, [id]);
  console.log(question);
  return (
    <>
      <QuestDetailContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentContainer>
            <MainContentLayout>
              <QuestionHeadContainer>
                <HeadTitleBox>
                  <HeadTitle>{question?.title}</HeadTitle>
                  <HeadBtnBox>
                    <Link to="/questions/ask">
                      <AskQuestionBtn fontWeight="550" fontSize="13px">
                        Ask Question
                      </AskQuestionBtn>
                    </Link>
                  </HeadBtnBox>
                </HeadTitleBox>
                <SmallTextBox>
                  <UploadTime>
                    <span>Asked</span>
                    <Bold>
                      <QuestionDetailTimeDiff createdAt={question?.createdAt} />
                    </Bold>
                    <span>Modified</span>
                    <Bold>
                      <QuestionDetailTimeDiff
                        createdAt={question?.modifiedAt}
                      />
                    </Bold>
                  </UploadTime>
                  <div className="smallText">
                    Viewed {question?.viewCount} times
                  </div>
                </SmallTextBox>
              </QuestionHeadContainer>
              <Question>
                <QuestionVote
                  question={question}
                  questionId={id}
                ></QuestionVote>
                <QuestionContent>
                  <Content>{Parser(question?.content || "")}</Content>
                  <TagsContain>
                    <Tags tags={question?.tagList} />
                  </TagsContain>
                  <EditContain>
                    <QuestionEditEtc />
                    <Userinfo>
                      <TimeContain>
                        <QuestionDetailTimeDiff
                          createdAt={
                            question?.modifiedAt || question?.createdAt
                          }
                        />

                        {/* <ElapsedTime createdAt={Userinfo?.createdAt} /> */}
                      </TimeContain>
                      <ProfileImg></ProfileImg>
                      <UsernameContain>{question?.displayName}</UsernameContain>
                    </Userinfo>
                  </EditContain>
                  <AnswerList answers={question?.answerList} />
                  <AnswerEditorHeader>Your Answer</AnswerEditorHeader>
                  <AnswerForm />
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
