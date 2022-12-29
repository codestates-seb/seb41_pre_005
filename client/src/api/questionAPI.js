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
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = () => {};
export const getQuestion = () => {};
