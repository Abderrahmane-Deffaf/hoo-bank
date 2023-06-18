import React from "react";
import { clients } from "../constants/constants";

const Clientstwo = () => {
  return (
    <div className="flex flex-wrap items-center gap-5 p-5 ss:gap-[2%]">
      {clients.map((Element, index) => {
        return (
          <div key={index} className="basis-[44%] ss:basis-[23%]">
            <img width="142" height="44" src={Element.logo} alt="key" />
          </div>
        );
      })}
    </div>
  );
};

export default Clientstwo;
