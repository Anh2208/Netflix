import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "http://localhost:8800/api";

const axiosJWT = axios.create({
  baseURL: baseURL,
});

axiosJWT.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosJWT.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await generateRefreshToken();
        const accessToken = getAccessToken();
        if (accessToken) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return axiosJWT(originalRequest);
      } catch (refreshError) {
        console.log("Lỗi làm mới token:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const getAccessToken = () => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "accessToken") {
      return decodeURIComponent(value);
    }
  }
  return null;
};

const generateRefreshToken = async () => {
  try {
    await axios.get(`${baseURL}/auth/refresh`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.error?.message);
  }
};

export default axiosJWT;
