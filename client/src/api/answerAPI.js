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
export const answerUpVote = async (questionId, userId, answerId, Token) => {
  const res = await axios({
    method: "post",
    data: { data: 1 },
    headers: { Authorization: `Bearer ${Token}` },
    url: `${url}/questions/upVote/${questionId}/${answerId}?userId=${userId}`,
  });
  console.log(res);
  return res;
};
export const answerDownVote = async (questionId, userId, answerId, Token) => {
  const res = await axios({
    method: "post",
    data: { data: 1 },
    headers: { Authorization: `Bearer ${Token}` },
    url: `${url}/questions/downVote/${questionId}/${answerId}?userId=${userId}`,
  });
  console.log(res);
  return res;
};
