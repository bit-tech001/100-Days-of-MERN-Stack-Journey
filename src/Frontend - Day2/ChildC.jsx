import React from "react";

const ChildC = (props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      
      <div className="bg-neutral-900 border border-neutral-800 
                      rounded-xl p-8 w-[90%] max-w-lg 
                      shadow-xl text-center">

        {/* Header */}
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome Day 2
        </h1>

        <p className="text-lg text-neutral-300 mb-6">
          {props.name}
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-3">
          <span className="px-4 py-1 rounded-full 
                           bg-neutral-800 text-neutral-300 
                           text-sm font-medium">
            Functional Component
          </span>

          <span className="px-4 py-1 rounded-full 
                           bg-neutral-800 text-neutral-300 
                           text-sm font-medium">
            Props Usage
          </span>
        </div>

      </div>
    </div>
  );
};

export default ChildC;
