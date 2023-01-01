import React from "react";
import styled from "styled-components";

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
            <svg
              aria-hidden="true"
              className="va-text-bottom sm:d-none svg-icon iconShareSm"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
            </svg>
          </span>
        </span>
      </BottomContainer>
    </>
  );
};

export default LoginPageBottom;
