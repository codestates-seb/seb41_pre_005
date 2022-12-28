import axios from "axios";

export const postAnswer = async (data) => {
  const endpoint = "/answer";

  const formData = {
    answer: data.answer,
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
