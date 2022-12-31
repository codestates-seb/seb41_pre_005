import axios from "axios";
// import { useState } from "react";

const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";

export const login = async (data) => {
  try {
    const res = await axios({
      method: "post",
      data,
      headers: { Authorization: null },
      url: "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090/login",
    })
      .then((res) => {
        console.log(res.headers);
        return res;
      })
      .then((data) => console.log(data));
    // console.log(res.headers["Authorization"]);
    // console.log(Object.fromEntries(res.headers));
    console.log(res);

    // console.log(res.headers["Authorization"]);
    // console.log(res.headers);
    /*     const res2 = await fetch(
      "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090/login",
      {
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
      }
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((res) => console.log(res));
    console.log(res2);
    const myHeaders = new Headers(res2.headers);
    console.log(myHeaders); */
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
