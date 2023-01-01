import React, { useState } from "react";
import styled from "styled-components";

const InputElement = styled.input`
  width: ${(props) => props.width || "26.8rem"};
  padding: 0.6rem 0.7rem;
  padding-left: 32px;
  height: 3.6rem;
  border: 1px solid
    ${(props) => (props.isValid ? "hsl(210, 8%, 75%)" : "hsl(358,68%,59%)")};
  border-radius: 3px;
  font-size: 1.3rem;

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
const TagsInput = ({ width, placeholder }) => {
  const [isValid, setIsValid] = useState(true);
  const handleOnFocus = () => {
    setIsValid(true);
  };
  return (
    <InputElement
      width={width}
      placeholder={placeholder}
      onFocus={handleOnFocus}
      isValid={isValid}
    />
  );
};

export default TagsInput;
