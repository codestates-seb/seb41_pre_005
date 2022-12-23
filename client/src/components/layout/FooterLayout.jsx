import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  margin-top: 13rem;
  height: 19.7rem;
  position: relative;
`;

const FooterLayout = ({children}) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export default FooterLayout;
