// app/(auth)/Register/page.tsx

import RegisterUdemy from "@/components/forms/RegisterForm";

export default function RegisterPage() {
    return (
        <main className="min-h-[100svh] grid place-items-center bg-gray-50 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center">Đăng ký</h1>

                    <RegisterUdemy />
                </div>
            </div>
        </main>
    );
}
