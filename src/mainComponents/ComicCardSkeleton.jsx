"use client";
import React from "react";

const ComicCardSkeleton = ({ variant = "vertical" }) => {
  if (variant === "horizontal") {
    return (
      <div className="w-[280px] h-[130px] flex items-start justify-start bg-gray-200 p-2 gap-2 animate-pulse rounded relative">
        <div className="w-[35%] h-full bg-gray-300 rounded" />
        <div className="w-[64%] h-full flex flex-col items-start justify-between py-1">
          <div className="w-full h-4 bg-gray-300 rounded" />
          <div className="w-1/2 h-3 bg-gray-300 rounded mt-1" />
          <div className="w-1/3 h-4 bg-gray-300 rounded mt-auto" />
        </div>
        <div className="w-12 h-8 bg-gray-300 rounded absolute bottom-2 right-2" />
      </div>
    );
  }

  return (
    <div className="w-[220px] h-[350px] flex flex-col items-start justify-start bg-gray-200 p-2 animate-pulse rounded">
      <div className="w-full h-[60%] bg-gray-300 rounded" />
      <div className="w-full h-5 bg-gray-300 rounded mt-3" />
      <div className="w-2/3 h-4 bg-gray-300 rounded mt-2" />
      <div className="w-full h-3 bg-gray-300 rounded mt-4" />
      <div className="w-full flex justify-between mt-auto pb-2">
        <div className="w-16 h-8 bg-gray-300 rounded" />
        <div className="w-20 h-8 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default ComicCardSkeleton;
