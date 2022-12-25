import React from "react";
import styled from "styled-components";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import MainContentLayout from "../../components/layout/MainContentLayout";
import RightSideBarLayout from "../../components/layout/RightSideBarLayout";
import Footer from "../../components/common/Footer";
import QuestionEditEtc from "../../components/questions/QuestionEditEtc";
import QuestionVote from "../../components/questions/QuestionVote";

const QuestDetailContainer = styled.div`
  /* height: 100vh;
width: 100%; */
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
  width: 100%;
  margin-top: 78px;
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

const QuestionDetail = () => {
  return (
    <>
      <QuestDetailContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentContainer>
            <MainContentLayout>
              <QuestionHeadContainer>Header</QuestionHeadContainer>

              <Question>
                <QuestionVote></QuestionVote>
                <QuestionContent>
                  <Content>
                    HeloosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsdfsdafsdfsdfsfsdfasdfsdsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsdfsdafsdfsdfsfsdfasdfsdsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsdfsdafsdfsdfsfsdfasdfsdsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfosadfsdfsdafsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsdfsdafsdfsdfsfsdfasdfsdsdfs
                  </Content>
                  <TagsContain>Tags</TagsContain>
                  <EditContain>
                    <QuestionEditEtc />
                    <Userinfo>User</Userinfo>
                  </EditContain>
                </QuestionContent>
              </Question>
            </MainContentLayout>
            <RightSideBarLayout />
          </ContentContainer>
        </BodyContainer>
      </QuestDetailContainer>
      <Footer />

      {/* <QuestDetailContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentContainer>
            <div>
              안녕ㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇ라ㄴ아러ㅇㄴㄹㄴㄹㄴㅇㄹㄴㅇ란이라ㅓㄴ
            </div>
            <MainContentLayout>
              <QuestionVote></QuestionVote>
              <QuestionContent>
                <Content>
                  HeloosadfsdfsdafsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsHeloosadfsfsdfsdfsfsdfasdfsdsdfsHeloosadfsdfsdafsdfsdfsfsdfasdfsdsdfs
                </Content>
                <QuestionEditEtc />
              </QuestionContent>
            </MainContentLayout>
          </ContentContainer>
        </BodyContainer>
      </QuestDetailContainer>
      <Footer /> */}
    </>
  );
};

export default QuestionDetail;
