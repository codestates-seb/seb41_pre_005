import React from "react";
import styled from "styled-components";
const Alert = styled.img`
  width: 18px;
  height: 18px;
  /* vertical-align: baseline; */
  display: block;
  position: absolute;
  bottom: 150%;
  right: 0.7rem;
`;
export const AlertText = styled.p`
  margin: 2px 0px;
  padding: 2px;
  font-size: 1rem;
  color: red;
  display: block;
`;

const AlertContainer = styled.div`
  position: relative;
`;
const AlertWarning = ({ text }) => {
  return (
    <AlertContainer>
      <Alert src={process.env.PUBLIC_URL + "/images/alert.svg"} />
      <AlertText>{text}</AlertText>
    </AlertContainer>
  );
};

export default AlertWarning;
