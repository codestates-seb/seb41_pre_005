import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AlertIcon, { AlertText } from "../../components/login/AlertWarning";
const InputContainer = styled.div`
  margin: 1rem 0;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
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
const LoginForm = (props) => {
  return (
    <form>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input id="email" width="23rem" />
        <AlertIcon />
      </InputContainer>

      <InputContainer>
        <FlexContainer>
          <Label htmlFor="password">Password</Label>
          <FindPassword>Forgot password?</FindPassword>
        </FlexContainer>
        <Input id="password" width="23rem" />
      </InputContainer>
      <Button width="23rem">Log in</Button>
    </form>
  );
};

export default LoginForm;
