import React from "react";
import styled from "styled-components";
import {
  Pencil,
  MainLogo
} from "../../../images/RightSidebarSvg";

const Container = styled.div`
  width: 30rem;
  height: 40.4rem;
  background-color: #fdf7e1;
  border: 1px solid #f1e5bc;
`;

const YellowHeader = styled.div`
  width: 100%;
  height: 4.169rem;
  background-color: #fbf3d5;
  border: 1px solid #f1e5bc;
  font-size: 1.2rem;
  font-weight: 700;
  color: #525960;
  display: flex;
  align-items: center;
  padding-left: 1.3rem;
`;

const YellowContents = styled.div`
  width: 26.5rem;
  height: 3.5rem;
  margin: 1.2rem 0 1.2rem 2.25rem;
  font-size: 1.3rem;
  color: #3b4045;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Iconbox = styled.div`
  width: 2.216rem;
  height: 3.4rem;
  padding-right: 2rem;
`;

const SmallYellowContents = styled.div`
  width: 25.5rem;
  height: 1.95rem;
  margin-top: 1.2rem;
  margin-left: 2.25rem;
  font-size: 1.3rem;
  color: #3b4045;
  display: flex;
  flex-direction: row;
`;
const S_FaviconStack = styled.div`
  display: inline-block;
  background-position: 0 -6120px;
  &.flow {
    background-position: 0 -6156px;
  }
  width: 1.6rem;
  height: 1.6rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-image: url("https://cdn.sstatic.net/Img/favicons-sprite16.png?v=22475cccbf39");
`;
const YellowContainer = () => {
  return (
    <Container>
      <YellowHeader>The Overflow Blog</YellowHeader>
      <YellowContents>
        <Iconbox>
          <Pencil></Pencil>
        </Iconbox>
        Best practices to increase the speed for Next.js apps
      </YellowContents>
      <YellowContents>
        <Iconbox>
          <Pencil></Pencil>
        </Iconbox>
        I spent two years trying to do what Backstage does for free
      </YellowContents>
      <YellowHeader>Featured on Meta</YellowHeader>
      <YellowContents>
        <Iconbox>
          <S_FaviconStack></S_FaviconStack>
        </Iconbox>
        Navigation and UI research starting soon
      </YellowContents>
      <YellowContents>
        <Iconbox>
          <MainLogo></MainLogo>
        </Iconbox>
        2022 Community Moderator Election Results - now with two more mods!
      </YellowContents>
      <SmallYellowContents>
        <Iconbox>
          <MainLogo></MainLogo>
        </Iconbox>
        Temporary policy: ChatGPT is banned
      </SmallYellowContents>
      <SmallYellowContents>
        <Iconbox>
          <MainLogo></MainLogo>
        </Iconbox>
        I'm standing down as a moderator
      </SmallYellowContents>
      <YellowContents>
        <Iconbox>
          <MainLogo></MainLogo>
        </Iconbox>
        Proposing a Community-Specific <br></br>Closure Reason for non-English
        content
      </YellowContents>
    </Container>
  );
};

export default YellowContainer;
