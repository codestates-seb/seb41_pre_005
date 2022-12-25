import React from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import LeftSideLayout from "../components/layout/LeftSideLayout";
import MainContentLayout from "../components/layout/MainContentLayout";
import { TagsHeadline } from "../components/common/HeadLine";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Tags = () => {
  const TagsContainer = styled.div`
    /* height: 100vh;
  width: 100%; */
    height: auto;
    min-height: 100%;
    padding-bottom: 322px;
    background-color: white;
  `;
  const BodyContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;
  const TagsFilter = styled.div`
    width: 100%;
    height: 4.88rem;
    padding-left: 2.4rem;
  `;
  const TagsContent = styled.div`
    width: 100%;
    padding-left: 2.4rem;
  `;
  const InputContainer = styled.div`
    width: 18.859rem;
    height: 3.68rem;
  `
  const TagsInput = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    font-size: 1.3rem;
  `;
  return (
    <>
      <Header />
      <TagsContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentLayout>
            <MainContentLayout>
              <TagsHeadline />
              <TagsFilter>
                <InputContainer><TagsInput placeholder="Filter by tag name"></TagsInput></InputContainer>
              </TagsFilter>
              <TagsContent></TagsContent>
            </MainContentLayout>
          </ContentLayout>
        </BodyContainer>
      </TagsContainer>
      <Footer />
    </>
  );
};
export default Tags;
