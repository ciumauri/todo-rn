import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://172.19.0.1:8000/api/", // URL base da sua API
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
