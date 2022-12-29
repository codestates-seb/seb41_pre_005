import axios from "axios";

const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";

export const login = async (data) => {
  try {
    const res = await axios({
      method: "post",
      data,
      url: "/users/login",
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const signUp = async (data) => {
  try {
    const res = await axios({
      url: "/users/signup",
      method: "post",
      data: {
        email: data.userEmail,
        password: data.userPassword,
        displayName: data.userName,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getUser = () => {};
