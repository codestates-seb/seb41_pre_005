import axios from "axios";
// import { useState } from "react";

const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";

export const login = async (data) => {
  try {
    const res = await axios({
      method: "post",
      data,
      headers: { Authorization: null },
      url: "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090/users/login",
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};
export const signUp = async (data) => {
  try {
    const res = await axios({
      url: "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090/users/signup",
      method: "post",
      data: {
        email: data.userEmail,
        password: data.userPassword,
        displayName: data.userName,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (Token, userId) => {
  try {
    const res = await axios({
      url: `http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090/users/${userId}`,
      method: "get",
      headers: { Authorization: `Bearer ${Token}` },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
