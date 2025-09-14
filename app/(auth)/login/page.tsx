// app/(auth)/login/page.tsx
"use client";

import Link from "next/link";
import * as React from "react";

const primary = "#1F2A7A";
const primaryHover = "#1a246a";
const cardBg = "#16181D";
const pageBg = "#0F1115";
const border = "#2A2F3A";

export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <main
            className="min-h-[100svh] w-full grid lg:grid-cols-2"
            style={{ backgroundColor: pageBg }}
        >
            {/* Panel trái: ảnh hero (tuỳ bạn đổi /public/hero.jpg) */}
            <section className="hidden lg:block relative">
                <img
                    src="/hero.jpg"
                    alt="hero"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                />
            </section>

            {/* Panel phải: form card */}
            <section className="flex items-center justify-center p-6 lg:p-10">
                <div
                    className="w-full max-w-[520px] rounded-2xl p-8 shadow-2xl"
                    style={{
                        backgroundColor: cardBg,
                        boxShadow: "0 20px 60px rgba(0,0,0,.45)",
                    }}
                >
                    {/* Tabs Đăng nhập / Đăng ký (chuyển trang) */}
                    <div className="mb-6 flex items-center justify-center">
                        <div
                            className="inline-flex p-1 rounded-full"
                            style={{ backgroundColor: "#0b0d12", border: `1px solid ${border}` }}
                        >
                            <Link
                                href="/login"
                                className="px-5 py-2 text-sm rounded-full font-medium"
                                style={{ backgroundColor: primary, color: "white" }}
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/register"
                                className="px-5 py-2 text-sm rounded-full font-medium text-gray-300 hover:text-white"
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>

                    <h1 className="text-3xl font-semibold text-white text-center">
                        Chào mừng đến với Eduva!
                    </h1>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Eduva là nền tảng giáo dục trực tuyến hiện đại giúp bạn học nhanh và hiệu quả.
                    </p>

                    <form className="mt-8 space-y-5">
                        {/* Email */}
                        <label className="block">
                            <span className="mb-2 block text-sm text-gray-300">Email</span>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-gray-100 outline-none"
                                style={{
                                    border: `1px solid ${border}`,
                                    boxShadow: "inset 0 1px 0 rgba(255,255,255,.03)",
                                }}
                            />
                        </label>

                        {/* Password */}
                        <label className="block">
                            <span className="mb-2 block text-sm text-gray-300">Mật khẩu</span>
                            <div
                                className="relative rounded-full"
                                style={{ border: `1px solid ${border}` }}
                            >
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full rounded-full bg-transparent px-5 py-3 pr-16 text-sm text-gray-100 outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-200"
                                    aria-label="toggle password"
                                >
                                    {showPassword ? "Ẩn" : "Hiện"}
                                </button>
                            </div>
                        </label>

                        {/* Row: remember + forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="inline-flex items-center gap-2 text-gray-300">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-500 bg-transparent" />
                                Ghi nhớ tôi
                            </label>
                            <Link href="/forgot" className="text-blue-400 hover:underline">
                                Quên mật khẩu?
                            </Link>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-full py-3 text-sm font-semibold transition-colors"
                            style={{ backgroundColor: primary, color: "white" }}
                            onMouseDown={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = primaryHover;
                            }}
                            onMouseUp={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = primary;
                            }}
                        >
                            Đăng nhập
                        </button>

                        {/* Footer link */}
                        <p className="text-center text-sm text-gray-400">
                            Chưa có tài khoản?{" "}
                            <Link href="/register" className="text-blue-400 hover:underline">
                                Đăng ký
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
