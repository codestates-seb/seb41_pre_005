import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UserInfoContainer = styled.div`
  flex-wrap: wrap;
  margin-left: auto;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 4px;
`;
const UserInfo = styled.div`
  font-size: 1.2rem;
  white-space: nowrap;
  align-items: center;
  flex-wrap: wrap;
  min-width: 0;
  overflow-wrap: break-word;
`;
const Username = styled.a`
  margin: 2px;
`;
const Author = ({ answer }) => {
  return <Username>{answer.displayName || "none"}</Username>;
};

export default Author;
