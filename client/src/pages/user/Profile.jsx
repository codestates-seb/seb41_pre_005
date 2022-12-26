import React from "react";
import styled from "styled-components";
import ContentLayout from "../../components/layout/ContentLayout";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import ProfileMainLayout from "../../components/layout/profile/MainContentLayout";
import ProfileStats from "../../components/profile/ProfileStats";
import ProfileAbout from "../../components/profile/ProfileAbout";

const HomeContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 322px;
`;
const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProfileContentLayout = styled.div`
  padding: 2.4rem;
`;
const ProfileHead = styled.div`
  width: 106.7rem;
  height: 14.4rem;
  /* display: flex; */
`;

const UserNameContain = styled.div`
  margin-top: -10rem;
  margin-left: 14.5rem;
  font-size: 3.4rem;
  width: 35rem;
  display: flex;
`;

const ProfileBtnContainer = styled.div`
  margin-left: 86rem;
  margin-top: -10rem;
`;
const EditBtn = styled.button`
  width: 10.3rem;
  height: 3.5rem;
  border: 1px solid #a0a6ac;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: white;
`;
const ProfileBtn = styled.button`
  width: 7.8rem;
  height: 3.5rem;
  border: 1px solid #a0a6ac;
  border-radius: 3px;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  cursor: pointer;
  background-color: white;
  /* &:hover {
  background-color: #f8f9f9;
} */
`;
const ProfileCreatedAt = styled.div`
  margin-top: 0.5rem;
  margin-left: 14.5rem;
  font-size: 1.3rem;
  color: grey;
  font-weight: 500;
`;
const MemberPeriod = styled.div`
  font-size: 1.3rem;
  color: grey;
  font-weight: 500;
  margin-left: 2.3rem;
  margin-top: -18px;
`;
const ProfileImg = styled.div`
  width: 12.8rem;
  height: 12.8rem;
  border-radius: 7px;
  border: 1px solid orange;
  background-color: orange;
  cursor: pointer;
`;
const AboutLayout = styled.div`
  flex-grow: 1;
  margin: 1.2rem;
`;

const Profile = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentLayout>
            <ProfileContentLayout>
              <ProfileHead>
                <ProfileImg></ProfileImg>
                <UserNameContain>박승철{/*username*/}</UserNameContain>
                <ProfileCreatedAt>
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    style={{marginRight: "20px"}}
                  >
                    <path
                      d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"
                      fill="grey"
                    ></path>
                  </svg>
                  <MemberPeriod> Member for {/*data*/}</MemberPeriod>
                </ProfileCreatedAt>
                <ProfileBtnContainer>
                  <EditBtn>
                    <img
                      src={process.env.PUBLIC_URL + "/images/EditProfile.png"}
                      alt="Edit img"
                      width="100px"
                      style={{marginTop: "2px"}}
                    ></img>
                  </EditBtn>
                  <ProfileBtn>
                    <img
                      src={process.env.PUBLIC_URL + "/images/ProfileBtn.png"}
                      alt="Profile img"
                      width="70px"
                      style={{marginTop: "6px"}}
                    ></img>
                  </ProfileBtn>
                </ProfileBtnContainer>
              </ProfileHead>
              <ProfileMainLayout>
                <ProfileStats />
                <ProfileAbout />
              </ProfileMainLayout>
            </ProfileContentLayout>
          </ContentLayout>
        </BodyContainer>
      </HomeContainer>
      <Footer></Footer>
    </>
  );
};

export default Profile;
