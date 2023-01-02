import React from "react";
import styled from "styled-components";

const OauthGoogle = styled.button`
  margin-right: 0px;
  margin-left: 0px;

  margin-top: -0.5rem;
  flex: 1 auto;
  background-color: white;
  color: black;
  &:hover {
    background-color: #f8f9f9;
  }

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  border: 1px solid transparent;
  outline: none;
  font-size: 13px;
  font-weight: normal;
  line-height: 15/13px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  border-color: #d6d9dc;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
`;

const FlexItem = styled.div`
  @media screen and (max-width: 640px) {
    width: 316px;
    height: 583.469px;
    font-size: 1.8rem;
  }
  width: 316px;
  height: 300.531px;
  display: block;
`;

const OauthDivWrapper = styled.div`
  width: 31.6rem;
  display: flex;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const OauthGitHub = styled.button`
  margin-right: 0px;
  margin-left: 0px;

  margin-top: -0.8rem;
  flex: 1 auto;
  background-color: #2f3337;
  color: #ffffff;
  &:hover {
    background-color: #242629;
  }

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  border: 1px solid transparent;
  outline: none;
  font-size: 13px;
  font-weight: normal;
  line-height: 15/13px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  border-color: #d6d9dc;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
`;
const Google = styled.img``;
const GitHub = styled.img``;
const SocialLoginNoLogo = () => {
  return (
    <Wrapper>
      <FlexItem>
        <OauthDivWrapper>
          <OauthGoogle>
            <Google src={process.env.PUBLIC_URL + "/images/socialLoginNoLogo/google.svg"} />
            <span style={{ marginLeft: "5px", fontSize: "1.3rem" }}>
              Log in with Google
            </span>
          </OauthGoogle>
        </OauthDivWrapper>

        <OauthDivWrapper>
          <OauthGitHub>
            <GitHub src={process.env.PUBLIC_URL + "/images/socialLoginNoLogo/github.svg"} />
            <span style={{ marginLeft: "5px", fontSize: "1.3rem" }}>
              Log in with GitHub
            </span>
          </OauthGitHub>
        </OauthDivWrapper>
      </FlexItem>
    </Wrapper>
  );
};

export default SocialLoginNoLogo;
