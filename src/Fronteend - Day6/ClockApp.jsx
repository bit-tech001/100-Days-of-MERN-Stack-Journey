import { useEffect, useState } from "react";

const ClockApp = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const sec = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(sec);
  }, []);

  const today = new Date().toDateString();
  const progress = (time % 60) * (100 / 60); // progress bar

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CLOCK CARD */}
        <div className="rounded-2xl border border-black/10 bg-black text-white p-10 shadow-2xl flex flex-col justify-between">

          {/* Top Row */}
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Digital Clock
            </p>

            {/* Status Dots */}
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
            </div>
          </div>

          {/* Time */}
          <div className="mt-10">
            <h1 className="text-6xl font-mono font-semibold tracking-tight">
              {time}s
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              {today}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-10">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <p className="mt-3 text-xs text-gray-400">
              Time running since component mounted
            </p>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="rounded-2xl border border-black/10 bg-white p-10 shadow-xl">
          <h2 className="text-2xl font-semibold text-black mb-6">
            useEffect & Lifecycle
          </h2>

          <div className="space-y-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-black mb-1">What is useEffect?</h3>
              <p>React Hook used to handle side effects after render.</p>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-1">Why use useEffect?</h3>
              <p>To manage timers, API calls, and lifecycle behavior safely.</p>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-1">How it works?</h3>
              <p>Runs after render, controlled by dependencies, cleans on unmount.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClockApp;
