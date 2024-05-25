import axios from "axios";

const API_KEY = "b43ddbaff63ab3029ac02b64fcab9f52";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: "vi-VN", // Đặt ngôn ngữ là tiếng Việt
    },
});

export default tmdb;