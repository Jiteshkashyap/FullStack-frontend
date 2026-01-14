import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
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
      await axios.post(
        "http://localhost:5000/api/auth/register",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-600 to-teal-400 px-4">
      <div className="w-full max-w-sm bg-slate-800 rounded-xl shadow-2xl p-6 sm:p-8 relative">

        {/* Top Button */}
        <button
          type="button"
          className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-b from-teal-600 to-teal-400 text-white px-10 py-3 rounded-md font-semibold shadow-md text-lg"
        >
          SIGN UP
        </button>

        {/* Avatar */}
        <div className="flex justify-center mt-6">
          <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center">
            <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
            </svg>
          </div>
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center mt-4">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          {/* NAME */}
          <div className="flex items-center bg-slate-700 rounded-md px-4 py-3">
            <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
            </svg>
            <span className="mx-3 h-5 w-px bg-slate-500"></span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="flex-1 bg-transparent text-white placeholder-slate-400 focus:outline-none"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="flex items-center bg-slate-700 rounded-md px-4 py-3">
            <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="mx-3 h-5 w-px bg-slate-500"></span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="flex-1 bg-transparent text-white placeholder-slate-400 focus:outline-none"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="flex items-center bg-slate-700 rounded-md px-4 py-3">
            <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 9h-1V7a4 4 0 00-8 0v2H7a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2v-9a2 2 0 00-2-2z" />
            </svg>
            <span className="mx-3 h-5 w-px bg-slate-500"></span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="flex-1 bg-transparent text-white placeholder-slate-400 focus:outline-none"
              required
            />
          </div>

          {/* DOB */}
          <div className="flex items-center bg-slate-700 rounded-md px-4 py-3">
            <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10h5v5H7z" />
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V9h14v11z" />
            </svg>
            <span className="mx-3 h-5 w-px bg-slate-500"></span>
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              className="flex-1 bg-transparent text-white focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-gradient-to-b from-teal-600 to-teal-400 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            {loading ? "Registering..." : "REGISTER"}
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          Already registered?{" "}
          <Link to="/" className="text-cyan-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
