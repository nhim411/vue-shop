// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs
const axiosConfig = {
  baseURL: process.env.VUE_APP_API,
  headers: {
    "content-type": "aplications/json",
  },
};

const axiosClient = axios.create({
  ...axiosConfig,
  paramsSerializer: (params) => queryString.stringify(params),
});

//Add a request interceptor
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
//Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data && response.data.body) {
      return response.data.body;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
