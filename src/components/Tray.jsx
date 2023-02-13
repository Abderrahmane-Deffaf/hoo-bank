import React from "react";
import Button from "./Button";

const Tray = () => {
  return (
    <div className="p-[1rem]">
      <div className="bg-black-gradient rounded-[20px] p-5 ">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Let's try our service now!
          </h2>
          <p className="text-gray-400">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Tray;
