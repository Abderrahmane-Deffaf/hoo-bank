import React from "react";
import { clients } from "../constants/constants";

const Clientstwo = () => {
  return (
    <div className="flex gap-5 items-center p-5 flex-wrap ss:gap-[2%]">
      {clients.map((Element) => {
        return (
          <div className="basis-[44%] ss:basis-[23%]">
            <img src={Element.logo} />
          </div>
        )
      })}
    </div>
  );
};

export default Clientstwo;
