import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "../../../pages/user/Login";
export const ProfileImgContain = styled.div`
  display: flex;
  width: 82.3px;
  cursor: pointer;
  &:hover {
    background-color: #e3e5e8;
  }
`;

export const Communitues = styled.div`
  width: 100%;
  height: 34px;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding-left: 8px; */
  .name {
    color: #0074cc;
  }
  .discription {
    color: #3b4045;
    padding: 2px 0;
    &:hover {
      cursor: pointer;
    }
  }
  .loginout {
    color: #0074cc;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }
`;

export const DropdownSubContainerBottom = styled.div`
  width: 375px;
  height: 34px;
  padding-top: 10px;
  background-color: white;
  display: flex;
  /* justify-content: center; */
  &:hover {
    background-color: #e4e6e8;
  }
`;

export const DropdownSubContainer = styled.div`
  width: 375px;
  height: 34px;
  padding-top: 10px;
  background-color: #f5f8fb;
  display: flex;
  /* justify-content: center; */
  &:hover {
    background-color: #e3ecf3;
  }
`;
export const ProfileImg = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 3px;
  border: 1px solid orange;
  background-color: orange;
  cursor: pointer;
  margin-top: 11px;
  margin-left: 12px;
`;
export const EtcBtn = styled.div`
  display: flex;
  width: 4rem;
  cursor: pointer;
  &:hover {
    background-color: #e3e5e8;
  }
