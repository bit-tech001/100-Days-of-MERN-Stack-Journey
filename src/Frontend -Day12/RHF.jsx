import { useForm } from "react-hook-form";

const RHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Form Submitted ✅\nEmail: ${data.email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]">
      
      {/* Ambient Glow */}
      <div className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl -translate-x-40 -translate-y-20"></div>
      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl translate-x-40 translate-y-20"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 w-[370px] p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-[0_0_40px_rgba(56,189,248,0.3)]"
      >
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-1">
          Sign In
        </h1>
        <p className="text-gray-300 text-sm text-center mb-8">
          Access your workspace
        </p>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">
            Email Address
          </label>

          <input
            type="text"
            placeholder="you@example.com"
            className={`w-full px-4 py-2.5 rounded-lg bg-black/40 text-white 
            border outline-none transition-all
            ${
              errors.email
                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                : "border-white/30 focus:ring-2 focus:ring-cyan-400"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-400 text-xs mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white
          bg-gradient-to-r from-cyan-500 to-purple-500
          hover:scale-[1.02] transition-transform duration-300"
        >
          Continue
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-300 mt-6">
          Modern • Secure • Fast
        </p>
      </form>
    </div>
  );
};

export default RHF;
*-+