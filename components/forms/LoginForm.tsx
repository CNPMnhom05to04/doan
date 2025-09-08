// components/forms/LoginForm.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginValues } from "@/lib/validators/auth";

export default function LoginForm({ className = "" }: { className?: string }) {
    const [formError, setFormError] = React.useState<string | null>(null);
    const [showPassword, setShowPassword] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginValues>({ resolver: zodResolver(LoginSchema) });

    const onSubmit = async (values: LoginValues) => {
        setFormError(null);
        try {
            // Mock API (chưa ghép backend)
            await new Promise((r) => setTimeout(r, 800));
            if (values.email === "fail@example.com") {
                throw new Error("Email hoặc mật khẩu không đúng");
            }
            alert("Đăng nhập thành công!");
            // TODO: điều hướng sau login (useRouter().push("/"))
        } catch (e: any) {
            setFormError(e?.message || "Đăng nhập thất bại");
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-5 ${className}`} aria-busy={isSubmitting}>
            {/* Lỗi tổng */}
            {formError && (
                <div role="alert" className="rounded-lg border border-red-200 bg-red-50 text-red-700 p-3 text-sm">
                    {formError}
                </div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={`block w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm
          ${errors.email ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20"}`}
                    {...register("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={isSubmitting}
                />
                {errors.email && (
                    <p id="email-error" className="text-xs text-red-600" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                    <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="text-xs text-gray-600 hover:underline"
                    >
                        {showPassword ? "Ẩn" : "Hiện"}
                    </button>
                </div>
                <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className={`block w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm
          ${errors.password ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20"}`}
                    {...register("password")}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    disabled={isSubmitting}
                />
                {errors.password && (
                    <p id="password-error" className="text-xs text-red-600" role="alert">
                        {errors.password.message}
                    </p>
                )}
            </div>

            {/* Nút Login + loading */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors
                   bg-gray-900 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                   disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting && (
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                )}
                Đăng nhập
            </button>

            {/* Link Register / Forgot */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
                <Link href="/register" className="text-blue-600 hover:underline">Tạo tài khoản</Link>
                <Link href="/forgot" className="text-blue-600 hover:underline">Quên mật khẩu?</Link>
            </div>
        </form>
    );
}
