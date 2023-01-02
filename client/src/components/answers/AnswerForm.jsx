import { FormProvider, useForm } from "react-hook-form";
import React from "react";
import styled from "styled-components";
import AskEditor from "../../components/questions/ask/AskEditor";
import Button from "../../components/common/Button";
import { postAnswer } from "../../api/answerAPI";
import { useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import { useParams } from "react-router-dom";
const ButtonContainer = styled.div`
  padding: 10px 0;
`;
const AnswerForm = (props) => {
  const methods = useForm();
  const cookie = new Cookies();
  const Token = cookie.get("token");
  const id = useParams();
  const webStorageUserId = JSON.parse(localStorage.getItem("userId"));

  const onSubmit = async (data) => {
    const res = await postAnswer(data, Token, id, webStorageUserId);
    if (res.status === 201) {
      window.location.replace(`/questions/${id.id}`);
    }
  };
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <AskEditor
          label="answer"
          validation={{ required: "answer can not be empty" }}
        />
      </FormProvider>
      <ButtonContainer>
        <Button width="12rem" radius="3px">
          Post Your Answer
        </Button>
      </ButtonContainer>
    </form>
  );
};

export default AnswerForm;
