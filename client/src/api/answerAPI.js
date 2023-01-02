import axios from "axios";
const url = "http://ec2-3-38-98-200.ap-northeast-2.compute.amazonaws.com:8090";
export const postAnswer = async (data, token, questionId, userId) => {
  const endpoint = "/answer";
  const formData = {
    userId,
    content: data.answer,
  };
  try {
    const response = await axios({
      method: "post",
      url: `${url}/questions/${questionId.id}`,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const editAnswer = async (data, token, questionId, userId, answerId) => {
  const formData = {
    userId,
    answerId,
    content: data.answer,
  };
  try {
    const response = await axios({
      method: "patch",
      url: `${url}/questions/${questionId}/${answerId}`,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteAnswer = async (questionId, answerId, Token, userId) => {
  const res = await axios({
    method: "delete",
    url: `${url}/questions/${questionId}/${answerId}?userId=${userId}`,
    headers: { Authorization: `Bearer ${Token}` },
  });
  return res;
};
export const answerUpVote = async (questionId, userId, answerId, Token) => {
  const res = await axios({
    method: "post",
    data: { data: 1 },
    headers: { Authorization: `Bearer ${Token}` },
    url: `${url}/questions/upVote/${questionId}/${answerId}?userId=${userId}`,
  });
  return res;
};
export const answerDownVote = async (questionId, userId, answerId, Token) => {
  const res = await axios({
    method: "post",
    data: { data: 1 },
    headers: { Authorization: `Bearer ${Token}` },
    url: `${url}/questions/downVote/${questionId}/${answerId}?userId=${userId}`,
  });
  return res;
};
