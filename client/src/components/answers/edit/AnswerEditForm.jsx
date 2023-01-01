import { FormProvider, useForm } from "react-hook-form";
import React from "react";
import styled from "styled-components";
import AskEditor from "../../../components/questions/ask/AskEditor";
import Button from "../../../components/common/Button";
import { editAnswer } from "../../../api/answerAPI";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ButtonContainer = styled.div`
  padding: 10px 0;
`;
const AnswerEditForm = ({ answerContent, answerId }) => {
  const methods = useForm();
  const { questionId, userId, Token } = useSelector(
    (state) => state.currentUser
  );
  const onSubmit = async (data) => {
    const res = await editAnswer(data, Token, questionId, userId, answerId);
    console.log(res);
    if (res.status === 200) {
      window.location.replace(`/questions/${questionId}`);
    } else {
      alert("fail to edit");
    }
  };
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <AskEditor
          label="answer"
          validation={{ required: "answer can not be empty" }}
          defaultValue={answerContent}
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

export default AnswerEditForm;
