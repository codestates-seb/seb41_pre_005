import React, { useState } from "react";

import styled from "styled-components";
import AnswerEdit from "./edit/AnswerEdit";
import Parser from "html-react-parser";
import AnswerVote from "./AnswerVote";
import AnswerForm from "./AnswerForm";
import AnswerEditForm from "./edit/AnswerEditForm";
const FlexBox = styled.div`
  display: flex;
  max-width: 675px;
`;
const ContentBody = styled.div`
  width: 100%;
`;
const AnswerItem = ({ answer }) => {
  const [isEditOn, setIsEditOn] = useState(false);
  console.log(answer);
  return (
    <FlexBox>
      <AnswerVote answer={answer} />
      <ContentBody>
        {isEditOn ? (
          <AnswerEditForm
            answerContent={answer?.content}
            answerId={answer?.answerId}
          />
        ) : (
          <div>{Parser(answer?.content)}</div>
        )}

        <AnswerEdit answer={answer} setIsEditOn={setIsEditOn} />
      </ContentBody>
    </FlexBox>
  );
};

export default AnswerItem;
