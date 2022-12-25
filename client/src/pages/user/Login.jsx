import React from "react";
import styled from "styled-components";

import SocialLogin from "../../components/login/SocialLogin";
import LoginForm from "../../components/login/LoginForm";
import LoginPageBottom from "../../components/login/LoginPageBottom";

const LoginContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #f1f2f3; */
  &::after {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    content: "";
    background-color: #f1f2f3;
  }
`;
const FormContainer = styled.div`
  margin-top: 10rem;
  width: 27.8rem;
  height: 23.4rem;
  padding: 2.4rem;
  padding-top: 1.4rem;
  border-radius: 1rem;
  background-color: white;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FindPassword = styled.span`
  color: #0693ff;
  line-height: 2rem;
  font-size: 1rem;
`;
const Login = (props) => {
  return (
    <>
      <LoginContainer>
        <FormContainer>
          <SocialLogin />
          <LoginForm />
        </FormContainer>
        <LoginPageBottom></LoginPageBottom>
      </LoginContainer>
    </>
  );
};

export default Login;
