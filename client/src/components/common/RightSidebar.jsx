import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEye,
  faPencil,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const YellowContainer = styled.div`
  width: 30rem;
  height: 40.4rem;
  background-color: #fdf7e1;
  border: 1px solid #f1e5bc;
`;

const YellowHeader = styled.div`
  width: 95%;
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
  width: 25.5rem;
  height: 3.4rem;
  margin-top: 1.2rem;
  margin-left: 2.25rem;
  font-size: 1.3rem;
  color: #3b4045;
  display: flex;
  flex-direction: row;

  .icon {
    font-size: 1.1rem;
  }
`;

const Iconbox = styled.div`
  width: 2.216rem;
  height: 3.4rem;
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

const CustomContainer = styled.div`
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

const WatchedContainer = styled.div`
  width: 100%;
  height: 22.653rem;
  margin-top: 1.2rem;
  color: #525960;
  background-color: #ffffff;
  border: 1px solid #e3e5e6;
  display: flex;
  flex-direction: column;

  .watchButton {
    width: 11rem;
    height: 3.5rem;
    font-size: 1.2rem;
    color: #4379a2;
    font-weight: 500;
    background-color: #e1ecf4;
    border: 0.1rem solid #7aa7c7;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: hsl(205deg 56% 76%);
      cursor: pointer;
    }

    .icon {
      font-size: 1.5rem;
      color: #39739d;
      position: relative;
      top: 0.7rem;
      right: 0.5rem;
    }
  }
`;

const WatchContentsContainer = styled.div`
  width: 21.1rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  top: 2rem;
  left: 4rem;
  font-size: 1.3rem;

  .icon {
    font-size: 4.8rem;
    margin-bottom: 1.5rem;
    color: #379fef;
  }
`;

const IgnoredContainer = styled.div`
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
  border: 1px solid #e3e5e6;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 1.3rem;
`;

const RightSidebar = () => {
  return (
    <>
      <YellowContainer>
        <YellowHeader>The Overflow Blog</YellowHeader>
        <YellowContents>
          <Iconbox>
            <FontAwesomeIcon icon={faPencil} className="icon" />
          </Iconbox>
          Best practices to increase the speed for Next.js apps
        </YellowContents>
        <YellowContents>
          <Iconbox>
            <FontAwesomeIcon icon={faPencil} className="icon" />
          </Iconbox>
          I spent two years trying to do what Backstage does for free
        </YellowContents>
        <YellowHeader>Featured on Meta</YellowHeader>
        <YellowContents>
          <Iconbox>
            <FontAwesomeIcon icon={faMessage} className="icon" />
          </Iconbox>
          Navigation and UI research starting soon
        </YellowContents>
        <YellowContents>
          2022 Community Moderator Election Results - now with two more mods!
        </YellowContents>
        <SmallYellowContents>
          Temporary policy: ChatGPT is banned
        </SmallYellowContents>
        <SmallYellowContents>
          I'm standing down as a moderator
        </SmallYellowContents>
        <YellowContents>
          Proposing a Community-Specific <br></br>Closure Reason for non-English
          content
        </YellowContents>
      </YellowContainer>
      <CustomContainer>
        <SidebarName>Custom Filters</SidebarName>
        <span className="customText">Create a custom filter</span>
      </CustomContainer>
      <WatchedContainer>
        <SidebarName>Watced Tags</SidebarName>
        <WatchContentsContainer>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          Watch tags to curate your list of <br></br> questions.
          <button className="watchButton">
            <FontAwesomeIcon icon={faEye} className="icon" />
            Watch a tag
          </button>
        </WatchContentsContainer>
      </WatchedContainer>
      <IgnoredContainer>
        <SidebarName>Ignored Tags</SidebarName>
        <button className="ignoreButton">Add an ignored tag</button>
      </IgnoredContainer>
    </>
  );
};

export default RightSidebar;
