"use client";
import React from "react";
import Item from "../../src/mainComponents/Product/ItemPage.jsx";
import { useApp } from "../context/AppContext";

export default function ItemPage() {
  const { isSlide, slideHandle, mail } = useApp();

  return (
    <div className="App bg-[--blackColor] w-full min-h-screen flex items-center justify-center">
      <div className="w-full min-h-screen hidden s:flex items-center justify-center">
        <Item isSlide={isSlide} slideHandle={slideHandle} mail={mail} />
      </div>
    </div>
  );
}
