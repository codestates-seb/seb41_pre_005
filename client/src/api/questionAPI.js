import axios from "axios";

export const postQuestion = async (data, token) => {
  if (!token) {
    return alert("post after login");
  }
  const endpoint = "/questions/ask";
  const tagNameList = data.tags.map((item) => item.tagName);

  const formData = {
    userId: 1,
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
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = async (page) => {
  const res = await axios({
    method: "get",
    url: `/questions${page}&sort=`,
  });
  return res.data.data;
};
export const getQuestion = async (id) => {
  const res = await axios({
    method: "get",
    url: `/questions/${id}`,
  });
  console.log(res);
  return res.data.data;
};
