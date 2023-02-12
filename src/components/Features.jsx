import React from "react";
import { features } from "../constants/constants";
import Button from "./Button";

const Features = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl font-bold text-white">
          You do the buisiness, <br /> we'll handle the money.
        </h2>
        <p className="text-gray-400">
          With the right credit card, you can improve your financial life by{" "}
          <br />
          building credit, earning rewards and saving money. But with <br />{" "}
          hundreds of credit cards on the market.
        </p>
        <Button />
      </div>
      <div>
        {features.map((Element) => {
          return (
            <div id={Element.id} className=" feature-card rounded-[20px] flex p-5">
              <img src={Element.icon} />
              <div>
                <p className="font-bold text-white">{Element.title}</p>
                <p className="text-gray-400">{Element.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
