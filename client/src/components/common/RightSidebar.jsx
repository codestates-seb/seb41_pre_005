import React, { useState } from "react";
import YellowContainer from "./RightSidebar/YellowContainer";
import CustomContainer from "./RightSidebar/CustomContainer";
import WatchedContainer from "./RightSidebar/WatchedContainer";
import IgnoredContainer from './RightSidebar/IgnoredContainer';

const RightSidebar = () => {
  return (
    <>
      <YellowContainer/>
      <CustomContainer/>
      <WatchedContainer/>
      <IgnoredContainer/>
    </>
  );
};

export default RightSidebar;
