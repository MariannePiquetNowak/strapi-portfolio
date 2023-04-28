import React, { useEffect, useState } from "react";

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    const body = document.querySelector("body");
    setTimeout(() => {
      body.style.overflowY = "scroll";
      loader.classList.add("hidden");
    }, 1000);
  }, []);

  return (
    <div className="loader fixed z-50 w-screen h-screen">
      <span>Loading... </span>
      <div className="bg-gray-800 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-gray-800 rounded-full h-2.5 dark:bg-gray-700">
          <div className="h-2.5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
