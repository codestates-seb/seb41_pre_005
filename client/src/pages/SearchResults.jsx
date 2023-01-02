import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import LeftSideLayout from "../components/layout/LeftSideLayout";
import MainContentLayout from "../components/layout/MainContentLayout";
import QuestionsLayout from "../components/layout/question/QuestionsLayout";
import SearchNav from "../components/searchResults/SearchNav";
import Footer from "../components/common/Footer";
import { SearchResultsHeadLine } from "../components/common/HeadLine";
import { useLocation } from "react-router-dom";
import { SearchQuestion } from "../api/questionAPI";

import SearchList from "../components/search/SearchList";

const SearchResults = (props) => {
  const QuestionsHeadLayout = styled.div`
    margin-bottom: 1.2rem;
  `;
  const location = useLocation();
  const searchTarget = location.state.search;
  const [questions, setQuestions] = useState();

  useEffect(() => {
    async function search() {
      const res = await SearchQuestion(searchTarget);
      setQuestions(res);
    }
    search();
  }, [searchTarget]);
  return (
    <>
      <QuestionsLayout>
        <LeftSideLayout></LeftSideLayout>
        <ContentLayout>
          <MainContentLayout>
            <QuestionsHeadLayout>
              <SearchResultsHeadLine />
            </QuestionsHeadLayout>
            <SearchNav questionCount={questions?.length} />
            <SearchList questions={questions} />
          </MainContentLayout>
        </ContentLayout>
      </QuestionsLayout>
      <Footer />
    </>
  );
};

export default SearchResults;
