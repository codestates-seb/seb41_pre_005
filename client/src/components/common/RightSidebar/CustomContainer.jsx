import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 9.55rem;
  margin-top: 1.2rem;
  color: #525960;
  background-color: #ffffff;
  border: 1px solid #e3e5e6;

  .customText {
    font-size: 1.3rem;
    color: #468fd5;
    font-weight: 600;
    position: relative;
    top: 1.5rem;
    padding-left: 1.3rem;
  }
`;
const SidebarName = styled.div`
  width: 100%;
  height: 4.45rem;
  background-color: #f8f9f9;
  border-bottom: 1px solid #e3e5e6;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 1.3rem;
`;

const CustomContainer = () => {
    return (
        <Container>
        <SidebarName>Custom Filters</SidebarName>
        <span className="customText">Create a custom filter</span>
      </Container>
    )
}

export default CustomContainer;