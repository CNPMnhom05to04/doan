// app/(auth)/login/page.tsx
import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
    return (
        <main className="min-h-[100svh] grid place-items-center bg-gray-50 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center">Đăng nhập</h1>
                    <p className="text-sm text-gray-500 text-center mt-2">Dùng email và mật khẩu để tiếp tục</p>
                    <LoginForm className="mt-6" />
                </div>
            </div>
        </main>
    );
}
