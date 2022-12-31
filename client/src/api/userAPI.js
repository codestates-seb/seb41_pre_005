import axios from "axios";
// import { useState } from "react";

const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";

export const login = async (data) => {
  try {
    const res = await axios({
      method: "post",
      data,
      url: "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090/login",
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

export const getUser = async (id) => {
  try {
    const res = await axios({
      url: `/users/${id}`,
      method: "get",
    });
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
