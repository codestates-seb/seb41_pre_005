import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../Button";
import { tagList } from "../../tags/TagsLists";
import { useDispatch, useSelector } from "react-redux";
import { storeQuestions } from "../../../redux/questionsReducer";

const MagnifyingGlass = styled.img``;
const Eye = styled.img``;
const Container = styled.div`
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
const Form = styled.form`
  display: flex;
`;

const WatchedContainer = () => {
  const [tag, setTag] = useState(false);
  const handleClicktag = () => {
    setTag(!tag);
  };
  const methods = useForm();
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const tagedQuestions = questions.data.map((item) => {
      const tagNameList = item.tagList?.map((tag) => tag.tagName);
      if (tagNameList?.indexOf(data.tagName) >= 0) {
        return { ...item, isWatched: true };
      } else {
        return item;
      }
    });

    const newQuestions = {
      pageInfo: { ...questions.pageInfo },
      data: tagedQuestions,
    };
    console.log(newQuestions);
    dispatch(storeQuestions(newQuestions));
  };
  return (
    <>
      {tag ? (
        <WatchTag>
          <SidebarName>Watched Tags</SidebarName>
          <FormProvider {...methods}>
            <FeatContainer>
              <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input id="tag" fieldName="tagName" width={"222px"} />
                <AddBtnContainer>
                  <Button width={"47px"} height={"21px"}>
                    Add
                  </Button>
                </AddBtnContainer>
              </Form>
            </FeatContainer>
          </FormProvider>
        </WatchTag>
      ) : (
        <Container>
          <SidebarName>Watced Tags</SidebarName>
          <WatchContentsContainer>
            <MagnifyingGlass
              src={
                process.env.PUBLIC_URL + "/images/sidebar/magnifyingGlass.svg"
              }
            ></MagnifyingGlass>
            <span className="watchText">
              Watch tags to curate your list of <br></br> questions.
            </span>
            <button
              className="watchButton"
              onClick={() => {
                handleClicktag();
              }}
            >
              <Eye
                src={process.env.PUBLIC_URL + "/images/sidebar/eye.svg"}
              ></Eye>
              Watch a tag
            </button>
          </WatchContentsContainer>
        </Container>
      )}
    </>
  );
};

export default WatchedContainer;
