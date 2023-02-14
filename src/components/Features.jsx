import React from "react";
import { features } from "../constants/constants";
import Button from "./Button";

const Features = () => {
  return (
    <div className="p-[1rem] flex flex-col gap-5 md:flex-row" id="Features">
      <div className="flex flex-col gap-5 md:basis-[50%]">
        <h2 className="text-3xl font-bold text-white ss:text-4xl">
          You do the buisiness, <br /> we'll handle the money.
        </h2>
        <p className="text-gray-400 ss:max-w-[80%]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div>
        {features.map((Element) => {
          return (
            <div
              id={Element.id}
              className=" feature-card flex rounded-[20px] p-5"
            >
              <img className="mr-2" src={Element.icon} />
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
