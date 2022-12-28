import React, { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import styled from "styled-components";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import AlertWarning from "../login/AlertWarning";

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
  const initialValue = {
    userName: "",
    userEmail: "",
    userPassword: "",
  };
  const methods = useForm(initialValue);
  const error = methods?.formState?.errors;
  const onSubmit = async (data) => {
    console.log(data);
    await axios({
      url: "/users/signup",
      method: "post",
      data: {
        email: data.userEmail,
        password: data.userPassword,
        displayName: data.userName,
      },
    })
      // .then((response) => {
      //   console.log(response.data);
      // })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(watch("userName"));
  const nameValidation = {
    required: "입력해 주세요.",
  };
  const emailValidation = {
    required: "입력해 주세요.",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "이메일 형식에 맞지 않습니다.",
    },
  };
  const passwordValidation = {
    required: "입력해 주세요.",
    minLength: {
      value: 10,
      message: "10글자 이상이어야 합니다.",
    },
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputContainer>
          <Label htmlFor="displayName">Display name</Label>
          <Input
            id="displayName"
            fieldName="userName"
            validation={nameValidation}
            error={error?.userName}
          />
          {error?.userName && <AlertWarning text={error.userName?.message} />}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            fieldName="userEmail"
            validation={emailValidation}
            error={error?.userEmail}
          />
          {error?.userEmail && <AlertWarning text={error.userEmail?.message} />}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            fieldName="userPassword"
            validation={passwordValidation}
            error={error?.userPassword}
          />
          {error?.userPassword && (
            <AlertWarning text={error.userPassword?.message} />
          )}
        </InputContainer>

        <ValidationMessage>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </ValidationMessage>
        <Button>Sign up</Button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
