import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/media",
  headers: {
    Authorization: localStorage.getItem("bearer-token"),
  },
});

export const mediaApi = {
  getMediaList: async () => {
    return axiosInstance.get("/list");
  },
  findMediaById: async (id) => {
    return axiosInstance.get(`/find/${id}`);
  },
  createMedia: async (data) => {
    return axiosInstance.post("/create", data);
  },
  updateMedia: async (data, id) => {
    return axiosInstance.patch(`/update/${id}`, data);
  },
  deleteMedia: async (id) => {
    return axiosInstance.delete(`/delete/${id}`);
  },
};
