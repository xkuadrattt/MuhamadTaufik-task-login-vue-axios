import axios from "axios";
const axiosInit = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  timeout: 18000,
  headers: {
    Authorization: `Bearer`,
    "Content-Type": "application/json",
  },
});

export default axiosInit;
