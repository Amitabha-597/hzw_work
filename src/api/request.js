import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://101.200.201.238:62519/api",
  timeout: 10000,

});


export default axiosInstance;
