const Sheared = ({ value, data }) => {
  return (
    <div className="mt-6 w-full max-w-md bg-white rounded-2xl shadow-lg p-6 border">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm uppercase tracking-wider text-red-500">
          Live Preview
        </h3>

        <button
          onClick={() => data("")}
          className="text-xs px-3 py-1 rounded-full 
                     bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
        >
          Clear
        </button>
      </div>

      {/* Centered Content */}
      <div className="h-32 bg-gray-50 rounded-xl flex items-center justify-center">
        <span className="text-2xl font-semibold text-black">
          {value || "—"}
        </span>
      </div>
    </div>
  );
};

export default Sheared;
