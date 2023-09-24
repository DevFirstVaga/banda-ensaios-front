import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8000/rest",
  baseURL: "https://ensaios-cms-lukhasdeveloper.vercel.app/rest",
  headers: {
    Authorization: localStorage.getItem("bearer-token"),
  },
});

export default api;