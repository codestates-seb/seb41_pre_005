import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import AskTags from "./AskTags";
const TagsLayout = styled.div`
  padding: 2.4rem;
  background-color: white;
  border: 1px solid hsl(210, 8%, 90%);
  border-radius: 3px;
  width: 100%;
  margin-top: 1.2rem;
`;
const LabelContainer = styled.div``;
const Label = styled.label`
  cursor: pointer;
  display: block;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0 2px;
`;
const Description = styled.p`
  font-weight: normal;
  margin-bottom: 6px;
  font-size: 1.2rem;
  color: hsl(210, 8%, 25%);
`;
const TagInputContainer = styled.div`
  width: 100%;
  border: 1px solid hsl(210, 8%, 90%);
  display: flex;
`;
const TagEditor = styled.div`
  display: flex;
  padding: 2px;
  padding-right: 9px;

  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 3.7rem;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  font-size: 1.6rem;

  &.inputFocused {
    border: 1px solid #38a9f0;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    outline: 0;
  }
`;
const TagInput = styled.input`
  height: 29px;
  border: none;
  margin: 0;
  font-size: 13px;
  width: 50%;
`;
const TagContainer = styled.div`
  margin-left: 5px;
`;
const AskQuestionTags = ({ tagList }) => {
  const [tags, setTags] = useState(tagList ? tagList : []);
  const [focused, setFocused] = useState(false);
  const [tagId, setTagId] = useState(0);
  const { register, setValue } = useFormContext();
  useEffect(() => {
    register("tags");
    setValue("tags", tags);
  }, [register, tags]);
  const addTags = (e) => {
    const onlyText = e.target.value.trim();
    if (onlyText === "") return;
    setTags([...tags, { tagName: onlyText, tagId }]);
    setTagId(tagId + 1);
    e.target.value = "";
  };
  const deleteTag = (tagId) => {
    let newTags = tags.filter((item) => item.tagId * 1 !== tagId * 1);
    setTags(newTags);
  };
  const keyUpHandler = (e) => {
    if (e.key === " ") {
      if (tags.indexOf(e.target.value.trim()) === -1) {
        return addTags(e);
      }
    }
  };

  return (
    <TagsLayout>
      <LabelContainer>
        <Label htmlFor="tags">Tags</Label>
        <Description>
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </Description>
      </LabelContainer>
      <TagEditor className={focused ? "inputFocused" : null}>
        <TagContainer>
          <AskTags tags={tags} handleDelete={deleteTag} />
        </TagContainer>
        <TagInput
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onKeyUp={keyUpHandler}
          placeholder="press space bar to add tag"
          id="tags"
        ></TagInput>
      </TagEditor>
    </TagsLayout>
  );
};

export default AskQuestionTags;
