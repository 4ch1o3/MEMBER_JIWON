import axiosInstance from "../utils/axiosInstance";

export const createQuestion = ({ targetId, content, subject = "" }) => {
  return axiosInstance.post("/question", {
    targetId,
    content,
    subject,
  });
};

export const getReceivedQuestion = () => {
  return axiosInstance
    .get("/question/received")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getSentQuestion = () => {
  return axiosInstance
    .get("/question/sent")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getReceivedAnswer = () => {
  return axiosInstance
    .get("/answer/received")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const createAnswer = ({ questionId, content = "" }) => {
  return axiosInstance.post("/answer", {
    questionId,
    content,
  });
};
