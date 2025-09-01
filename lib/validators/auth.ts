// lib/validators/auth.ts
import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
});

export type LoginValues = z.infer<typeof LoginSchema>;
