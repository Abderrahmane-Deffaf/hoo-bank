import React from "react";
import { clients } from "../constants/constants";

const Clientstwo = () => {
  return (
    <div className="flex gap-5 items-center p-5">
      {clients.map((Element) => {
        return (
          <div>
            <img src={Element.logo} />
          </div>
        )
      })}
    </div>
  );
};

export default Clientstwo;
