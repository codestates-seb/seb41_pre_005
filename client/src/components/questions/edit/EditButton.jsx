import styled from "styled-components";
import React from "react";
const Button = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  width: 8rem;
  height: 3.7rem;
  background-color: #0693ff;
  color: white;
  font-size: 1.2rem;
  border-radius: 3px;
`;

const EditButton = (props) => {
  return <Button>Edit</Button>;
};

export default EditButton;
