import React from "react";
import styled from "styled-components";

const GoogleLogo = styled.img``;
const GitHub = styled.img``;
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
  width: 288.453px;
  height: 580.531px;
  display: block;
`;

const OauthDivWrapper = styled.div`
  width: 28.8rem;
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
const StackIcon = () => {
  return (
    <svg
      cursor="pointer"
      aria-hidden="true"
      width="32"
      height="37"
      viewBox="0 0 32 37"
      style={{
        marginLeft: "13rem",
        marginBottom: "2rem",
        marginTop: "13rem",
      }}
    >
      <path d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z" fill="#c2c3c4" />
      <path
        d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
        fill="#F77F2B"
      />
    </svg>
  );
};

const SocialLogin = () => {
  return (
    <Wrapper>
      <FlexItem>
        <StackIcon />
        <OauthDivWrapper>
          <OauthGoogle>
            <GoogleLogo
              src={process.env.PUBLIC_URL + "/images/socialLogin/google.svg"}
            ></GoogleLogo>
            <span style={{ marginLeft: "5px", fontSize: "1.3rem" }}>
              Log in with Google
            </span>
          </OauthGoogle>
        </OauthDivWrapper>
        <OauthDivWrapper>
          <OauthGitHub>
            <GitHub
              src={process.env.PUBLIC_URL + "/images/socialLogin/github.svg"}
            ></GitHub>
            <span style={{ marginLeft: "5px", fontSize: "1.3rem" }}>
              Log in with GitHub
            </span>
          </OauthGitHub>
        </OauthDivWrapper>
      </FlexItem>
    </Wrapper>
  );
};

export default SocialLogin;
