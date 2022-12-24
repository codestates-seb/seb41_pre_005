import React from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import styled from "styled-components";
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
const SignUpForm = (props) => {
  return (
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
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </ValidationMessage>
      <Button>Sign up</Button>
    </form>
  );
};

export default SignUpForm;
