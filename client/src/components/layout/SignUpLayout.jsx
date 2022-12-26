import React from "react";
import styled from "styled-components";
const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    content: "";
    background-color: #f1f2f3;
  }
`;
const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92rem;
  width: 78.3rem;
  margin: auto;
`;
const SignUpLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Layout>{children}</Layout>;
    </LayoutContainer>
  );
};

export default SignUpLayout;
