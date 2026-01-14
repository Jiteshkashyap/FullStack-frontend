import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/users");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-600 to-teal-400">
      <div className="relative w-[400px] bg-[#1f2d3d] rounded-2xl shadow-2xl overflow-visible">

        {/* SIGN IN BUTTON */}
        <button
          type="button"
          className="absolute -top-7 left-1/2 -translate-x-1/2 
          bg-gradient-to-b from-teal-600 to-teal-400 
          text-white px-10 py-3 rounded-md 
          font-semibold shadow-md text-lg z-20"
        >
          SIGN IN
        </button>

        {/* TOP DESIGN SECTION */}
        <div className="relative h-40 bg-[#2c3a4b]">
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[#334155] rounded-t-full opacity-60"></div>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-[#475569] rounded-t-full opacity-40"></div>

          {/* AVATAR */}
          <div className="absolute left-1/2 top-[100px] -translate-x-1/2 z-20">
            <div className="w-24 h-24 rounded-full border-4 border-[#475569] bg-[#2c3a4b] flex items-center justify-center">
              <svg
                className="w-12 h-12 text-slate-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="px-6 py-14 space-y-5">
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* EMAIL */}
          <div className="flex items-center bg-[#334155] rounded-md px-4 py-3">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
            </svg>

            <span className="mx-3 h-5 w-px bg-slate-500"></span>

            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              required
              className="flex-1 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="flex items-center bg-[#334155] rounded-md px-4 py-3">
            <svg
              className="w-5 h-5 text-slate-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 9h-1V7a4 4 0 00-8 0v2H7a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2v-9a2 2 0 00-2-2z" />
            </svg>

            <span className="mx-3 h-5 w-px bg-slate-500"></span>

            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              required
              className="flex-1 bg-transparent text-slate-200 placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex justify-between items-center text-sm text-slate-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-[#00d1c1] hover:underline"
            >
              Forgot your password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00d1c1] text-white py-3 rounded-md font-semibold text-lg"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>

          <p className="text-center text-sm text-slate-300">
            Not registered?{" "}
            <Link to="/register" className="text-[#00d1c1] hover:underline">
              Register first
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
