import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.39.224.92:8080/api/",
  withCredentials: true,
});

export default axiosInstance;
