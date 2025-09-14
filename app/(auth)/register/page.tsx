// app/(auth)/login/page.tsx
"use client";

import Link from "next/link";
import * as React from "react";

const primary = "#1F2A7A";
const primaryHover = "#1a246a";
const pageBg = "#0F1115";
const cardBg = "#16181D";
const border = "#2A2F3A";

export default function LoginNowRegisterPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirm, setShowConfirm] = React.useState(false);

    return (
        <main
            className="min-h-[100svh] w-full grid lg:grid-cols-2"
            style={{ backgroundColor: pageBg }}
        >
            {/* Panel trái: ảnh hero */}
            <section className="hidden lg:block relative">
                <img
                    src="/hero.jpg"
                    alt="hero"
                    className="absolute inset-0 h-full w-full object-cover opacity-80 pointer-events-none z-0"
                />
            </section>

            {/* Panel phải: card ĐĂNG KÝ */}
            <section className="flex items-center justify-center p-6 lg:p-10">
                <div
                    className="relative z-10 w-full max-w-[520px] rounded-2xl p-8 shadow-2xl"
                    style={{ backgroundColor: cardBg, boxShadow: "0 20px 60px rgba(0,0,0,.45)" }}
                >
                    {/* Tabs: tô sáng Đăng ký (vì đây là trang đăng ký) */}
                    <div className="mb-6 flex items-center justify-center">
                        <div
                            className="inline-flex p-1 rounded-full"
                            style={{ backgroundColor: "#0b0d12", border: `1px solid ${border}` }}
                        >
                            <Link
                                href="/login"
                                className="px-5 py-2 text-sm rounded-full font-medium text-gray-300 hover:text-white"
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/login" // vẫn là /login nhưng hiện giao diện đăng ký theo yêu cầu
                                className="px-5 py-2 text-sm rounded-full font-medium"
                                style={{ backgroundColor: primary, color: "white" }}
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>

                    <h1 className="text-3xl font-semibold text-white text-center">
                        Chào mừng đến với Eduva!
                    </h1>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Hãy tạo tài khoản để bắt đầu học tập cùng chúng tôi.
                    </p>

                    <form className="mt-8 space-y-5">
                        {/* Họ và tên */}
                        <label className="block">
                            <span className="mb-2 block text-sm text-gray-300">Họ và tên</span>
                            <input
                                type="text"
                                placeholder="Nguyễn Văn A"
                                className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-gray-100 outline-none"
                                style={{ border: `1px solid ${border}` }}
                            />
                        </label>

                        {/* Email */}
                        <label className="block">
                            <span className="mb-2 block text-sm text-gray-300">Email</span>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-gray-100 outline-none"
                                style={{ border: `1px solid ${border}` }}
                            />
                        </label>

                        {/* Mật khẩu */}
                        <label className="block">
                            <span className="mb-2 block text-sm text-gray-300">Mật khẩu</span>
                            <div className="relative" style={{ border: `1px solid ${border}`, borderRadius: "9999px" }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Tối thiểu 6 ký tự"
                                    className="w-full rounded-full bg-transparent px-5 py-3 pr-16 text-sm text-gray-100 outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-200"
                                >
                                    {showPassword ? "Ẩn" : "Hiện"}
                                </button>
                            </div>
                        </label>

                        {/* Xác nhận mật khẩu */}
                        <label className="block">
                            <span className="mb-2 block text-sm text-gray-300">Xác nhận mật khẩu</span>
                            <div className="relative" style={{ border: `1px solid ${border}`, borderRadius: "9999px" }}>
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    placeholder="Nhập lại mật khẩu"
                                    className="w-full rounded-full bg-transparent px-5 py-3 pr-16 text-sm text-gray-100 outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm((s) => !s)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-200"
                                >
                                    {showConfirm ? "Ẩn" : "Hiện"}
                                </button>
                            </div>
                        </label>

                        {/* Điều khoản */}
                        <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-1 text-xs text-gray-300">
                            <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 rounded border-gray-500 bg-transparent"
                            />
                            <p className="leading-snug">
                                Tôi đồng ý với <Link href="/terms" className="text-blue-400 hover:underline">Điều khoản</Link> và
                                <Link href="/privacy" className="text-blue-400 hover:underline"> Chính sách quyền riêng tư</Link>.
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full rounded-full py-3 text-sm font-semibold transition-colors"
                            style={{ backgroundColor: primary, color: "white" }}
                            onMouseDown={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = primaryHover)}
                            onMouseUp={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = primary)}
                        >
                            Tạo tài khoản
                        </button>

                        {/* Footer */}
                        <p className="text-center text-sm text-gray-400">
                            Đã có tài khoản?{" "}
                            <Link href="/login" className="text-blue-400 hover:underline">
                                Đăng nhập
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
