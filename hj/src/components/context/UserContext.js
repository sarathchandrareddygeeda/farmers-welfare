import React, { createContext, useState, useEffect } from "react";
import Loading from "../Loading.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const checkLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/check-login", {
        method: "GET",
        credentials: "include", 
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }else{
        const errorData = await response.json();
        console.log(errorData.msg);
      }
    } catch (error) {
      console.error("Error checking login:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (loading) {
    return <div>{<Loading />}</div>; // Optional: Replace with a loader component
  }


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
