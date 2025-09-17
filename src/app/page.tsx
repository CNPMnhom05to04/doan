// src/app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
    // Tự động chuyển về /login
    redirect("/login");
    // hoặc bạn có thể return JSX tùy ý ở đây
}