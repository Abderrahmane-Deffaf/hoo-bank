import React from "react";
import Button from "./Button";

const ProductTwo = () => {
  return (
    <div className="p-[1rem] flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-white">
          Find a better card deal in few easy steps.
        </h2>
        <p className="text-gray-400">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet 
          quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div>
        <img src=".././assets/card.png" />
      </div>
    </div>
  );
};

export default ProductTwo;
