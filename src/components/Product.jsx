import React from "react";
import { bill, google, apple } from "..";

const Product = () => {
  return (
    <div className="flex flex-col p-[1rem] md:flex-row" id="Products">
      <div className="w-full md:basis-[50%]">
        <img src={bill} alt="bill illustration" />
      </div>
      <div className="flex flex-col gap-5 md:basis-[50%] md:justify-center md:gap-[2rem]">
        <h2 className="text-3xl font-bold text-white ss:text-4xl md:text-5xl">
          Easily control your <br /> billing & invoicing.
        </h2>
        <p className="text-gray-400 ss:max-w-[80%] md:text-xl">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <ul className="flex w-full gap-5">
          <li>
            <a href="https://apple.com">
              <img width="139" height="46.33" src={apple} loading="lazy" alt="apple store logo" />
            </a>
          </li>
          <li>
            <a href="https://google.com">
              <img src={google} width="145" height="44" loading="lazy" alt="google play logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
