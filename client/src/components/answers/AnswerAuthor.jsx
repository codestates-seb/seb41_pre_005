import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Username = styled.a`
  margin: 2px;
`;
const AnswerAuthor = ({ displayName }) => {
  return <Username>{displayName || "none"}</Username>;
};

export default AnswerAuthor;
