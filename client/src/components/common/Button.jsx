import React from "react";
import styled from "styled-components";
const ButtonElement = styled.button`
  width: ${(props) => props.width || "26.8rem"};
  height: 3.7rem;
  background-color: #0693ff;
  color: white;
  font-size: 1.2rem;
  margin: auto;
  border-radius: ${(props) => props.radius || null};
`;
const Button = ({ children, width, radius }) => {
  return (
    <ButtonElement width={width} radius={radius}>
      {children}
    </ButtonElement>
  );
};

export default Button;
