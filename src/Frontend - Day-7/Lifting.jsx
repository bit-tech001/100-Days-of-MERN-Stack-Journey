import { useState } from "react";
import InputBox from "./InputBox";
import Sheared from "./Sheared";

const Lifting = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      
      {/* Centered Wrapper */}
      <div className="flex flex-col items-center gap-6 w-full px-4">
        
        <InputBox onChangeValue ={setText} />
        
        <Sheared value={text} data={setText} />

      </div>
    </div>
  );
};

export default Lifting;
