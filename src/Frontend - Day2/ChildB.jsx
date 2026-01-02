import React from "react";

const ChildB = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div
        className="relative bg-neutral-900 border border-neutral-800 
                      rounded-xl p-7 w-[90%] max-w-sm shadow-lg"
      >
        {/* Badge */}
        <span
          className="absolute -top-3 left-5 bg-emerald-500 
                         text-black text-xs font-semibold px-3 py-1 
                         rounded-full"
        >
          Child Component
        </span>

        <h1 className="text-2xl font-semibold text-white mb-2">ChildB</h1>

        <p className="text-neutral-400 text-sm mb-5">
          This component demonstrates a minimal dark UI using Tailwind CSS.
        </p>

        <div className="flex gap-3">
          <button
            className="flex-1 py-2 rounded-lg bg-emerald-600 
                             hover:bg-emerald-700 text-white 
                             transition duration-300"
          >
            Action
          </button>

          <button
            className="flex-1 py-2 rounded-lg border 
                             border-emerald-500 text-emerald-400 
                             hover:bg-emerald-500 hover:text-black 
                             transition duration-300"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildB;
