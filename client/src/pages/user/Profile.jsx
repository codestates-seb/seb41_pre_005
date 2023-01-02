import React from "react";
import styled from "styled-components";
import ContentLayout from "../../components/layout/ContentLayout";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import Footer from "../../components/common/Footer";
import ProfileMainLayout from "../../components/layout/profile/MainContentLayout";
import ProfileStats from "../../components/profile/ProfileStats";
import ProfileAbout from "../../components/profile/ProfileAbout";
import ProfileHeader from "../../components/profile/ProfileHeader";

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

const Profile = () => {
  return (
    <>
      <HomeContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentLayout>
            <ProfileContentLayout>
              <ProfileHeader />
              <ProfileMainLayout>
                <ProfileStats />
                <ProfileAbout />
              </ProfileMainLayout>
            </ProfileContentLayout>
          </ContentLayout>
        </BodyContainer>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Profile;
