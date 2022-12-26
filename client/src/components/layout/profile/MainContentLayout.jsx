import React from "react";
import styled from "styled-components";
const Layout = styled.div`
  display: flex;
  width: 94.9rem;
  /* height: 75.938rem; */
  height: auto;
  /* min-height: 100%; */
  padding-bottom: 32.2rem;
`;

const ProfileMainLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default ProfileMainLayout;
