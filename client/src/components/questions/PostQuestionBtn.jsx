import React from "react";
import styled from "styled-components";
import { ButtonBlue } from "../common/Headers/HeaderBtn";

const BtnContainer = styled.div``;
const PostBtn = styled(ButtonBlue)``;
const DiscardBtn = styled.button`
  font-size: 1.3rem;
  margin-left: 1.3rem;
  width: 101px;
  height: 37.8px;
  color: #9d3230;
  &:hover {
    background-color: #fbf2f2;
  }
`;

const PostQuestionBtn = () => {
  return (
    <BtnContainer>
      <PostBtn width="136px" fontSize="13px">
        Post your question
      </PostBtn>
      <DiscardBtn>Discard draft</DiscardBtn>
    </BtnContainer>
  );
};

export default PostQuestionBtn;
