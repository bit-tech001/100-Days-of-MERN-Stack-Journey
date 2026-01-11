import { useContext } from "react";
import { MyContext } from "./Mycontext";




const Child = () => {
  const { message, setMessage } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center justify-center text-center gap-6">
      <p className="text-lg font-semibold text-gray-700">
        {message}
      </p>

      <button
        onClick={() => setMessage("Context Working ✅")}
        className="
          px-6 py-2
          rounded-xl
          text-white
          font-semibold
          bg-gradient-to-r from-indigo-500 to-purple-600
          hover:scale-105 hover:shadow-xl
          transition-all duration-300
        "
      >
        Change Text
      </button>
    </div>
  );
};

export default Child;
