import { createContext, useState } from "react";

 const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [message, setMessage] = useState("Hello");

  return (
    <MyContext.Provider value={{ message, setMessage }}>
      {children}
    </MyContext.Provider>
  );
};

export {MyContext ,MyProvider};
