import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 41.8rem;
  height: 2.7rem;
  font-size: 2.5rem;
  color: #232629;
  font-weight: 500;
  margin-bottom: 3.2rem;
`;

const List = styled.div`
  width: 40rem;
  height: 2.4rem;
  font-size: 1.5rem;
  color: #232629;
  font-weight: 500;
  margin-bottom: 2.4rem;
  display: flex;
  flex-direction: row;
`;
const IconBox = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  margin-right: 1rem;
  position: relative;
  bottom: 0.3rem;
`;
const Bottom = styled.div`
  width: 40rem;
  height: 3.4rem;
  font-size: 13px;
  color: #6a737c;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .blue {
    font-size: 13px;
    color: #0074cc;
  }
`;
const QuestionSvg = styled.img``;
const VoteSvg = styled.img``;
const SaveSvg = styled.img``;
const TrophySvg = styled.img``;

const SingUpAside = () => {
  return (
    <>
      <HeaderContainer>Join the Stack Overflow community</HeaderContainer>
      <List>
        <IconBox>
         <QuestionSvg src={process.env.PUBLIC_URL + "/images/signUpAside/question.svg"}></QuestionSvg>
        </IconBox>
        Get unstuck — ask a question
      </List>
      <List>
        <IconBox>
          <VoteSvg src={process.env.PUBLIC_URL + "/images/signUpAside/vote.svg"}></VoteSvg>
        </IconBox>
        Unlock new privileges like voting and commenting
      </List>
      <List>
        <IconBox>
          <SaveSvg src={process.env.PUBLIC_URL + "/images/signUpAside/save.svg"}></SaveSvg>
        </IconBox>
        Save your favorite tags, filters, and jobs
      </List>
      <List>
        <IconBox>
          <TrophySvg src={process.env.PUBLIC_URL + "/images/signUpAside/trophy.svg"}></TrophySvg>
        </IconBox>
        Earn reputation and badges
      </List>
      <Bottom>
        Collaborate and share knowledge with a private group for FREE. <br></br>
        <span className="blue">
          Get Stack Overflow for Teams free for up to 50 users.
        </span>
      </Bottom>
    </>
  );
};

export default SingUpAside;
