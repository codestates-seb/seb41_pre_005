import React from "react";
import styled from "styled-components";
import TagsItem from "./TagsItem";

const TagsListsContainer = styled.div`
  width: 106.3rem;
  height: 100%;
  margin-left: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const tagList = [
  {
    tagId: 1,
    tagName: "javascript",
    content:
      "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as Java! Include all labels that are relevant to your question; e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc. ",
  },
  {
    tagId: 2,
    tagName: "python",
    content:
      "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is officially out of support as of 2020-01-01. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the tags.",
  },
  {
    tagId: 3,
    tagName: "java",
    content:
      "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers.",
  },
  {
    tagId: 1,
    tagName: "c#",
    content:
      "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as Java! Include all labels that are relevant to your question; e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc. ",
  },
];
const TagsLists = () => {
  return (
    <TagsListsContainer>
      {tagList?.map((item) => (
        <TagsItem tag={item} key={item.tagId} />
      ))}
    </TagsListsContainer>
  );
};

export default TagsLists;
