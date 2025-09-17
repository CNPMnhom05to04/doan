"use client";

import RegisterForm from "../../../components/features/auth/RegisterForm";
import Link from "next/link";

/**
 * RegisterPage renders the registration card with tabs and a welcome message.
 * It imports RegisterForm to handle the form inputs and submit logic.
 */
const primary = "#1F2A7A";
const cardBg = "#16181D";
const border = "#2A2F3A";

export default function RegisterPage() {
    return (
        <section className="flex items-center justify-center p-6 lg:p-10">
            <div
                className="relative z-10 w-full max-w-[520px] rounded-2xl p-8 shadow-2xl"
                style={{
                    backgroundColor: cardBg,
                    boxShadow: "0 20px 60px rgba(0,0,0,.45)",
                }}
            >
                {/* Tab selector: highlight "Đăng ký" */}
                <div className="mb-6 flex items-center justify-center">
                    <div
                        className="inline-flex p-1 rounded-full"
                        style={{
                            backgroundColor: "#0b0d12",
                            border: `1px solid ${border}`,
                        }}
                    >
                        <Link
                            href="/login"
                            className="px-5 py-2 text-sm rounded-full font-medium text-gray-300 hover:text-white"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            href="/register"
                            className="px-5 py-2 text-sm rounded-full font-medium"
                            style={{ backgroundColor: primary, color: "white" }}
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-semibold text-white text-center">
                    Chào mừng đến với Eduva!
                </h1>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Hãy tạo tài khoản để bắt đầu học tập cùng chúng tôi.
                </p>

                {/* Registration form */}
                <RegisterForm />

                {/* Footer link to login */}
                <p className="text-center text-sm text-gray-400 mt-5">
                    Đã có tài khoản?{" "}
                    <Link href="/login" className="text-blue-400 hover:underline">
                        Đăng nhập
                    </Link>
                </p>
            </div>
        </section>
    );
}
