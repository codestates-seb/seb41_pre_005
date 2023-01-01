import React from "react";
import styled from "styled-components";
const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::after {
    z-index: -1;
    position: absolute;
    bottom: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    content: "";
    background-color: #f1f2f3;
    @media screen and (max-height: 920px) {
      height: 100%;
    }
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
