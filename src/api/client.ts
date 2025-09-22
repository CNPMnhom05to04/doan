// src/api/client.ts
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8081",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

// tự gắn JWT nếu đã đăng nhập
api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
