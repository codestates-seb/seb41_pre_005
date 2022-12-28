import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AlertIcon, { AlertText } from "../../components/login/AlertWarning";
import { FormProvider, useForm } from "react-hook-form";
import AlertWarning from "../../components/login/AlertWarning";
const InputContainer = styled.div`
  margin: 0.6rem 0;
`;
const Label = styled.label`
  display: block;
  margin: 4px 0;
  padding: 0 2px;
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
const ButtonContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 6px;
  width: 100%;
  height: 100%;
`;
const LoginForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
  } = useForm();
  const emailValidation = {
    required: "email is required",
  };
  const passwordValidation = {
    required: "password is required",
    minLength: {
      value: 8,
      message: "password should be at least 8 characters",
    },
  };
  const error = methods?.formState?.errors;
  console.log(error);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            width="23rem"
            fieldName="email"
            validation={emailValidation}
            error={error?.email}
          />
          {error?.email && <AlertWarning text={error.email?.message} />}
          {/* <AlertIcon /> */}
        </InputContainer>
        <InputContainer>
          <FlexContainer>
            <Label htmlFor="password">Password</Label>
            <FindPassword>Forgot password?</FindPassword>
          </FlexContainer>
          <Input
            id="password"
            width="23rem"
            fieldName="password"
            validation={passwordValidation}
            type="password"
            error={error?.password}
          />
          {error?.password && <AlertWarning text={error.password?.message} />}
        </InputContainer>
        <ButtonContainer>
          <Button width="23rem">Log in</Button>
        </ButtonContainer>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
