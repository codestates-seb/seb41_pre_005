import React from "react";
import styled from "styled-components";
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const ContentLayout = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default ContentLayout;
