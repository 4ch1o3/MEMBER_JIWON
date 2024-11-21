import axiosInstance from "../utils/axiosInstance";

export const login = (email, password) => {
  return axiosInstance
    .post("")
    .then()
    .catch((error) => {
      throw error;
    });
};
