"use client";
import React, { useState } from "react";
import Image from "next/image";

const OptimizedImage = ({ src, alt, className = "", fill = false, width, height, priority = false, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${fill ? "w-full h-full" : ""} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse transition-opacity duration-300 z-10" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${fill ? "object-cover" : ""} ${className}`}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
