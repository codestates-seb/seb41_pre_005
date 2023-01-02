import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 11.253rem;
margin-top: 1rem;
color: #525960;
background-color: #ffffff;
border: 1px solid #e3e5e6;
display: flex;
flex-direction: column;
align-items: center;

.ignoreButton {
  width: 12.9rem;
  height: 3.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #4379a2;
  background-color: #e1ecf4;
  border: 1px solid #7aa7c7;
  position: relative;
  top: 1.5rem;

  &:hover {
    background-color: hsl(205deg 56% 76%);
    cursor: pointer;
  }
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

const IgnoredContainer = () => {
    return (
        <Container>
        <SidebarName>Ignored Tags</SidebarName>
        <button className="ignoreButton">Add an ignored tag</button>
      </Container>
    )
}

export default IgnoredContainer;