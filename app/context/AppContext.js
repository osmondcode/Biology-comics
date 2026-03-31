"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isSlide, setIsSlide] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const [codeVal, setCodeVal] = useState("");
  const [mail, setMail] = useState(null);

  const slideHandle = () => {
    setIsSlide(!isSlide);
  };

  const onChangeMail = (e) => {
    setEmailVal(e.target.value);
  };

  const onChangeCode = (e) => {
    setCodeVal(e.target.value);
  };

  const stored = () => {
    localStorage.setItem("email", emailVal);
    localStorage.setItem("code", codeVal);
    setMail(emailVal); // Update local state too
  };

  useEffect(() => {
    setMail(localStorage.getItem("email"));
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSlide,
        setIsSlide,
        slideHandle,
        emailVal,
        setEmailVal,
        codeVal,
        setCodeVal,
        mail,
        onChangeMail,
        onChangeCode,
        stored,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
