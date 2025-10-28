import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8080/api", // đổi theo backend của mình
  headers: { "Content-Type": "application/json" },
});

http.interceptors.request.use(cfg => {
  const token = localStorage.getItem("token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});
