// src/api/auth.ts
import api from "./client";

export type LoginPayload = { username: string; password: string };


export type LoginResponse = {
    code?: number;
    result: { token: string; authenticated?: boolean;[k: string]: any };
};
export type RegisterPayload = {
    fullName: string;
    email: string;
    password: string;
};

export async function login(body: LoginPayload): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>("/auth/login", body);

    if (data?.result?.token) {
        localStorage.setItem("token", data.result.token);
    }
    return data;
}
export async function register(payload: RegisterPayload) {

    const { data } = await api.post("/auth/register", payload);
    return data;
}