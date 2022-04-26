import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  getUserByEmail(params) {
    const url = "/users";
    return axiosClient.get(url, { params });
  },
};

export default productApi;
