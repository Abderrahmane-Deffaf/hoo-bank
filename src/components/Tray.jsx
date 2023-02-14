import React from "react";
import Button from "./Button";

const Tray = () => {
  return (
    <div className="p-[1rem] ">
      <div className="bg-black-gradient flex flex-col gap-5 rounded-[20px] p-5 md:flex-row md:p-[3rem] md:items-center">
        <div className="flex flex-col gap-3 md:basis-[60%]">
          <h2 className="text-3xl font-bold text-white text-4xl md:text-5xl">
            Let's try our service now!
          </h2>
          <p className="text-gray-400 ss:max-w-[80%] md:text-xl">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="md:flex md:justify-center md:basis-[40%]">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Tray;
