import axios from "axios";
const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";
export const postAnswer = async (data, token, questionId, userId) => {
  const endpoint = "/answer";
  console.log(questionId);
  const formData = {
    userId,
    content: data.answer,
  };
  console.log(formData);
  try {
    const response = await axios({
      method: "post",
      url: `${url}/questions/${questionId.id}`,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
