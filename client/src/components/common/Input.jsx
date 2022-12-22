import React, { useState } from "react";
import styled from "styled-components";
import AlertIcon from "../login/AlertWarning";
const InputElement = styled.input`
  width: ${(props) => props.width || "26.8rem"};
  height: 3.3rem;
  border: 1px solid
    ${(props) => (props.isValid ? "hsl(210, 8%, 75%)" : "hsl(358,68%,59%)")};
  border-radius: 3px;
  font-size: 1.6rem;
  &:focus {
    border: 1px solid
      ${(props) => (props.isValid ? "#38a9f0" : "hsl(358,68%,59%)")};
    box-shadow: 0px 0px 0px 4px
      ${(props) =>
        props.isValid
          ? "hsla(206, 100%, 40%, 0.15)"
          : "hsla(358,62%,47%,0.15)"};
    outline: 0;
  }
`;
const Input = ({ width }) => {
  const [isValid, setIsValid] = useState(true);
  const handleOnFocus = () => {
    setIsValid(true);
  };
  return (
    <InputElement width={width} onFocus={handleOnFocus} isValid={isValid} />
  );
};

export default Input;
