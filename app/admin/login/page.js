"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdLogin, MdLockOutline, MdPersonOutline } from "react-icons/md";
import frappe from "@/src/services/frappe";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await frappe.login(username, password);
      // In a real app, we'd set a cookie/token here
      router.push("/admin");
    } catch (err) {
      setError("Invalid username or password. Hint: admin/admin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 text-white font-sans">
      <div className="w-full max-w-md bg-[#1a1a1a] border border-[#333] rounded-3xl p-10 shadow-2xl animate-in zoom-in duration-500">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold italic text-white flex items-center justify-center gap-2 mb-2">
            Biology <span className="text-[12px] bg-[--yellowColor] text-black px-2 py-1 rounded not-italic font-bold">Admin</span>
          </h1>
          <p className="text-gray-400 text-sm">Welcome back! Please login to manage your platform.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Username</label>
            <div className="relative">
              <MdPersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
              <input 
                type="text" 
                required
                className="w-full bg-[#222] border border-[#333] rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[--yellowColor] focus:ring-1 focus:ring-[--yellowColor] transition-all"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Password</label>
            <div className="relative">
              <MdLockOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
              <input 
                type="password" 
                required
                className="w-full bg-[#222] border border-[#333] rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[--yellowColor] focus:ring-1 focus:ring-[--yellowColor] transition-all"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[--yellowColor] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 mt-4"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
            ) : (
              <>
                <MdLogin className="text-xl" />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-xs text-gray-600">
            For development use: <span className="text-[--yellowColor]">admin</span> / <span className="text-[--yellowColor]">admin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
