import React from "react";
import styled from "styled-components";

const TagsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  line-height: 1.8rem;
  float: left;
`;
const TagsContainer = styled.ul`
  display: inline;
  margin-left: 2rem;
`;
const TagItem = styled.li`
  display: inline;
  margin-right: 4px;
`;
const TagLink = styled.a`
  font-size: 1.2rem;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border-color: transparent;

  display: inline-block;
  padding: 0.4rem 0.5rem;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  margin: 2px 2px 2px 0;
`;
const Tags = ({ tags }) => {
  return (
    <TagsLayout>
      <TagsContainer>
        {tags?.map((item, index) => (
          <TagItem key={item?.tagId}>
            <TagLink>{item?.tagName}</TagLink>
          </TagItem>
        ))}
      </TagsContainer>
    </TagsLayout>
  );
};

export default Tags;
