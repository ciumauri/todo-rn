import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Para armazenar o token no React Native

const apiClient = axios.create({
    baseURL: "http://172.19.0.1:8000/api/", // URL base da sua API
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor para adicionar o token JWT no cabeçalho Authorization
apiClient.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem("token"); // Obtenha o token do AsyncStorage
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error("Erro ao buscar o token:", error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;
