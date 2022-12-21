import React, { useState } from "react";
import styled from "styled-components";
const InputElement = styled.input`
  width: 26.8rem;
  height: 3.3rem;
  border: 1px solid
    ${(props) => (props.isFocused ? "hsl(210, 8%, 75%)" : "hsl(358,68%,59%)")};
  border-radius: 3px;

  font-size: 1.6rem;
  &:focus {
    border: 1px solid
      ${(props) => (props.isFocused ? "#38a9f0" : "hsl(358,68%,59%)")};
    box-shadow: 0px 0px 0px 4px
      ${(props) =>
        props.isFocused
          ? "hsla(206, 100%, 40%, 0.15)"
          : "hsla(358,62%,47%,0.15)"};
    outline: 0;
  }
`;
const Input = ({}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleOnFocus = () => {
    setIsFocused(true);
  };
  return <InputElement onFocus={handleOnFocus} isFocused={isFocused} />;
};

export default Input;
