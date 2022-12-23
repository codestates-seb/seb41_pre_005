import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AlertIcon, { AlertText } from "../../components/login/AlertWarning";
import LoginForm from "../../components/login/LoginForm";

const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 27.8rem;
  height: 23.4rem;
  padding: 2.4rem;
  padding-top: 1.4rem;
  border-radius: 1rem;
  background-color: white;
`;

const Login = (props) => {
  return (
    <LoginContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
