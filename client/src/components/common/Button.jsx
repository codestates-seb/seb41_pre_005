import React from "react";
import styled from "styled-components";
const ButtonElement = styled.button`
  width: 26.8rem;
  height: 3.7rem;
  background-color: #0693ff;
  color: white;
  font-size: 1.2rem;
  margin: auto;
`;
const Button = ({ children }) => {
  return <ButtonElement>{children}</ButtonElement>;
};

export default Button;
