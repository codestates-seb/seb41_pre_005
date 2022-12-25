import React from "react";
import styled from "styled-components";
const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProfileMainLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default ProfileMainLayout;
