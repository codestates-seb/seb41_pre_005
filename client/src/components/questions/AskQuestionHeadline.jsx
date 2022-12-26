import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 121.6rem;
  height: 21.961rem;
  background-color: #f8f9f9;
  margin-left: 4.2rem;
`;
const Head = styled.div`
  width: 121.6rem;
  height: 13rem;
  display: flex;
  align-items: center;
`;
const ReviewWord = styled.div`
  width: 26.1rem;
  height: 3.5rem;
  font-size: 2.7rem;
  font-weight: 600;
`;
const Box = styled.div`
  width: 77rem;
  height: 4.961rem;
  background-color: #ebf4fb;
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;
  border: 1px solid #a6ceed;
  border-radius: 0.5rem;
  padding: 1.6rem;
`;
const ImageBox = styled.div`
    width:89rem;
    height: 13rem;
    margin-left: 3rem;
    margin-top: 3rem;
`
const AskQuestionHeadline = () => {
  return (
    <Container>
      <Head>
        <ReviewWord>Review your question</ReviewWord>
        <ImageBox>
        <img
          className="AskQuestionHead"
          alt="robot"
          src={process.env.PUBLIC_URL + "/images/AskQuestionHead.png"}
          width="890px"
          height="120rem"
        ></img>
        </ImageBox>
      </Head>
      <Box>Please do a final review of your question and then post.</Box>
    </Container>
  );
};
export default AskQuestionHeadline;
