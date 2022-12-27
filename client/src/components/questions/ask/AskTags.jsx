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
  display: flex;
`;
const TagItem = styled.li`
  margin: 2px;
  background-color: rgb(225, 236, 244);
  font-size: 12px;
  border: 1px solid transparent;
  padding-left: 0 4px;
  color: rgb(57, 115, 157);
  display: inline-flex;
  justify-content: center;
  min-width: 0;
  white-space: nowrap;
  line-height: 1.8;
  border-radius: 3px;
`;
const TagLink = styled.a`
  font-size: 1.2rem;
  color: hsl(205, 47%, 42%);

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
const AskTags = ({ tags }) => {
  return (
    <TagsLayout>
      <TagsContainer>
        {tags?.map((item, index) => (
          <TagItem key={index}>
            {item}
            <button type="button">
              <img src={`${process.env.PUBLIC_URL}` + "/images/Clear.svg"} />
            </button>
          </TagItem>
        ))}
      </TagsContainer>
    </TagsLayout>
  );
};

export default AskTags;