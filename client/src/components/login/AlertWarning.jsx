import alertIcon from "../../images/alert.svg";
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
const AlertIcon = (props) => {
  return (
    <AlertContainer>
      <Alert src={alertIcon} />
      <AlertText>username do not exist</AlertText>
    </AlertContainer>
  );
};

export default AlertIcon;