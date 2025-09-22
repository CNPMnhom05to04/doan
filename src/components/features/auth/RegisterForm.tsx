"use client";

import { useState } from "react";
import Link from "next/link";
import { register as registerApi } from "@/api/auth";

const primary = "#1F2A7A";
const primaryHover = "#1a246a";
const border = "#2A2F3A";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // form state
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [agree, setAgree] = useState(false);

    // ui state
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrorMsg(null);
        setSuccessMsg(null);

        if (!fullName.trim()) return setErrorMsg("Vui lòng nhập họ và tên.");
        if (!email.trim()) return setErrorMsg("Vui lòng nhập email.");
        if (!password) return setErrorMsg("Vui lòng nhập mật khẩu.");
        if (password.length < 6) return setErrorMsg("Mật khẩu tối thiểu 6 ký tự.");
        if (password !== confirm) return setErrorMsg("Mật khẩu xác nhận không khớp.");
        if (!agree) return setErrorMsg("Bạn cần đồng ý Điều khoản & Chính sách.");

        try {
            setLoading(true);
            // ⚠️ Đổi tên key cho khớp backend (name/fullName, email, password)
            const res = await registerApi({ fullName, email, password });
            setSuccessMsg("Tạo tài khoản thành công! Bạn có thể đăng nhập ngay.");
            // TODO: có thể tự chuyển tab sang “Đăng nhập” hoặc redirect
            console.log("Register OK:", res);
            // reset
            setPassword(""); setConfirm("");
        } catch (err: any) {
            const msg =
                err?.response?.data?.message ||
                err?.message ||
                "Đăng ký thất bại. Vui lòng thử lại.";
            setErrorMsg(msg);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-300">Họ và tên</span>
                <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-gray-100 outline-none"
                    style={{ border: `1px solid ${border}` }}
                    required
                />
            </label>

            {/* Email */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-300">Email</span>
                <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full bg-transparent px-5 py-3 text-sm text-gray-100 outline-none"
                    style={{ border: `1px solid ${border}` }}
                    required
                />
            </label>

            {/* Password */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-300">Mật khẩu</span>
                <div className="relative" style={{ border: `1px solid ${border}`, borderRadius: "9999px" }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Tối thiểu 6 ký tự"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-full bg-transparent px-5 py-3 pr-16 text-sm text-gray-100 outline-none"
                        required
                        minLength={6}
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
                <div className="relative" style={{ border: `1px solid ${border}`, borderRadius: "9999px" }}>
                    <input
                        type={showConfirm ? "text" : "password"}
                        placeholder="Nhập lại mật khẩu"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className="w-full rounded-full bg-transparent px-5 py-3 pr-16 text-sm text-gray-100 outline-none"
                        required
                        minLength={6}
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
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
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

            {/* Error / Success */}
            {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
            {successMsg && <div className="text-green-500 text-sm">{successMsg}</div>}

            {/* Submit button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full py-3 text-sm font-semibold transition-colors disabled:opacity-60"
                style={{ backgroundColor: primary, color: "white" }}
                onMouseDown={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = primaryHover)}
                onMouseUp={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = primary)}
            >
                {loading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
            </button>
        </form>
    );
}
