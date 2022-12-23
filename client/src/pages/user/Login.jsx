import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AlertIcon, {AlertText} from "../../components/login/AlertWarning";
import SocialLogin from "../../components/login/SocialLogin";
import LoginForm from "../../components/login/LoginForm";
import LoginPageBottom from '../../components/login/LoginPageBottom';

const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
const Login = props => {
  return (
    <>
      <LoginContainer>
        <FormContainer>
          <SocialLogin />
          <form>
            <FlexContainer>
              <FindPassword>Forgot password?</FindPassword>
            </FlexContainer>
            <Input id="password" width="23rem" />
            <Button width="23rem">Log in</Button>
          </form>
        </FormContainer>
        <LoginPageBottom></LoginPageBottom>
      </LoginContainer>
    </>
  );
};

export default Login;
