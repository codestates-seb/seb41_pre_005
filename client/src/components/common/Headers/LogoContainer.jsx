import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContain = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  margin-left: 10rem;
  margin-bottom: 0.2rem;

  img {
    width: 14.6rem;
    height: 3rem;
  }
  &:hover {
    background-color: #e4e6e8;
  }
  /* padding: 0 var(--su8);
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #00000000;
  margin-left: 8px;

  @media screen and (max-width: 640px) {
    display: none;
  }
  img {
    margin-left: 0;
    width: 150px;
    height: 30px;
    margin-top: -4px;
  }
  &:hover {
    width: -30px;
    background-color: #e4e6e8;
  } */
`;

const LogoContainer = () => {
  return (
    <LogoContain>
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/images/main_logo.svg"}
          alt="Stack Overflow logo"
        ></img>
      </Link>
    </LogoContain>
  );
};

export default LogoContainer;
