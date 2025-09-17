"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import RegisterForm from "./RegisterForm"; // import component đăng ký ở cùng folder

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg">
      {/* Title */}
      <h2 className="text-xl font-medium text-center text-black">
        Chào mừng đến với Eduva!
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-2">
        <button
          onClick={() => setActiveTab("login")}
          className={`px-6 py-2 rounded-full font-medium transition ${activeTab === "login"
            ? "bg-[#2F327D] text-white"
            : "bg-black text-white"
            }`}
        >
          Đăng nhập
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`px-6 py-2 rounded-full font-medium transition ${activeTab === "register"
            ? "bg-[#2F327D] text-white"
            : "bg-black text-white"
            }`}
        >
          Đăng ký
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-black text-center">
        Eduva là nền tảng giáo dục trực tuyến hiện đại giúp mỗi cá nhân có thể học nhanh và hiệu quả hơn.
      </p>

      {/* Nội dung: login hoặc register */}
      {activeTab === "login" ? (
        <form className="space-y-4">
          <label className="block mb-1 text-sm font-medium text-black">
            Tài khoản
          </label>
          <Input
            placeholder="Nhập tên tài khoản"
            className="text-[#ACACAC]"
          />

          <div>
            <label className="block mb-1 text-sm font-medium text-black">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-[#ACACAC] focus:outline-none focus:ring-2 focus:ring-[#2F327D]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-black"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-black">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Ghi nhớ cho lần sau</span>
            </label>
            <a href="#" className="text-[#2F327D] hover:underline">
              Bạn quên mật khẩu?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#2F327D] text-white hover:opacity-90"
          >
            Đăng nhập
          </Button>
        </form>
      ) : (
        // Khi activeTab === "register", hiển thị component đăng ký
        <RegisterForm />
      )}
    </div>
  );
}
