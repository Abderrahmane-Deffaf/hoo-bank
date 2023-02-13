import React from "react";

const Product = () => {
  return (
    <div className="p-[1rem]">
      <div>
        <img src=".././assets/bill.png" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-white">
          Easily control your <br /> billing & invoicing.
        </h2>
        <p className="text-gray-400">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <ul className="flex w-full justify-between">
          <li>
            <a>
              <img src=".././assets/apple.svg" />
            </a>
          </li>
          <li>
            <a>
              <img src=".././assets/google.svg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
