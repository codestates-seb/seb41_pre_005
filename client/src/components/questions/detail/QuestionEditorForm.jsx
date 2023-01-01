import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import QuestionEditor from "./QuestionEditor";
const QuestionEditorForm = (props) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <QuestionEditor />
    </FormProvider>
  );
};

export default QuestionEditorForm;
