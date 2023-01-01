import React from "react";
import styled from "styled-components";

const AboutLayout = styled.div`
  flex-grow: 1;
  margin: 0rem 1.2rem 1.2rem 2rem;
`;
const AboutContainer = styled.div`
  width: 78.225rem;
  height: 13.546rem;
`;
const Title = styled.div`
  width: 100%;
  height: 2.746rem;
  font-size: 2.1rem;
`;
const AboutContent = styled.div`
  margin-top: 0.7rem;
  width: 100%;
  height: 10rem;
  background-color: #f8f9f9;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    width: 31.6rem;
    font-size: 13px;
    color: #6a737c;
    margin: 0 20.0125rem;
    line-height: 1.8rem;

    .blue {
      color: #0074cc;
    }
  }
`;
const BadgesContainer = styled(AboutContainer)`
  height: 11.846rem;
  margin-top: 2rem;
`;
const BadgesContent = styled(AboutContent)`
  height: 8.3rem;
  padding: 3.2rem;

  .text {
    display: flex;
    justify-content: center;
    .blue {
      margin-left: 0.5rem;
    }
  }
`;
const PostsContainer = styled(BadgesContainer)`
  height: 43.346rem;
`;
const PostsContent = styled(BadgesContent)`
  height: 39.8rem;
  flex-direction: column;
  margin: 0;

  .text {
    width: 50rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const ProfileAbout = () => {
  return (
    <AboutLayout>
      <AboutContainer>
        <Title>About</Title>
        <AboutContent>
          <div className="text">
            Your about me section is currently blank. Would you <br></br>like to
            add one? <span className="blue">Edit profile</span>
          </div>
        </AboutContent>
      </AboutContainer>
      <BadgesContainer>
        <Title>Badges</Title>
        <BadgesContent>
          <div className="text">
            You have not earned any <span className="blue"> badges.</span>
          </div>
        </BadgesContent>
      </BadgesContainer>
      <PostsContainer>
        <Title>Posts</Title>
        <PostsContent>
          <svg
            aria-hidden="true"
            className="mb24 svg-spot spotEmptyXL"
            width="196"
            height="196"
            viewBox="0 0 196 196"
          >
            <path
              opacity=".07"
              d="M35 177.5c-19.5-9-29.35-26.54-26-82 3.35-55.46 14.8-66.9 32.5-73 17.7-6.1 86.22-21.95 120 5.5s37.46 52.67 23 96.5c-14.46 43.84-22.26 63.24-60 61-11.4-.68-22.3-.85-32.5-1.02-23.56-.38-43.4-.7-57-6.98ZM33 42v26a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V42a7 7 0 0 0-7-7H40a7 7 0 0 0-7 7Zm7 39a7 7 0 0 0-7 7v27a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V88a7 7 0 0 0-7-7H40Z"
            ></path>
            <path
              opacity=".2"
              d="M42 48a4 4 0 0 1 4-4h112a7 7 0 0 1 7 7v23a7 7 0 0 1-7 7H49a7 7 0 0 1-7-7V48Zm0 47a4 4 0 0 1 4-4h112a7 7 0 0 1 7 7v22a7 7 0 0 1-7 7H49a7 7 0 0 1-7-7V95Zm-1 36h3.19a2 2 0 1 1 0 4H40a3 3 0 0 0-3 3v4.44a2 2 0 1 1-4 0V138a7 7 0 0 1 7-7h1Zm11.65 2c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.38a2 2 0 1 1 0 4H92.3a2 2 0 0 1-2-2Zm18.84 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2H153a7 7 0 0 1 7 7v4.44a2 2 0 1 1-4 0v-4.58a3 3 0 0 0-3-2.86h-4.19a2 2 0 0 1-2-2ZM35 151.56a2 2 0 0 1 2 2v4.51a3 3 0 0 0 3 2.93h4.19a2 2 0 1 1 0 4h-4.35a7 7 0 0 1-6.84-7v-4.44c0-1.1.9-2 2-2Zm123 0a2 2 0 0 1 2 2v4.74a7 7 0 0 1-7 6.69h-4.19a2 2 0 1 1 0-4h4.33a3 3 0 0 0 2.86-3v-4.43c0-1.1.9-2 2-2ZM52.65 163c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.38a2 2 0 1 1 0 4H92.3a2 2 0 0 1-2-2Zm18.84 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Z"
            ></path>
            <path d="M124.48 14.24 120.25 10 116 14.24l4.24 4.25 4.25-4.25ZM52 58a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12-4c0-1.1.9-2 2-2h80a2 2 0 1 1 0 4H66a2 2 0 0 1-2-2ZM33 42a7 7 0 0 1 7-7h113a7 7 0 0 1 7 7v26a7 7 0 0 1-7 7H40a7 7 0 0 1-7-7V42Zm7-3a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h113a3 3 0 0 0 3-3V42a3 3 0 0 0-3-3H40Zm16 62a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm10-2a2 2 0 1 0 0 4h80a2 2 0 1 0 0-4H66ZM40 81a7 7 0 0 0-7 7v27a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V88a7 7 0 0 0-7-7H40Zm-3 7a3 3 0 0 1 3-3h113a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H40a3 3 0 0 1-3-3V88Zm150.97 54.49L179.5 134l-8.49 8.49 8.49 8.48 8.48-8.48Zm-8.48 2.82-2.83-2.82 2.83-2.83 2.82 2.83-2.82 2.82ZM8 97a2 2 0 0 1 2 2v4h4a2 2 0 1 1 0 4h-4v4a2 2 0 1 1-4 0v-4H2a2 2 0 1 1 0-4h4v-4c0-1.1.9-2 2-2Z"></path>
          </svg>
          <div className="text">
            Just getting started? Try answering a question!
          </div>
          <div className="text">
            Your most helpful questions, answers and tags will appear here.Start{" "}
            <br></br>
            by answering a question or selecting tags that match topics you’re{" "}
            <br></br>
            interested in.
          </div>
        </PostsContent>
      </PostsContainer>
    </AboutLayout>
  );
};
export default ProfileAbout;
