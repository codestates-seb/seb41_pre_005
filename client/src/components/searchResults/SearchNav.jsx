import React, { useState } from "react";
import styled from "styled-components";

const DataController = styled.div``;
const NavContainer = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
  align-items: center;
  justify-content: space-between;
`;
const QuestionCount = styled.div`
  font-size: 1.7rem;
  margin-right: 1.2rem;
  flex: 1 auto;
`;
const NavBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-right: 1.6rem;
  margin-bottom: 0.1rem;
  line-height: 1.7rem;
`;
const SortedByRelevance = styled.a`
  color: hsl(210, 8%, 25%);
  border-color: hsl(210, 8%, 55%);
  margin-bottom: -1px;
  margin-right: -1px;
  text-align: center;
  white-space: nowrap;
  font-size: 1.2rem;
  padding: 0.96rem;
  line-height: 13.8px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid gray;
  &.focused {
    background-color: hsl(210, 8%, 90%);
  }
`;
const SortedByNewest = styled(SortedByRelevance)`
  border-radius: 0;
  background-color: white;
`;
const SortedByMore = styled(SortedByRelevance)`
  border-radius: 0 3px 3px 0;
  background-color: white;
`;
const SearchNav = ({ questionCount }) => {
  const [selected, setSelected] = useState("newest");
  function handleClick(e) {
    setSelected(e.target.id);
  }
  return (
    <DataController>
      <NavContainer>
        <QuestionCount>{questionCount || 328} questions</QuestionCount>
        <NavBar onClick={handleClick}>
          <SortedByRelevance
            id="Relevance"
            className={selected === "relevance" ? "focused" : null}
          >
            Relevance
          </SortedByRelevance>
          <SortedByNewest
            id="Newest"
            className={selected === "newest" ? "focused" : null}
          >
            Newest
          </SortedByNewest>
          <SortedByMore
            id="More"
            className={selected === "more" ? "focused" : null}
          >
            More
          </SortedByMore>
        </NavBar>
      </NavContainer>
    </DataController>
  );
};

export default SearchNav;
