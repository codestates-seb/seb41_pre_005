import React from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import LeftSideLayout from "../components/layout/LeftSideLayout";
import MainContentLayout from "../components/layout/MainContentLayout";
import { TagsHeadline } from "../components/common/HeadLine";
import Footer from "../components/common/Footer";
import TagsLists from "../components/tags/TagsLists";
import TagsInput from "../components/tags/TagsInput";

const TagsContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 2.7rem;
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
  position: relative;
`;
const SearchIcon = styled.img`
  position: absolute;
  left: 0.7rem;
  color: hsl(210, 8%, 55%);
  vertical-align: bottom;
  top: 50%;
  margin-top: -9px;
  width: 18px;
  height: 18px;
`;
const Tags = () => {
  return (
    <>
      <TagsContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentLayout>
            <MainContentLayout>
              <TagsHeadline />
              <TagsFilter>
                <InputContainer>
                  <TagsInput
                    width="190px"
                    placeholder="Filter by tag name"
                  ></TagsInput>
                  <SearchIcon
                    src={process.env.PUBLIC_URL + "/images/Search.svg"}
                    alt="search"
                  />
                </InputContainer>
              </TagsFilter>
              <TagsLists></TagsLists>
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
