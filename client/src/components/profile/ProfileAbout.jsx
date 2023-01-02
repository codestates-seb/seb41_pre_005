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
const PostsSvg = styled.img``;

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
          <PostsSvg src={process.env.PUBLIC_URL + "/images/profile/profilePosts.svg"}></PostsSvg>
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
