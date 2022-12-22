import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const SidebarContainer = styled.div`
  /* background-color: #fff; */
  margin-top: 2.5rem;
  width: 16.4rem;
  overflow: auto;
`;

const SidebarList = styled.li`
  margin-bottom: 2rem;
  text-align: left;
  color: #525960;
  font-size: 1.3rem;
  padding-left: 10px;

  .icon {
    font-size: 1.6rem;
    margin: 0 5px 0 0;
  }
  .public {
    font-size: 1.1rem;
  }
  .publicLists {
    font-size: 1.3rem;
    padding-left: 20px;
  }
`;

const LeftSidebar = () => {
  return (
    <SidebarContainer>
      <ul>
        <SidebarList>Home</SidebarList>
        <SidebarList>
          <span className="public">PUBLIC</span>
        </SidebarList>
        <SidebarList>
          <FontAwesomeIcon icon={faEarthAmericas} className="icon" />
          Questions
        </SidebarList>
        <SidebarList>
          <span className="publicLists">Tags</span>
        </SidebarList>
        <SidebarList>
          <span className="publicLists">Users</span>
        </SidebarList>
      </ul>
    </SidebarContainer>
  );
};

export default LeftSidebar;
