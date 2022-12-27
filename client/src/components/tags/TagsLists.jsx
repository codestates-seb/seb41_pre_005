import React from "react";
import styled from "styled-components";
import TagsItem from "./TagsItem";

const TagsListsContainer = styled.div`
  width: 106.3rem;
  height: 100%;
  margin-left: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TagsLists = () => {
  return (
    <TagsListsContainer>
      <TagsItem></TagsItem>
      <TagsItem></TagsItem>
      <TagsItem></TagsItem>
      <TagsItem></TagsItem>
      <TagsItem></TagsItem>
    </TagsListsContainer>
  );
};

export default TagsLists;
