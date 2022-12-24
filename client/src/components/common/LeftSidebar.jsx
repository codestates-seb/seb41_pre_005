import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  margin-top: 2.5rem;
  width: 16.4rem;
  overflow: auto;
`;

const SidebarList = styled.li`
  margin-bottom: 2rem;
  text-align: left;
  color: #525960;
  font-size: 1.3rem;
  padding-left: 1rem;
  margin-left: 1rem;

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
  &:hover {
    color: hsl(210deg 8% 5%);
  }
`;

const LeftSidebar = () => {
  return (
    <SidebarContainer>
      <ul>
        <SidebarList>
          <button>Home</button>
        </SidebarList>
        <SidebarList>
          <button className="public">PUBLIC</button>
        </SidebarList>
        <SidebarList>
          <button>Questions</button>
        </SidebarList>
        <SidebarList>
          <button className="publicLists">Tags</button>
        </SidebarList>
      </ul>
    </SidebarContainer>
  );
};

export default LeftSidebar;
