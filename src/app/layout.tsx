import type { Metadata } from "next";
import "../styles/globals.css"; // đổi path đúng với project của bạn

export const metadata: Metadata = {
    title: "Eduva",
    description: "Eduva LMS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body>{children}</body>
        </html>
    );
}
