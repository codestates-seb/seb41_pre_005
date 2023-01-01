import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Earth = styled.img``;

const SideNav = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .public {
    font-size: 1.1rem;
  }
`;
const Public = styled.div`
  color: #525960;
  display: flex;
  width: 16.3rem;
  height: 3.4rem;
  padding: 1.2rem;
  line-height: 1.38rem;

  font-size: 1.1rem;
`;
const Tab = styled(NavLink)`
  color: #525960;
  display: flex;
  width: 16.3rem;
  height: 3.4rem;
  padding: 1.2rem;
  line-height: 1.38rem;
  font-size: 1.3rem;

  &.active {
    border-right: 0.3rem solid #f48125;
    background-color: #f1f2f3;
    color: #0d0d0e;
    font-weight: 700;
  }
`;
const QuestionsWord = styled.div`
  height: 1.8rem;
`;
const TagsWord = styled.div`
  padding-left: 1.8rem;
`;

const LeftSidebar = () => {
  const [selected, setSelected] = useState();
  console.log(selected);
  const handleClick = (e) => {
    console.log(e.target);
    console.log(e.target.id);
    setSelected(e.target.id);
  };
  return (
    <SideNav onClick={handleClick}>
      <Tab
        to="/"
        id="home"
        className={({ isActive }) => (isActive ? "selected" : null)}
      >
        Home
      </Tab>
      <Public className="public">PUBLIC</Public>
      <Tab
        to="/questions"
        id="question"
        className={({ isActive }) => (isActive ? "selected" : null)}
      >
        <QuestionsWord>
          <Earth src={process.env.PUBLIC_URL + "/images/sidebar/earth.svg"}></Earth>
          Questions
        </QuestionsWord>
      </Tab>
      <Tab
        to="/tags"
        id="tags"
        className={({ isActive }) => (isActive ? "selected" : null)}
      >
        <TagsWord>Tags</TagsWord>
      </Tab>
    </SideNav>
  );
};

export default LeftSidebar;
