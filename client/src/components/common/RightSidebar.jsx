import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import TagsLists from "../tags/TagsLists";

import { tagList } from "../tags/TagsLists";

const YellowContainer = styled.div`
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

  .watchText {
    font-size: 1.3rem;
    margin-top: 1.5rem;
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
  border-bottom: 1px solid #e3e5e6;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 1.3rem;
`;

//아이콘
const Pencil = () => {
  return (
    <svg
      aria-hidden="true"
      className="va-text-top svg-icon iconPencilSm"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
    </svg>
  );
};
const MainLogo = () => {
  return (
    <svg
      aria-hidden="true"
      className="native svg-icon iconLogoGlyphMd"
      width="14"
      height="14"
      viewBox="0 0 32 37"
    >
      <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#6a737c" />
      <path
        d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
        fill="#6a737c"
      />
    </svg>
  );
};
const MagnifyingGlass = () => {
  return (
    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48">
      <path
        opacity=".2"
        d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z"
      ></path>
      <path d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"></path>
    </svg>
  );
};
const Eye = () => {
  return (
    <svg
      aria-hidden="true"
      className="svg-icon iconEye native js-svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path d="M9.06 3C4 3 1 9 1 9s3 6 8.06 6C14 15 17 9 17 9s-3-6-7.94-6ZM9 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2Z"></path>
    </svg>
  );
};
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
const WatchTag = styled.div`
  width: 100%;
  height: 124px;
  color: #525960;
  background-color: #ffffff;
  border: 1px solid #e3e5e6;
  margin-top: 16px;
`;
const FeatContainer = styled.div`
  width: 268px;
  height: 45.8px;
  display: flex;
  margin-top: 22px;
  margin-left: 15px;
`;
const AddBtnContainer = styled.div`
  margin-bottom: 2rem;
`;

const Check = styled.div`
  background-color: #fff7bb;
`;
const RightSidebar = () => {
  const [tag, setTag] = useState(false);
  const handleClicktag = () => {
    setTag(!tag);
    console.log(tag);
  };
  const methods = useForm();

  const emphasisTag = (data) => {
    /*taglist 받아 온다
    data로 받아온 태그가 있으면 표시해준다
    없으면 null
  */
    const tagLists = { tagList };
    const sameTag = tagLists.tagName === data;
    {
    }
    return <Check>{sameTag}</Check>;
  };

  const onSubmit = (data) => {
    // emphasisTag(data);
    console.log(data);
  };
  return (
    <>
      <YellowContainer>
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
      </YellowContainer>
      <CustomContainer>
        <SidebarName>Custom Filters</SidebarName>
        <span className="customText">Create a custom filter</span>
      </CustomContainer>
      {tag ? (
        <WatchTag>
          <SidebarName>Watced Tags</SidebarName>
          <FormProvider {...methods}>
            <FeatContainer>
              <Input id="tag" fieldName="tagName" width={"222px"} />
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <AddBtnContainer>
                  <Button width={"47px"} height={"21px"}>
                    Add
                  </Button>
                </AddBtnContainer>
              </form>
            </FeatContainer>
          </FormProvider>
        </WatchTag>
      ) : (
        <WatchedContainer>
          <SidebarName>Watced Tags</SidebarName>
          <WatchContentsContainer>
            <MagnifyingGlass></MagnifyingGlass>
            <span className="watchText">
              Watch tags to curate your list of <br></br> questions.
            </span>
            <button
              className="watchButton"
              onClick={() => {
                handleClicktag();
              }}
            >
              <Eye></Eye>
              Watch a tag
            </button>
          </WatchContentsContainer>
        </WatchedContainer>
      )}

      <IgnoredContainer>
        <SidebarName>Ignored Tags</SidebarName>
        <button className="ignoreButton">Add an ignored tag</button>
      </IgnoredContainer>
    </>
  );
};

export default RightSidebar;
