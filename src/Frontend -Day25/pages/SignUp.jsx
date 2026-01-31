import React, { useContext, useRef, useState } from "react";
import "./paper.css";
import { DataContext } from "../../context/UserContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { serverUrl } = useContext(DataContext);
  const navigate = useNavigate();

  const defaultDp =
    "https://cdn-icons-png.flaticon.com/128/3940/3940417.png";

  const [uiImage, setUiImage] = useState(defaultDp);
  const [backendImage, setBackendImage] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const fileRef = useRef(null);

  // ✅ Image preview handler
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUiImage(URL.createObjectURL(file));
      setBackendImage(file);
    }
  };

  // ✅ Signup handler
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("password", password);

      if (backendImage) {
        formData.append("profileImage", backendImage);
      }

      const res = await axios.post(
        `${serverUrl}/api/signup`,
        formData,
        {
          withCredentials: true,
        }
      );

      console.log("Signup success:", res.data);

      // ✅ Redirect to login page after successful signup
      navigate("/login");

    } catch (error) {
      console.error(
        "Signup error:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="paper-bg w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-[400px] bg-white rounded-xl p-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">
          Create Account
        </h2>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            id="profileUpload"
            className="hidden"
            ref={fileRef}
            onChange={handleImage}
          />

          <label htmlFor="profileUpload" className="cursor-pointer mb-6">
            <img
              src={uiImage}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 hover:opacity-80 transition"
            />
          </label>
        </div>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="First Name"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Username"
            className="input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            className="font-semibold text-green-600 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
