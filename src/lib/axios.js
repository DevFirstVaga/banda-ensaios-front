import axios from "axios";

export const mediaApi = axios.create({
  baseURL: "http://localhost:8080/media",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwt"),
  },
});
