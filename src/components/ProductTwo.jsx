import React from "react";
import Button from "./Button";
import { card } from "../assets";

const ProductTwo = () => {
  return (
    <div className="p-[1rem] flex flex-col gap-5 md:flex-row">
      <div className="flex flex-col gap-5 md:basis-[50%] md:gap-[2rem]">
        <h2 className="text-3xl font-bold text-white ss:text-4xl  md:text-5xl">
          Find a better card deal in few easy steps.
        </h2>
        <p className="text-gray-400 ss:max-w-[80%] md:text-xl">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet 
          quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="md:basis-[50%]">
        <img src={card} />
      </div>
    </div>
  );
};

export default ProductTwo;
