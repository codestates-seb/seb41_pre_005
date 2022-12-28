import axios from "axios";

export const postQuestion = async (data) => {
  const endpoint = "/questions/ask";
  const tagNameList = data.tags.map((item) => item.tagName);
  const formData = {
    content: data.content,
    title: data.title,
    tagNameList,
  };
  try {
    const response = await axios({
      method: "post",
      url: endpoint,
      data: formData,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = () => {};
export const getQuestion = () => {};
