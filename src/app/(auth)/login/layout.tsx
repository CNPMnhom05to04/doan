import Image from "next/image";
import type { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Left side with background image + overlay */}
      <div className="relative w-1/2 hidden md:block">
        {/* Image */}
        <Image
          src="/login-bg.png"
          alt="Eduva"
          fill
          className="object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2F327D] opacity-30 z-10" />
      </div>

      {/* Right side with login form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-white relative z-20">
        {children}
      </div>
    </div>
  );
}
