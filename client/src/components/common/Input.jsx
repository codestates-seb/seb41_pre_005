import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useFormContext } from "react-hook-form";
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
const Input = ({
  width,
  fieldName,
  validation,
  id,
  placeholder,
  handleKeyup,
}) => {
  const [isValid, setIsValid] = useState(true);
  const { register, setValue } = useFormContext();

  const handleOnFocus = () => {
    setIsValid(true);
  };
  const onKeyUp = (e) => {
    handleKeyup(e);
  };
  return (
    <InputElement
      id={id}
      width={width}
      onFocus={handleOnFocus}
      placeholder={placeholder || null}
      isValid={isValid}
      {...(fieldName ? { ...register(fieldName, validation) } : null)}
      onKeyUp={handleKeyup ? handleKeyup : null}
    />
  );
};

export default Input;
