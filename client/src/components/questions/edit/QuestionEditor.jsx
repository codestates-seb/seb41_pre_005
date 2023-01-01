import React, { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import EditButton from "./EditButton";
import AskQuestionTags from "../ask/AskQuestionTags";
import AskQuestionTitle from "../ask/AskQuestionTitle";
import { editQuestion } from "../../../api/questionAPI";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const EditorContainer = styled.div`
  min-height: 260px;
`;
const CustomReactQuill = styled(ReactQuill)`
  width: 100%;
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 1.3rem;
`;
const ButtonContainer = styled.div`
  position: relative;
  margin-top: 1rem;
`;
const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "formula",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "color",
  "background",
];

const QuestionEditor = ({
  label,
  validation,
  questionContent,
  tagList,
  title,
  questionId,
}) => {
  const navigate = useNavigate();
  const modules = useMemo(
    () => ({
      toolbar: {
        // container에 등록되는 순서대로 tool 배치
        container: [
          [{ header: "1" }, "bold", "italic", "code-block"],
          ["underline", "strike", "link", "blockquote"], // 굵기, 기울기, 밑줄 등 부가 tool 설정
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ], // 리스트, 인덴트 설정
          ["image", "video"], // 링크, 이미지, 비디오 업로드 설정
          [{ align: [] }, { color: [] }, { background: [] }], // 정렬, 글씨 색깔, 글씨 배경색 설정
          ["clean"], // toolbar 설정 초기화 설정
        ],
      },
    }),
    []
  );

  // toolbar에 사용되는 tool format

  const methods = useForm();
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = methods;

  const questionBodyValidation = {
    required: "Edit is required",
    minLength: {
      value: 20,
      message: "at least 20 charcters",
    },
  };
  useEffect(() => {
    register(label || "content", validation || questionBodyValidation);
  }, [register]);
  const onChangeHandler = (editorState) => {
    setValue(label || "content", editorState);
  };
  const userId = JSON.parse(localStorage.getItem("userId"));
  const cookie = new Cookies();
  const token = cookie.get("token");
  const onSubmit = async (data) => {
    console.log(data);
    const formData = {
      content: data.content,
      tagList: data.tags,
      title: data.title,
    };
    const res = await editQuestion(formData, token, questionId, userId);
    if (res.status === 200) {
      navigate(`/questions/${questionId}`);
    }
  };
  return (
    <EditorContainer>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AskQuestionTitle title={title} />
          <CustomReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={onChangeHandler}
            defaultValue={questionContent}
          />
          <ErrorMessage>{errors?.content?.message}</ErrorMessage>
          <AskQuestionTags tagList={tagList} />
          <ButtonContainer>
            <EditButton />
          </ButtonContainer>
        </form>
      </FormProvider>
    </EditorContainer>
  );
};

export default QuestionEditor;
