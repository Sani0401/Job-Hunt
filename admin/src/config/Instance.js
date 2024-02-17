import axios from "axios";

const Instance = axios.create({
    baseURL: "http://localhost:8000/api",
    timeout: 5000
});

Instance.interceptors.response.use(
  response => response,
  error => {
    console.error("Axios request error:", error);
    return Promise.reject(error);
  }
);

export default Instance;
