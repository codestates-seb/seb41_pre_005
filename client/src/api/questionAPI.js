import axios from "axios";
const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";
export const postQuestion = async (data, token, userId) => {
  if (!token) {
    return alert("post after login");
  }
  const endpoint = `${url}/questions/ask`;
  const tagNameList = data.tags.map((item) => item.tagName);
  console.log(data);
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

export const getQuestions = async (page) => {
  console.log(page);
  const res = await axios({
    method: "get",
    url: `${url}/questions${page}&sort=`,
  });
  return res.data.data;
};
export const getQuestion = async (id) => {
  const res = await axios({
    method: "get",
    url: `${url}/questions/${id}`,
  });
  console.log(res);
  return res.data.data;
};
