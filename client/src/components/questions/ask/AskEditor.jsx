import React, { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
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
const AskEditor = ({ label }) => {
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
  const [question, setQuestion] = useState();
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const questionBodyValidation = {
    required: "question is required",
    minLength: {
      value: 20,
      message: "at least 20 charcters",
    },
  };
  useEffect(() => {
    register(label || "content", questionBodyValidation);
  }, [register]);
  const onChangeHandler = (editorState) => {
    setValue(label || "content", editorState);
  };

  return (
    <EditorContainer>
      <CustomReactQuill
        theme="snow"
        value={question}
        modules={modules}
        formats={formats}
        onChange={onChangeHandler}
      />
      <ErrorMessage>{errors?.content?.message}</ErrorMessage>
    </EditorContainer>
  );
};

export default AskEditor;