`;

export const DropDownSvg = () => {
  return (
    <>
      <svg
        cursor="pointer"
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 32 37"
        style={{
          marginRight: "10px",
          marginLeft: "10px",
        }}
      >
        <path
          d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z"
          fill="#c2c3c4"
        />
        <path
          d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
          fill="#F77F2B"
        />
      </svg>
      <div style={{ marginRight: "75px", fontWeight: "800" }} className="name">
        Stack Overflow
      </div>
      <span style={{ marginLeft: "17px" }} className="discription loginout">
        help
      </span>
      <span style={{ marginLeft: "17px" }} className="discription loginout">
        chat
      </span>
    </>
  );
};

export const DropDownContainer = () => {
  return (
    <>
      <DropdownSubContainer>
        <div
          style={{
            color: "grey",
            fontSize: "18px",
            fontWeight: "300",
            marginLeft: "15px",
          }}
        >
          ㄴ
        </div>
        <svg
          cursor="pointer"
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 32 37"
          style={{
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          <path d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z" fill="grey" />
          <path
            d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
            fill="grey"
          />
        </svg>
        <div style={{ marginLight: "75px" }} className="name">
          Meta Stack Overflow
        </div>
      </DropdownSubContainer>
    </>
  );
};

export const HeaderIcon = () => {
  return (
    <>
      <ProfileImgContain>
        <Link to="/users/:id">
          <ProfileImg />
        </Link>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "black",
            marginLeft: "5px",
            marginTop: "15px",
          }}
        >
          1
        </div>
        <span
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            color: "#d2b08f",
            marginLeft: "7px",
            marginTop: "-12.5px",
          }}
        >
          .
        </span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#d2b08f",
            marginTop: "15px",
          }}
        >
          2
        </span>
      </ProfileImgContain>

      <EtcBtn>
        <svg
          aria-hidden="true"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="#53595F"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        >
          <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
        </svg>
      </EtcBtn>
      <EtcBtn>
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="green"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        >
          <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
        </svg>
      </EtcBtn>
      <EtcBtn>
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="#53595F"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        >
          <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
        </svg>
      </EtcBtn>
      <EtcBtn>
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="#53595F"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        >
          <path d="m8.9844-0.013672a1 1 0 0 0 -0.98438 1.0137v0.38281l-0.55273-0.27734a1 1 0 0 0 -0.48242 -0.11133 1 1 0 0 0 -0.41211 1.9004l1.4473 0.72266v3.6523l-3.1621-1.8262 0.097656-1.6152a1 1 0 0 0 -0.95117 -1.0742 1 1 0 0 0 -1.0449 0.95508l-0.037109 0.61719-0.33008-0.19141a1 1 0 0 0 -0.57422 -0.14062 1 1 0 0 0 -0.42578 1.8711l0.33203 0.19141-0.51758 0.3418a1 1 0 1 0 1.1016 1.668l1.3516-0.89258 3.1621 1.8262-3.1621 1.8262-1.3516-0.89258a1 1 0 0 0 -0.56445 -0.17383 1 1 0 0 0 -0.53711 1.8418l0.51758 0.3418-0.33203 0.19141a1 1 0 1 0 1 1.7305l0.33008-0.19141 0.037109 0.61719a1 1 0 1 0 1.9961 -0.11914l-0.097656-1.6152 3.1621-1.8262v3.6523l-1.4473 0.72266a1 1 0 0 0 0.89453 1.7891l0.55273-0.27734v0.38281a1 1 0 1 0 2 0v-0.38281l0.55273 0.27734a1 1 0 1 0 0.89453 -1.7891l-1.4473-0.72266v-3.6523l3.1621 1.8262-0.097656 1.6152a1 1 0 1 0 1.9961 0.11914l0.037109-0.61719 0.33008 0.19141a1 1 0 1 0 1 -1.7305l-0.33203-0.19141 0.51758-0.3418a1 1 0 0 0 -0.56641 -1.8418 1 1 0 0 0 -0.53516 0.17383l-1.3516 0.89258-3.1621-1.8262 3.1621-1.8262 1.3516 0.89258a1 1 0 1 0 1.1016 -1.668l-0.51758-0.3418 0.33203-0.19141a1 1 0 0 0 -0.45508 -1.8711 1 1 0 0 0 -0.54492 0.14062l-0.33008 0.19141-0.037109-0.61719a1 1 0 0 0 -0.97461 -0.95508 1 1 0 0 0 -1.0215 1.0742l0.097656 1.6152-3.1621 1.8262v-3.6523l1.4473-0.72266a1 1 0 1 0 -0.89453 -1.7891l-0.55273 0.27734v-0.38281a1 1 0 0 0 -1.0156 -1.0137z"></path>
        </svg>
      </EtcBtn>
    </>
  );
};

export const LoginIcon = () => {
  return (
    <>
      <ProfileImgContain>
        <Link to="/users/:id">
          <ProfileImg />
        </Link>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "black",
            marginLeft: "5px",
            marginTop: "15px",
          }}
        >
          1
        </div>
        <span
          style={{
            fontSize: "35px",
            fontWeight: "bold",
            color: "#d2b08f",
            marginLeft: "7px",
            marginTop: "-12.5px",
          }}
        >
          .
        </span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#d2b08f",
            marginTop: "15px",
          }}
        >
          2
        </span>
      </ProfileImgContain>

      <EtcBtn>
        <svg
          aria-hidden="true"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="#53595F"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        >
          <path d="M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z"></path>
        </svg>
      </EtcBtn>
      <EtcBtn>
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="green"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        >
          <path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z"></path>
        </svg>
      </EtcBtn>
      <EtcBtn>
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="#53595F"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        >
          <path d="M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z"></path>
        </svg>
      </EtcBtn>
      <EtcBtn>
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="#53595F"
          style={{ marginTop: "15px", marginLeft: "10px" }}
        >
          <path d="m8.9844-0.013672a1 1 0 0 0 -0.98438 1.0137v0.38281l-0.55273-0.27734a1 1 0 0 0 -0.48242 -0.11133 1 1 0 0 0 -0.41211 1.9004l1.4473 0.72266v3.6523l-3.1621-1.8262 0.097656-1.6152a1 1 0 0 0 -0.95117 -1.0742 1 1 0 0 0 -1.0449 0.95508l-0.037109 0.61719-0.33008-0.19141a1 1 0 0 0 -0.57422 -0.14062 1 1 0 0 0 -0.42578 1.8711l0.33203 0.19141-0.51758 0.3418a1 1 0 1 0 1.1016 1.668l1.3516-0.89258 3.1621 1.8262-3.1621 1.8262-1.3516-0.89258a1 1 0 0 0 -0.56445 -0.17383 1 1 0 0 0 -0.53711 1.8418l0.51758 0.3418-0.33203 0.19141a1 1 0 1 0 1 1.7305l0.33008-0.19141 0.037109 0.61719a1 1 0 1 0 1.9961 -0.11914l-0.097656-1.6152 3.1621-1.8262v3.6523l-1.4473 0.72266a1 1 0 0 0 0.89453 1.7891l0.55273-0.27734v0.38281a1 1 0 1 0 2 0v-0.38281l0.55273 0.27734a1 1 0 1 0 0.89453 -1.7891l-1.4473-0.72266v-3.6523l3.1621 1.8262-0.097656 1.6152a1 1 0 1 0 1.9961 0.11914l0.037109-0.61719 0.33008 0.19141a1 1 0 1 0 1 -1.7305l-0.33203-0.19141 0.51758-0.3418a1 1 0 0 0 -0.56641 -1.8418 1 1 0 0 0 -0.53516 0.17383l-1.3516 0.89258-3.1621-1.8262 3.1621-1.8262 1.3516 0.89258a1 1 0 1 0 1.1016 -1.668l-0.51758-0.3418 0.33203-0.19141a1 1 0 0 0 -0.45508 -1.8711 1 1 0 0 0 -0.54492 0.14062l-0.33008 0.19141-0.037109-0.61719a1 1 0 0 0 -0.97461 -0.95508 1 1 0 0 0 -1.0215 1.0742l0.097656 1.6152-3.1621 1.8262v-3.6523l1.4473-0.72266a1 1 0 1 0 -0.89453 -1.7891l-0.55273 0.27734v-0.38281a1 1 0 0 0 -1.0156 -1.0137z"></path>
        </svg>
      </EtcBtn>
    </>
  );
};

export const DropDownBottom = () => {
  return (
    <>
      <Communitues>
        <DropdownSubContainerBottom>
          <svg
            cursor="pointer"
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 32 37"
            style={{
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            <path
              d="M 26 33 v -9 h 4 v 13 H 0 V 24 h 4 v 9 h 22 Z"
              fill="#c2c3c4"
            />
            <path
              d="m 21.5 0 l -2.7 2 l 9.9 13.3 l 2.7 -2 L 21.5 0 Z M 26 18.4 L 13.3 7.8 l 2.1 -2.5 l 12.7 10.6 l -2.1 2.5 Z M 9.1 15.2 l 15 7 l 1.4 -3 l -15 -7 l -1.4 3 Z m 14 10.79 l 0.68 -2.95 l -16.1 -3.35 L 7 23 l 16.1 2.99 Z M 23 30 H 7 v -3 h 16 v 3 Z"
              fill="#F77F2B"
            />
          </svg>
          <div style={{ marginRight: "75px" }} className="name">
            Stack Overflow
          </div>
        </DropdownSubContainerBottom>
      </Communitues>
    </>
  );
};
