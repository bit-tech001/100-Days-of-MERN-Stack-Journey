import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-neutral-900 border border-neutral-800 
                      rounded-2xl shadow-xl p-6 md:p-10">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE – Counter UI */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-semibold text-white mb-1">
              useState Counter
            </h2>
            <p className="text-neutral-400 mb-6">
              Single state management example
            </p>

            <div className="text-6xl font-bold text-emerald-400 mb-8">
              {count}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCount(count - 1)}
                className="px-6 py-2 rounded-xl 
                           bg-neutral-800 text-white 
                           hover:bg-neutral-700 transition"
              >
                Decrease
              </button>

              <button
                onClick={() => setCount(0)}
                className="px-6 py-2 rounded-xl 
                           border border-emerald-500 
                           text-emerald-400 
                           hover:bg-emerald-500 hover:text-black 
                           transition"
              >
                Reset
              </button>

              <button
                onClick={() => setCount(count + 1)}
                className="px-6 py-2 rounded-xl 
                           bg-emerald-600 text-black 
                           hover:bg-emerald-500 transition"
              >
                Increase
              </button>
            </div>
          </div>

          {/* RIGHT SIDE – Explanation */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">
              What is useState?
            </h2>
            <p className="text-neutral-400">
              useState is a React Hook that allows functional components to store
              and manage data that changes over time. Updating state triggers
              a re-render of the UI.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Why use useState?
            </h2>
            <p className="text-neutral-400">
              It helps manage dynamic data such as counters, inputs, and toggles,
              enabling interactive user experiences without page reloads.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              How does useState work?
            </h2>
            <p className="text-neutral-400">
              useState returns the current state value and a setter function.
              Calling the setter updates the state and automatically updates
              the UI.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Important Rule
            </h2>
            <p className="text-neutral-400">
              State should never be modified directly. Always use the setter
              function to ensure React handles updates correctly.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CounterApp;
