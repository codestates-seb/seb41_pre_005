import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUser } from "../../api/userAPI";

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

const GetUserName = (props) => {
  return <UserNameContain>{props.userName}</UserNameContain>;
};

const ElapsedTime = (props) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    function calculateElapsedTime() {
      const uploadTime = new Date(props.createdAt);
      const currentTime = new Date();
      const timeDiff = (currentTime - uploadTime) / 1000;
      const times = [
        { time: "년", seconds: 60 * 60 * 24 * 365 },
        { time: "개월", seconds: 60 * 60 * 24 * 30 },
        { time: "일", seconds: 60 * 60 * 24 },
        { time: "시간", seconds: 60 * 60 },
      ];
      let formattedTimeDiff;
      for (let item of times) {
        if (item === "분") {
          formattedTimeDiff =
            Math.floor(timeDiff / item.seconds) + `${item.time}전`;
        }
        if (timeDiff / item.seconds < 1) {
          continue;
        } else {
          formattedTimeDiff =
            Math.floor(timeDiff / item.seconds) + `${item.time}전`;
          break;
        }
      }

      return formattedTimeDiff;
    }
    setElapsedTime(calculateElapsedTime());
  }, []);
  return <span>{elapsedTime || "now"}</span>;
};

const ProfileHeader = () => {
  const [userName, setUserName] = useState();
  const [createAt, setCreateAt] = useState();
  useEffect(() => {
    async function getData() {
      const userData = await axios({
        method: "get",
        url: "users/userId",
      });
      setUserName(userData.data.displayName);
      setCreateAt(userData.data.createdAt);
    }
    getData();
  }, []);

  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUserName(res.data.displayName);
  //     setCreateAt(res.data.createdAt);
  //   });
  // }, []);

  return (
    <ProfileHead>
      <ProfileImg></ProfileImg>
      <GetUserName userName={userName} />
      {/* {userInfo.displayname} */}
      <ProfileCreatedAt>
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          style={{ marginRight: "20px" }}
        >
          <path
            d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"
            fill="grey"
          ></path>
        </svg>
        <MemberPeriod>
          Member for <ElapsedTime createAt={createAt} />
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
