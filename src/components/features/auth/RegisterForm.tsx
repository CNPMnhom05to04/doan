"use client";

import { useState } from "react";
import Link from "next/link";
import { register as registerApi } from "@/api/auth";

const primary = "#1F2A7A";
const primaryHover = "#1a246a";

// regex
const PASS_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const USER_RULE = /^[a-zA-Z0-9._-]{5,}$/;

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);

    // form state
    const [username, setUsername] = useState("");
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

        if (!USER_RULE.test(username))
            return setErrorMsg("Tên đăng nhập không hợp lệ (≥5 ký tự, chỉ chữ/số/._-)");
        if (!/^\S+@\S+\.\S+$/.test(email))
            return setErrorMsg("Email không hợp lệ.");
        if (!PASS_RULE.test(password))
            return setErrorMsg("Mật khẩu phải ≥8 ký tự, có hoa, thường và số.");
        if (password !== confirm)
            return setErrorMsg("Mật khẩu xác nhận không khớp.");
        if (!agree)
            return setErrorMsg("Bạn cần đồng ý Điều khoản & Chính sách.");

        try {
            setLoading(true);
            const res = await registerApi({ username, email, password });
            setSuccessMsg("Tạo tài khoản thành công! Bạn có thể đăng nhập ngay.");
            console.log("Register OK:", res);
            setPassword("");
            setConfirm("");
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
            {/* Username */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-700">Tên đăng nhập</span>
                <input
                    type="text"
                    placeholder="admin_01"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full min-w-0 rounded-full bg-transparent px-5 py-3 text-sm text-gray-900 outline-none border border-gray-300"
                    required
                />
            </label>

            {/* Email */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-700">Email</span>
                <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full min-w-0 rounded-full bg-transparent px-5 py-3 text-sm text-gray-900 outline-none border border-gray-300"
                    required
                />
            </label>

            {/* Password */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-700">Mật khẩu</span>
                <div className="relative rounded-full border border-gray-300">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Ít nhất 8 ký tự, có hoa + thường + số"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full min-w-0 rounded-full bg-transparent px-5 py-3 pr-16 text-sm text-gray-900 outline-none"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? "Ẩn" : "Hiện"}
                    </button>
                </div>
            </label>

            {/* Confirm password */}
            <label className="block">
                <span className="mb-2 block text-sm text-gray-700">Xác nhận mật khẩu</span>
                <input
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="w-full min-w-0 rounded-full bg-transparent px-5 py-3 text-sm text-gray-900 outline-none border border-gray-300"
                    required
                />
            </label>

            {/* Terms */}
            <div className="grid grid-cols-[auto,1fr] gap-x-2 text-xs text-gray-600">
                <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-400"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                />
                <p>
                    Tôi đồng ý với{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                        Điều khoản
                    </Link>{" "}
                    và{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                        Chính sách quyền riêng tư
                    </Link>.
                </p>
            </div>

            {/* Error / Success */}
            {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
            {successMsg && <div className="text-green-600 text-sm">{successMsg}</div>}

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full py-3 text-sm font-semibold transition-colors disabled:opacity-60"
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
                {loading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
            </button>
        </form>
    );
}
