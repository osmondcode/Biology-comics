"use client";
import React from "react";
import Home from "../src/mainComponents/Home.jsx";
import { useApp } from "./context/AppContext";

export default function Page() {
  const { isSlide, slideHandle, mail } = useApp();

  return (
    <div className="App bg-[--blackColor] w-full min-h-screen flex items-center justify-center">
      <h2 className="flex s:hidden text-[--whiteColor] text-[15px] text-center">
        This screen size is too small for this website!!
      </h2>
      <div className="w-full min-h-screen hidden s:flex items-center justify-center">
        <Home isSlide={isSlide} slideHandle={slideHandle} mail={mail} />
      </div>
    </div>
  );
}
