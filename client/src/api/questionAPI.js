import axios from "axios";
const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";
export const postQuestion = async (data, token, userId) => {
  if (!token) {
    return alert("post after login");
  }
  const endpoint = `${url}/questions/ask`;
  const tagNameList = data.tags.map((item) => item.tagName);
  const formData = {
    userId,
    content: data.content,
    title: data.title,
    tagNameList,
  };
  try {
    const response = await axios({
      method: "post",
      url: endpoint,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editQuestion = async (data, token, questionId, userId) => {
  if (!token || !userId) {
    return alert("post after login");
  }
  const endpoint = `${url}/questions/${questionId}/edit`;
  const tagNameList = data.tagList.map((item) => item.tagName);
  const formData = {
    userId,
    content: data.content,
    title: data.title,
    tagNameList,
  };
  try {
    const response = await axios({
      method: "patch",
      url: endpoint,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = async (page = "?page=1") => {
  const res = await axios({
    method: "get",
    url: `${url}/questions${page}&sort=`,
  });
  return res.data;
};
export const getQuestion = async (id) => {
  const res = await axios({
    method: "get",
    url: `${url}/questions/${id}`,
  });
  return res.data.data;
};
export const getTopQuestions = async () => {
  const res = await axios({
    method: "get",
    url: `${url}/home`,
  });
  return res.data;
};

export const sortQuestions = async (page, orderType) => {
  const res = await axios({
    method: "get",
    url: `${url}/questions${page}&sort=${orderType}`,
  });
  console.log(res);
  return res.data;
};

export const Search = (data) => {};

export const questionUpVote = async (questionId, userId, Token) => {
  const res = await axios({
    method: "post",
    data: { data: 1 },
    headers: { Authorization: `Bearer ${Token}` },
    url: `${url}/questions/upVote/${questionId}?userId=${userId}`,
  });
  console.log(res);
  return res;
};
export const questionDownVote = async (questionId, userId, Token) => {
  const res = await axios({
    method: "post",
    data: { data: 1 },
    headers: { Authorization: `Bearer ${Token}` },
    url: `${url}/questions/downVote/${questionId}?userId=${userId}`,
  });
  console.log(res);
  return res;
};
