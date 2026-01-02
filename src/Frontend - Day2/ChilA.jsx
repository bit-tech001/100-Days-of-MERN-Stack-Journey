import React from "react";

const ChildA = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div
        className="relative bg-slate-800 border border-slate-700 
                   rounded-2xl p-8 w-[90%] max-w-md shadow-xl"
      >
        {/* Top Badge */}
        <span
          className="absolute -top-3 left-6 px-4 py-1 text-xs font-semibold 
                     bg-blue-600 text-white rounded-full"
        >
          Child Component
        </span>

        <h1 className="text-2xl font-semibold text-white mb-2">
          ChildA Component
        </h1>

        <p className="text-slate-300 text-sm mb-6">
          A reusable React functional component built with Tailwind CSS.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6 ">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-700">
            <p className="text-xs text-slate-400">Concept</p>
            <p className="text-white font-medium">Functional UI</p>
          </div>

        
        </div>

        {/* CTA */}
        <button
          className="w-full py-2.5 rounded-xl 
                     bg-blue-600 text-white font-medium
                     hover:bg-blue-700 transition duration-300"
        >
          View Component
        </button>
      </div>
    </div>
  );
};

export default ChildA;
