import React from "react";
import styled from "styled-components";

export const HeaderContinaer = styled.div`
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  min-width: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
  width: 100%;
  z-index: 5050;
  background-color: #f8f9f9;
  height: 5rem;
  display: flex;
  border-top: 3px solid #f48225;
  align-items: center;
`;

export const HeaderTopbarContainer = styled.div`
  width: 160rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;
export const RightContainer = styled.div`
  height: 4.7rem;

  display: flex;
`;
