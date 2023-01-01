import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { sortQuestions } from "../../api/questionAPI";
import { storeQuestions } from "../../redux/questionsReducer";

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
  margin-bottom: 0.1rem;
  line-height: 1.7rem;
`;
const SortedByNewest = styled.a`
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
const SortedByView = styled(SortedByNewest)`
  border-radius: 0;
  background-color: white;
`;
const SortedByVote = styled(SortedByNewest)`
  border-radius: 0 3px 3px 0;
  background-color: white;
`;
const QuestionNav = ({ questionCount }) => {
  const [selected, setSelected] = useState("newest");
  const dispatch = useDispatch();
  const location = useLocation();
  let query = location.search;
  async function handleClick(e) {
    if (query.trim() === "") {
      query = "?page=1";
    }
    setSelected(e.target.id);
    let type;
    switch (e.target.id) {
      case "newest":
        type = "createdAt";
        break;
      case "view":
        type = "viewCount";
        break;
      case "vote":
        type = "voteCount";
        break;

      default:
        type = "";
        break;
    }
    console.log(type);
    const res = await sortQuestions(query, type);
    dispatch(storeQuestions(res));
  }
  return (
    <DataController>
      <NavContainer>
        <QuestionCount>{questionCount || 328} questions</QuestionCount>
        <NavBar onClick={handleClick}>
          <SortedByNewest
            id="newest"
            className={selected === "newest" ? "focused" : null}
          >
            Newest
          </SortedByNewest>
          <SortedByView
            id="view"
            className={selected === "view" ? "focused" : null}
          >
            View
          </SortedByView>
          <SortedByVote
            id="vote"
            className={selected === "vote" ? "focused" : null}
          >
            Vote
          </SortedByVote>
        </NavBar>
      </NavContainer>
    </DataController>
  );
};

export default QuestionNav;
