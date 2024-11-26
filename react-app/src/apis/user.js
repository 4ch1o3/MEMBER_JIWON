import axiosInstance from "../utils/axiosInstance";

export const login = (email, password) => {
  return axiosInstance
    .post("/user/login", {
      email,
      password,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
