import React, { useState } from "react";
import SignUpLayout from "../../components/layout/SignUpLayout";
import styled from "styled-components";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
const FormContainer = styled.div`
  width: 31.6rem;
  height: 42rem;
  padding: 2.4rem;
  border-radius: 1rem;
  background-color: white;
`;
const SignUpBody = styled.div`
  width: 40rem;
  height: 32rem;
`;
const InputContainer = styled.div`
  margin: 1rem 0;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
`;
const ValidationMessage = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 2rem;
`;
const InformPolicy = styled.div`
  margin-top: 3.2rem;
`;
const SignUp = (props) => {
  return (
    <SignUpLayout>
      <SignUpBody></SignUpBody>
      <FormContainer>
        <form>
          <InputContainer>
            <Label htmlFor="displayName">Display name</Label>
            <Input id="displayName" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input id="email" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <Input id="password" />
          </InputContainer>
          <ValidationMessage>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </ValidationMessage>
          <Button>Sign up</Button>
        </form>
        <InformPolicy>
          By clicking “Sign up”, you agree to our terms of service, privacy
          policy and cookie policy
        </InformPolicy>
      </FormContainer>
    </SignUpLayout>
  );
};

export default SignUp;
