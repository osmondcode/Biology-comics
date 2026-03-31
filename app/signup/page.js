"use client";
import React from "react";
import Login from "../../src/mainComponents/LogIn.jsx";
import { useApp } from "../context/AppContext";

export default function SignupPage() {
  const { onChangeMail, onChangeCode, emailVal, codeVal, stored } = useApp();

  return (
    <div className="App bg-[--blackColor] w-full min-h-screen flex items-center justify-center">
      <div className="w-full min-h-screen hidden s:flex items-center justify-center">
        <Login
          onChangeMail={onChangeMail}
          onChangeCode={onChangeCode}
          emailVal={emailVal}
          codeVal={codeVal}
          stored={stored}
        />
      </div>
    </div>
  );
}
