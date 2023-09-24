import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/rest",
  headers: {
    Authorization: localStorage.getItem("bearer-token"),
  },
});

export default api;