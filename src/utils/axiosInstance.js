import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://2fe1-203-246-85-188.ngrok-free.app/api/",
  withCredentials: true,
});

export default axiosInstance;
