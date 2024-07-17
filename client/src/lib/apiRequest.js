import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL: "https://estate-hub.onrender.com",
  withCredentials: true,
});

export default apiRequest;
