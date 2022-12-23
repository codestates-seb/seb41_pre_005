import React from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import HeaderLayout from "../components/layout/HeaderLayout";
import LeftSideLayout from "../components/layout/LeftSideLayout";
import MainContentLayout from "../components/layout/MainContentLayout";
import RightSideBarLayout from "../components/layout/RightSideBarLayout";
import {HomeHeadLine} from "../components/common/HeadLine";
import Footer from "../components/common/Footer";
import FooterLayout from "../components/layout/FooterLayout";
// const HomeHeadLine = () => {
//   return (
//     <AskQuestionHead>
//       <AskQuestionWord>Top Questions</AskQuestionWord>
//       <AskQuestionBtn>Ask question</AskQuestionBtn>
//     </AskQuestionHead>
//   );
// };

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f1f2f3;
`;
const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HeaderLayout></HeaderLayout>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentLayout>
            <MainContentLayout>
              <HomeHeadLine />
            </MainContentLayout>
            <RightSideBarLayout />
          </ContentLayout>
        </BodyContainer>
        <FooterLayout>
          <Footer />
        </FooterLayout>
      </HomeContainer>
    </>
  );
};

export default Home;
