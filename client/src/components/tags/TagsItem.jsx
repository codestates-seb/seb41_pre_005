import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const TagContainer = styled.div`
  width: 25.375rem;
  height: 17.697rem;
  padding: 1.2rem;
  background-color: #ffffff;
  border: 0.1rem solid #d6d9dc;
  border-radius: 0.5rem;
  margin: 0 1.2rem 1.2rem 0;
  .margin {
    margin-bottom: 1.2rem;
  }
  .name {
    background-color: rgb(208, 227, 241);
    color: rgb(57, 115, 157);
    border-radius: 0.5rem;
    font-size: 1.2rem;
    padding: 0.48rem 0.6rem;
  }
`;
const Description = styled.div`
  width: 22.775rem;
  height: 6.8rem;
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
`;
const Questions = styled.div`
  width: 8.5rem;
  height: 3.138rem;
  color: #838c85;
  font-size: 1.2rem;
`;

const TagsItem = ({tags}) => {
  return (
      <TagContainer>
        <div className="margin">
          <a className="name">javascript</a>
        </div>
        <Description>
          For questions about programming in ECMAScript (JavaScript/JS) and its
          different dialects/implementations (except for ActionScript). Keep in
        </Description>
        <Questions>
            <span>0</span>
            <span>questions</span>
        </Questions>
      </TagContainer>
  );
};

export default TagsItem;
