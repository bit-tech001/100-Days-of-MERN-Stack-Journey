import React, { useState, useContext, useEffect } from "react";
import "./paper.css";
import { DataContext } from "../../context/UserContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { serverUrl, userData, setUserData, getUserdata } =
    useContext(DataContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${serverUrl}/api/login`,
        { email, password },
        { withCredentials: true }
      );

      setUserData(res.data);   // ✅ FIX
      await getUserdata();     // fetch full user
      navigate("/home");       // ✅ DIRECT REDIRECT

    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="paper-bg w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-[380px] bg-white rounded-xl p-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-black text-white py-2 rounded-lg">
            Login
          </button>
        </form>

        <p
          className="text-center text-sm text-gray-600 mt-4 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Don’t have an account?{" "}
          <span className="font-semibold text-green-600">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
