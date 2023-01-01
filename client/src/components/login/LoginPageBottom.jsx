import React from "react";
import styled from "styled-components";

const BottomSvg = styled.img``;
const BottomContainer = styled.div`
  width: 28.8rem;
  height: 7.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text {
    font-size: 1.3rem;
    font-weight: 450;
    .blue {
      color: #0074cc;
    }
  }

  .marginText {
    margin-top: 1.2rem;
    .blue {
      color: #0074cc;
    }
  }
`;

const LoginPageBottom = () => {
  return (
    <>
      <BottomContainer>
        <span className="text">
          Don’t have an account? <span className="text blue">Sign up</span>
        </span>
        <span className="text marginText">
          Are you an employer?
          <span className="text blue">
            Sign up on Talent
            <BottomSvg src={process.env.PUBLIC_URL + "/images/loginPageBottom.svg"}></BottomSvg>
          </span>
        </span>
      </BottomContainer>
    </>
  );
};

export default LoginPageBottom;
