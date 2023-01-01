import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/userAPI";

const ProfileHead = styled.div`
  width: 106.7rem;
  height: 14.4rem;
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
  margin-top: 5rem;
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
const UploadTime = styled.time`
  color: hsl(210, 8%, 45%);
  white-space: nowrap;
  font-size: 1.3rem;
`;
const Cake = styled.img`
`;

const HeaderLineTime = ({ createdAt }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    function calculateElapsedTime() {
      const uploadTime = new Date(createdAt);
      const currentTime = new Date();
      const timeDiff = (currentTime - uploadTime) / 1000;
      const times = [
        { time: "Year", seconds: 60 * 60 * 24 * 365 },
        { time: "Months", seconds: 60 * 60 * 24 * 30 },
        { time: "Day", seconds: 60 * 60 * 24 },
        { time: "Hours", seconds: 60 * 60 },
        { time: "Minutes", seconds: 60 },
      ];
      let formattedTimeDiff;
      for (let item of times) {
        if (item === "Minutes") {
          formattedTimeDiff =
            Math.floor(timeDiff / item.seconds) + ` ${item.time}`;
        }
        if (timeDiff / item.seconds < 1) {
          continue;
        } else {
          formattedTimeDiff =
            Math.floor(timeDiff / item.seconds) + ` ${item.time}`;
          break;
        }
      }

      return formattedTimeDiff;
    }
    setElapsedTime(calculateElapsedTime());
  });
  return <UploadTime> {elapsedTime || "now"}</UploadTime>;
};

const ProfileHeader = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    async function getUserInfo() {
      const res = await getUser(id);
      setUserInfo(res);
    }
    getUserInfo();
  }, []);

  return (
    <ProfileHead>
      <ProfileImg></ProfileImg>
      <UserNameContain>{userInfo?.displayName}</UserNameContain>
      <ProfileCreatedAt>
        <Cake src={process.env.PUBLIC_URL + "/images/profile/cake.svg"}></Cake>
        <MemberPeriod>
          Member for
          <HeaderLineTime>{userInfo?.createdAt}</HeaderLineTime>
        </MemberPeriod>
      </ProfileCreatedAt>
      <ProfileBtnContainer>
        <EditBtn>
          <img
            src={process.env.PUBLIC_URL + "/images/EditProfile.png"}
            alt="Edit img"
            width="100px"
            style={{ marginTop: "2px" }}
          ></img>
        </EditBtn>
        <ProfileBtn>
          <img
            src={process.env.PUBLIC_URL + "/images/ProfileBtn.png"}
            alt="Profile img"
            width="70px"
            style={{ marginTop: "6px" }}
          ></img>
        </ProfileBtn>
      </ProfileBtnContainer>
    </ProfileHead>
  );
};

export default ProfileHeader;
