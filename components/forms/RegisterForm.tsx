"use client";
import * as React from "react";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ---- Schema (Zod) ----
const RegisterSchema = z
    .object({
        fullName: z.string().min(2, "Họ tên tối thiểu 2 ký tự"),
        email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
        password: z
            .string()
            .min(6, "Mật khẩu tối thiểu 6 ký tự")
            .max(72, "Mật khẩu tối đa 72 ký tự"),
        confirmPassword: z.string().min(1, "Vui lòng nhập xác nhận mật khẩu"),
        agree: z.boolean().refine((v) => v === true, {
            message: "Bạn cần đồng ý với Điều khoản và Chính sách",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Mật khẩu xác nhận không khớp",
        path: ["confirmPassword"],
    });

type RegisterValues = z.infer<typeof RegisterSchema>;

// ---- Helper: Social button ----
function SocialButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}
/*
// ---- Icons (unstyled inline SVGs) ----
const GoogleIcon = (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" focusable="false">
        <path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.5-5.1 3.5-3.1 0-5.7-2.6-5.7-5.8S8.9 5.7 12 5.7c1.8 0 3 .8 3.7 1.6l2.5-2.4C17 3.4 14.7 2.5 12 2.5 6.9 2.5 2.7 6.7 2.7 11.9S6.9 21.3 12 21.3c6.4 0 9.3-4.5 9.3-8.4 0-.6-.1-1.1-.2-1.6H12z" />
    </svg>
);

const AppleIcon = (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" focusable="false">
        <path fill="currentColor" d="M19.67 16.12c-.35.81-.77 1.56-1.26 2.26-.66.95-1.42 1.43-2.28 1.43-.49 0-1.08-.14-1.76-.43-.68-.29-1.28-.43-1.79-.43-.55 0-1.17.14-1.86.43-.69.29-1.25.44-1.69.44-.91 0-1.7-.49-2.37-1.47-.51-.7-.94-1.5-1.28-2.41-.39-1.03-.58-2.03-.58-3 0-1.11.24-2.06.73-2.85.38-.64.88-1.15 1.5-1.52.62-.37 1.28-.56 1.98-.58.49 0 1.13.16 1.9.47.77.31 1.27.47 1.51.47.19 0 .73-.18 1.63-.53.88-.33 1.62-.47 2.22-.41 1.63.13 2.86.78 3.69 1.95-1.47.9-2.2 2.16-2.2 3.79 0 1.26.47 2.31 1.41 3.15.42.38.9.68 1.44.91-.12.33-.25.66-.41.98zM15.98 2.86c0 .83-.3 1.6-.89 2.29-.72.84-1.58 1.33-2.53 1.25a2.6 2.6 0 0 1-.02-.32c0-.79.34-1.63.95-2.31.3-.35.68-.64 1.14-.86.46-.22.9-.34 1.31-.35.03.1.04.2.04.3z" />
    </svg>
);
*/
// ---- Main Component ----
export default function RegisterUdemy() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [formError, setFormError] = React.useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<RegisterValues>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: { agree: false },
    });

    const onSubmit = async (values: RegisterValues) => {
        setFormError(null);
        try {
            // Mock API call
            await new Promise((r) => setTimeout(r, 900));
            if (values.email === "exists@example.com") throw new Error("Email đã được sử dụng");
            alert("Tạo tài khoản thành công!");
            // TODO: dùng useRouter().push("/welcome") để điều hướng
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : "Đăng ký thất bại";
            setFormError(message);
        }
    };

    //  const handleGoogle = () => alert("Giả lập đăng ký qua Google");
    //const handleApple = () => alert("Giả lập đăng ký qua Apple");

    return (
        <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header / Brand */}
                <div className="mb-6 flex items-center justify-center">
                    <Link href="/" className="inline-flex items-center gap-2" aria-label="Go to homepage">
                        <div className="rounded bg-gray-900 px-2 py-1 text-white text-sm font-bold tracking-wide">U</div>
                        <span className="text-xl font-semibold text-gray-900">doan</span>
                    </Link>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    {/*    <h1 className="mb-2 text-2xl font-bold center text-gray-900">Tạo tài khoản</h1>
                    <p className="mb-4 text-sm text-gray-600">Tham gia để khám phá hàng ngàn khoá học.</p>
              */}
                    {/* Social sign-up */}
                    {/*                 <div className="grid gap-3">
                        <SocialButton icon={GoogleIcon} label="Tiếp tục với Google" onClick={handleGoogle} />
                        <SocialButton icon={AppleIcon} label="Tiếp tục với Apple" onClick={handleApple} />
                    </div>
   */}
                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="h-px flex-1 bg-gray-200" />
                        {// <span className="px-3 text-xs uppercase tracking-wide text-gray-500">hoặc</span>
                        }
                        {// <div className="h-px flex-1 bg-gray-200" />
                        }
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-busy={isSubmitting} className="grid gap-4">
                        {/* Global error */}
                        {formError && (
                            <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                                {formError}
                            </div>
                        )}

                        {/* Full name */}
                        <div className="grid gap-1.5">
                            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Họ và tên</label>
                            <input
                                id="fullName"
                                type="text"
                                autoComplete="name"
                                placeholder="Nguyễn Văn A"
                                className={`block w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm ${errors.fullName
                                    ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20"
                                    }`}
                                {...register("fullName")}
                                aria-invalid={!!errors.fullName}
                                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                disabled={isSubmitting}
                            />
                            {errors.fullName && (
                                <p id="fullName-error" className="text-xs text-red-600" role="alert">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="grid gap-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                className={`block w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm ${errors.email
                                    ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20"
                                    }`}
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
                        <div className="grid gap-1.5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Mật khẩu</label>
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
                                autoComplete="new-password"
                                placeholder="Tối thiểu 6 ký tự"
                                className={`block w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm ${errors.password
                                    ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20"
                                    }`}
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
                            <p className="text-[11px] text-gray-500">Gợi ý: dùng ít nhất 6 ký tự, kết hợp chữ và số.</p>
                        </div>

                        {/* Confirm Password */}
                        <div className="grid gap-1.5">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                            <input
                                id="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Nhập lại mật khẩu"
                                className={`block w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm ${errors.confirmPassword
                                    ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20"
                                    }`}
                                {...register("confirmPassword")}
                                aria-invalid={!!errors.confirmPassword}
                                aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                                disabled={isSubmitting}
                            />
                            {errors.confirmPassword && (
                                <p id="confirmPassword-error" className="text-xs text-red-600" role="alert">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-2">
                            <input
                                id="agree"
                                type="checkbox"
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                                {...register("agree")}
                                onChange={(e) => setValue("agree", e.target.checked)}
                                disabled={isSubmitting}
                            />
                            <label htmlFor="agree" className="text-sm text-gray-700">
                                Tôi đồng ý với <Link href="/terms" className="underline">Điều khoản</Link> và <Link href="/privacy" className="underline">Chính sách quyền riêng tư</Link>.
                            </label>
                        </div>
                        {errors.agree && (
                            <p className="-mt-2 text-xs text-red-600" role="alert">{errors.agree.message}</p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-1 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting && (
                                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                            )}
                            Tạo tài khoản
                        </button>

                        {/* reCAPTCHA note (giống Udemy) */}
                        <p className="mt-1 text-center text-[11px] leading-4 text-gray-500">
                            Trang này được bảo vệ bởi reCAPTCHA và tuân theo
                            {" "}
                            <Link href="/privacy" className="underline">Chính sách quyền riêng tư</Link>
                            {" "}
                            và
                            {" "}
                            <Link href="/terms" className="underline">Điều khoản dịch vụ</Link>
                            {" "}của Google.
                        </p>
                    </form>
                </div>

                {/* Footer CTA */}
                <div className="mt-4 text-center text-sm text-gray-700">
                    Đã có tài khoản? {" "}
                    <Link href="/login" className="text-blue-600 hover:underline">Đăng nhập</Link>
                </div>
            </div>
        </div >
    );
}
