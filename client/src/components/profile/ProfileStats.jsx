import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Cookies } from "react-cookie";
import { getUser } from "../../api/userAPI";

const StatsLayout = styled.div`
  flex-basis: calc(25%-24px);
  flex-shrink: 0;
  max-width: 244px;
`;

const StatsContainer = styled.div``;
const StatsTitle = styled.div`
  margin-bottom: 0.8rem;
  font-size: 2.1rem;
`;
const StatsCard = styled.div`
  color: hsl(210, 8%, 45%);
  border-radius: 5px;
  border: 1px solid hsl(210, 8%, 85%);
  padding: 1.2rem;
`;
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
`;
const FlexItem = styled.div`
  width: 43%;
  margin: 8px;
`;
const Count = styled.div`
  color: black;
  font-size: 1.7rem;
`;

const ProfileStats = (props) => {
  const cookie = new Cookies();
  const Token = cookie.get("token");
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    async function getUserInfo() {
      const res = await getUser(Token, userId);
      setUserInfo(res);
    }
    getUserInfo();
  }, []);
  return (
    <StatsLayout>
      <StatsContainer>
        <StatsTitle>Stats</StatsTitle>
        <StatsCard>
          <FlexBox>
            <FlexItem>
              <Count>0</Count>
              reputation
            </FlexItem>
            <FlexItem>
              <Count>0</Count>
              reached
            </FlexItem>
            <FlexItem>
              <Count>{userInfo?.answerCount}</Count>
              answers
            </FlexItem>
            <FlexItem>
              <Count>{userInfo?.questionCount}</Count>
              questions
            </FlexItem>
          </FlexBox>
        </StatsCard>
      </StatsContainer>
    </StatsLayout>
  );
};

export default ProfileStats;
