import React, { useState } from "react";
import SignUpLayout from "../../components/layout/SignUpLayout";
import styled from "styled-components";

import SingUpAside from "../../components/signup/SignUpAside";
import SignUpBottom from "../../components/signup/SignUpBottom";
import SignUpForm from "../../components/signup/SignUpForm";

const FormContainer = styled.div`
  width: 31.6rem;
  height: 42rem;
  padding: 2.4rem;
  border-radius: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUpBody = styled.div`
  width: 40rem;
  height: 32rem;
  margin-right: 2rem;
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
      <SignUpBody>
        <SingUpAside></SingUpAside>
      </SignUpBody>
      <FormContainer>
        <SignUpForm />
        <InformPolicy>
          By clicking “Sign up”, you agree to our terms of service, privacy
          policy and cookie policy
        </InformPolicy>
        <SignUpBottom></SignUpBottom>
      </FormContainer>
    </SignUpLayout>
  );
};

export default SignUp;