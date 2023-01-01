import React, { useEffect } from "react";
import styled from "styled-components";
import SocialLogin from "../../components/login/SocialLogin";
import LoginForm from "../../components/login/LoginForm";
import LoginPageBottom from "../../components/login/LoginPageBottom";
import { useSelector } from "react-redux";

const LoginContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &::after {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    content: "";
    background-color: #f1f2f3;
  }
  /* background-color: #f1f2f3; */
`;
const FormContainer = styled.div`
  width: 27.8rem;
  padding: 2.4rem;
  padding-top: 1.4rem;
  border-radius: 1rem;
  background-color: white;
`;
const Login = (props) => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  useEffect(() => {
    if (userId) {
      window.location.replace("/");
    }
  }, []);
  return (
    <LoginContainer>
      <SocialLogin />
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <LoginPageBottom></LoginPageBottom>
    </LoginContainer>
  );
};

export default Login;
