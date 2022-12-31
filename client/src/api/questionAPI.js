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
