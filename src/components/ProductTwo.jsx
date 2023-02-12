import React from "react";
import Button from "./Button";

const ProductTwo = () => {
  return (
    <div>
      <div>
        <h2 className="text-white font-bold text-5xl">
          Find a better card deal <br /> in few easy steps.
        </h2>
        <p className="text-gray-400">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet <br />
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
