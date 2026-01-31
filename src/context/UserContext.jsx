import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const serverUrl = "http://localhost:8000";

  const getUserdata = async () => {
    try {
      const { data } = await axios.get(
        `${serverUrl}/api/getuserdata`,
        { withCredentials: true }
      );
      setUserData(data);
    } catch (error) {
      console.error("Get user data error:", error);
      setUserData(null);
    }
  };

  useEffect(() => {
    getUserdata(); // ✅ FIXED
  }, []);

  return (
    <DataContext.Provider
      value={{
        serverUrl,
        userData,
        setUserData,
        getUserdata,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;
