import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://localhost:5555/api/",
});
