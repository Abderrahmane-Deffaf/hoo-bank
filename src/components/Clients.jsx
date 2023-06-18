import React from "react";
import { feedback } from "../constants/constants";
import { quotes } from "..";

const Clients = () => {
  return (
    <div className="flex flex-col gap-5 p-[1rem] md:gap-[3rem]" id="Clients">
      <div className="flex flex-col gap-5 md:flex-row">
        <h2 className="text-3xl font-bold text-white ss:text-4xl md:w-[50%] md:text-5xl">
          What people are <br /> saying about us
        </h2>
        <p className="text-gray-400 md:w-[50%] md:text-2xl">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-col gap-5 ss:flex-row ss:flex-wrap ss:gap-[2%]">
        {feedback.map((Element, index) => {
          return (
            <div
              key={index}
              className="feedback-card flex flex-col justify-between gap-5 rounded-[20px] p-5 ss:basis-[49%] md:basis-[32%]"
            >
              <img className="w-1/5" src={quotes} alt="quotes" />
              <p className="text-white">{Element.content}</p>
              <div className="flex items-center">
                <img
                  width="89"
                  height="89"
                  src={Element.img}
                  loading="lazy"
                  alt="holder"
                  className="mr-4 w-1/3"
                />
                <div>
                  <p className="text-white">{Element.name}</p>
                  <p className="text-gray-400">{Element.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
