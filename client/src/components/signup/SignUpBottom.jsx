import React from "react";
import styled from "styled-components";

const BottomContainer = styled.div`
  width: 31.6rem;
  height: 7.8rem;
  padding: 1.6rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    font-size: 1.3rem;
    color: #232629;
    font-weight: 500;

    .blue {
      font-size: 1.3rem;
      color: #0074cc;
      font-weight: 500;
    }
  }
  .margin {
    margin-top: 1.2rem;
  }
`;

const SignUpBottom = () => {
  return (
    <BottomContainer>
      <div className="text">
        Already have an account? <span className="blue">Log in</span>
      </div>
      <div className="text margin">
        Are you an employer? <span className="blue">Sign up on Talent</span>
      </div>
    </BottomContainer>
  );
};

export default SignUpBottom;
