import { useState } from "react";

const FormValidationUI = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    setError("");
    alert("Form Submitted ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f0f0f] w-[350px] p-8 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.4)]"
      >
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h1>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Email Address
          </label>
          <input
            type="text"
            placeholder="example@email.com"
            className={`w-full px-4 py-2 rounded-lg bg-black text-white border outline-none transition
              ${
                error
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-700 focus:ring-2 focus:ring-indigo-500"
              }
            `}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition-all duration-300"
        >
          Submit
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Dark • Clean • Professional
        </p>
      </form>
    </div>
  );
};

export default FormValidationUI;
