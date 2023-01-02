import React, { useState } from "react";
import styled from "styled-components";
import { questionDownVote, questionUpVote } from "../../api/questionAPI";
import { Cookies } from "react-cookie";

const QuestionVoteContainer = styled.div`
  width: 60px;
  height: 200px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  fill: #bbbfc3;
`;

const VoteBtn = styled.button`
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;

  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:active {
    fill: #f48225;
  }
`;
const UpVoteBtn = styled(VoteBtn)``;
const DownVoteBtn = styled(VoteBtn)``;

const VoteStat = styled.div`
  width: 36px;
  font-size: 21px;
  color: #6a7376;
  text-align: center;
`;

const SideIcon = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const SaveIcon = styled(SideIcon)`
  margin: 4px 0;
`;
const ActivityIcon = styled(SideIcon)`
  margin: 8px 0;
`;
const UpBtn = styled.img``;
const DownBtn = styled.img``;
const SaveBtn = styled.img``;
const ActivityBtn = styled.img``;

const QuestionVote = ({ question }) => {
  const cookie = new Cookies();
  const Token = cookie.get("token");
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [voteCount, setVoteCount] = useState();
  const [isUpVote, setIsUpVote] = useState(false);
  const [isDownVote, setIsDownVote] = useState(false);
  const handleUpVote = () => {
    if (isUpVote) return;
    questionUpVote(question?.questionId, userId, Token);
    let updateVote = isDownVote ? question.voteCount : question.voteCount + 1;
    setVoteCount(updateVote);
    setIsUpVote(true);
  };
  const handleDownVote = () => {
    if (isDownVote) return;
    questionDownVote(question?.questionId, userId, Token);
    let updateVote = isUpVote ? question.voteCount : question.voteCount - 1;
    setVoteCount(updateVote);
    setIsDownVote(true);
  };

  console.log(question?.voteCount, voteCount);
  return (
    <>
      <QuestionVoteContainer>
        <UpVoteBtn onClick={handleUpVote}>
          <UpBtn
            src={process.env.PUBLIC_URL + "/images/questionVote/upVoteBtn.svg"}
          ></UpBtn>
        </UpVoteBtn>
        <VoteStat>
          {voteCount === 0 ? 0 : voteCount || question?.voteCount}
        </VoteStat>
        <DownVoteBtn onClick={handleDownVote}>
          <DownBtn
            src={process.env.PUBLIC_URL + "/images/questionVote/downVoteBtn.svg"}
          ></DownBtn>
        </DownVoteBtn>
        <SaveIcon>
        <SaveBtn
            src={process.env.PUBLIC_URL + "/images/questionVote/save.svg"}
          ></SaveBtn>
        </SaveIcon>
        <ActivityIcon>
          <ActivityBtn src={process.env.PUBLIC_URL + "/images/questionVote/activity.svg"}></ActivityBtn>
        </ActivityIcon>
      </QuestionVoteContainer>
    </>
  );
};

export default QuestionVote;
