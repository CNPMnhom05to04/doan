"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * RegisterForm encapsulates the form fields and UI logic for user registration.
 * It includes name, email, password and confirm password fields with toggle visibility.
 * The terms and conditions checkbox is also included.
 */
const primary = "#1F2A7A";
const primaryHover = "#1a246a";
const border = "#2A2F3A";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <form className="mt-8 space-y-5">
            {/* Name */}
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

            {/* Password */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-300">Mật khẩu</span>
                <div
                    className="relative"
                    style={{ border: `1px solid ${border}`, borderRadius: "9999px" }}
                >
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

            {/* Confirm password */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-300">Xác nhận mật khẩu</span>
                <div
                    className="relative"
                    style={{ border: `1px solid ${border}`, borderRadius: "9999px" }}
                >
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

            {/* Terms and conditions */}
            <div className="grid grid-cols-[auto,1fr] gap-x-2 gap-y-1 text-xs text-gray-300">
                <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-500 bg-transparent"
                />
                <p className="leading-snug">
                    Tôi đồng ý với{" "}
                    <Link href="/terms" className="text-blue-400 hover:underline">
                        Điều khoản
                    </Link>{" "}
                    và{" "}
                    <Link href="/privacy" className="text-blue-400 hover:underline">
                        Chính sách quyền riêng tư
                    </Link>.
                </p>
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="w-full rounded-full py-3 text-sm font-semibold transition-colors"
                style={{ backgroundColor: primary, color: "white" }}
                onMouseDown={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    primaryHover)
                }
                onMouseUp={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    primary)
                }
            >
                Tạo tài khoản
            </button>
        </form>
    );
}
