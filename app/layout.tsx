// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "DoAn | Login",
    description: "Login screen with TS + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body className="bg-white text-gray-900">
                {children}
            </body>
        </html>
    );
}
