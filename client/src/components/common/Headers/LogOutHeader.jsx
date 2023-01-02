import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonBlue, ButtonSblue } from "./HeaderBtn";
import SearchInput from "../../search/SearchInput";

export const HeadBtnContainer = styled.div`
  /* background-color: var(--_na-item-bg);
  color: var(--_na-item-fc); */
  font: unset;
  font-size: 1.3rem;
  /* padding: var(--_na-item-p);
  white-space: var(--_na-item-ws); */
  align-items: center;
  border: none;
  border-radius: 1000px;
  box-shadow: none;
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: auto;

  @media screen and (max-width: 820px) {
    display: none;
  }

  .about_btn {
    width: 70px;
    height: 29px;
    background-color: #f8f9f9;
    color: #525960;
    font-size: 13px;
    font-weight: 400;
    border: none;
    border-radius: 20px;
    margin-left: 10px;
    &:hover {
      background-color: #e3e5e8;
      color: black;
      cursor: pointer;
    }
  }
  .forTeams_btn {
    width: 7.5rem;
    height: 2.9rem;
    background-color: #f8f9f9;
    color: #525960;
    font-size: 1.3rem;
    font-weight: 40rem;
    margin-left: 0.5rem;
    border: none;
    border-radius: 20px;
    &:hover {
      background-color: #e3e5e8;
      color: black;
      cursor: pointer;
    }
  }
`;
const LoginContainer = styled.div`
  @media screen and (max-width: 590px) {
    display: none;
  }
`;
const LoginBtn = styled(ButtonSblue)``;
const SignupBtn = styled(ButtonBlue)``;
const LogOutHeader = () => {
  return (
    <>
      <HeadBtnContainer>
        <button className="about_btn">About</button>
      </HeadBtnContainer>
      <HeadBtnContainer>
        <button className="forTeams_btn">Products</button>
      </HeadBtnContainer>
      <HeadBtnContainer>
        <button className="forTeams_btn">For Teams</button>
      </HeadBtnContainer>
      <SearchInput />
      <LoginContainer className="LogSinb">
        <Link to="/login">
          <LoginBtn
            width="59.45px"
            height="32px"
            fontSize="13px"
            fontWeight="400"
          >
            Log in
          </LoginBtn>
        </Link>
        <Link to="/signup">
          <SignupBtn
            to="signup"
            width="64.44px"
            height="33px"
            fontSize="13px"
            fontWeight="400"
          >
            Sign up
          </SignupBtn>
        </Link>
      </LoginContainer>
    </>
  );
};

export default LogOutHeader;
