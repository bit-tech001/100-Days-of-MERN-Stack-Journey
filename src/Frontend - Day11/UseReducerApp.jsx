import { useReducer, useMemo } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 🔥 Expensive calculation (simulated)
  const isEven = useMemo(() => {
    console.log("Calculating...");
    let i = 0;
    while (i < 1_000_000_000) i++;
    return state.count % 2 === 0;
  }, [state.count]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[360px] p-8 rounded-2xl border border-gray-200 shadow-sm">
        
        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          useReducer + useMemo
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1 mb-8">
          Optimized React state management
        </p>

        {/* Counter */}
        <div className="text-5xl font-bold text-gray-900 text-center mb-2">
          {state.count}
        </div>

        {/* Derived State */}
        <p className="text-center text-sm mb-8">
          Number is{" "}
          <span className="font-semibold text-black">
            {isEven ? "Even" : "Odd"}
          </span>
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-5">
          <button
            onClick={() => dispatch({ type: "DEC" })}
            className="flex-1 py-3 rounded-xl border border-gray-300
                       text-gray-700 font-medium
                       hover:bg-gray-100 transition"
          >
            Decrease
          </button>

          <button
            onClick={() => dispatch({ type: "INC" })}
            className="flex-1 py-3 rounded-xl bg-black
                       text-white font-medium
                       hover:bg-gray-800 transition"
          >
            Increase
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="w-full py-3 rounded-xl border border-gray-300
                     text-gray-700 hover:bg-gray-100 transition"
        >
          Reset Counter
        </button>

        <p className="text-xs text-gray-400 text-center mt-6">
          Performance optimized using useMemo
        </p>
      </div>
    </div>
  );
}
