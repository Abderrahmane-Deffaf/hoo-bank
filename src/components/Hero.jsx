import React from "react";
import { stats } from "../constants/constants";

const Hero = () => {
  return (
    <div className="z-1 relative p-[1rem]">
      <div className="flex flex-col  gap-[1rem]">
        <div className="relative flex flex-col gap-[1rem] ">
          <div className="bg-discount-gradient flex w-fit items-center rounded-xl p-1">
            <img src=".././assets/Discount.svg" />
            <p className=" ml-1 text-gray-400">
              <span className=" text-white">20%</span> DISCOUNT FOR
              <span className="text-white ">1 MONTH</span> ACCOUNT
            </p>
          </div>

          <h1 className="relative z-[5] mt-5 text-4xl font-bold text-white">
            The Next <br /> <span className="text-gradient">Generation</span>
            <br /> Payment Method.
          </h1>
          <p className="text-gray-400">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <div className="absolute -left-[9rem] top-[3rem] z-[0] h-[9rem] w-[12rem] rounded-full bg-white blur-[170px]"></div>
          <a>
            <div className="bg-blue-gradient absolute right-0 top-[20%] w-fit rounded-full p-[2px]">
              <div className="relative aspect-square  w-fit rounded-full bg-primary p-3 font-bold">
                <h2 className="text-gradient text-xl">
                  Get <br /> Started
                </h2>
                <img
                  className="absolute top-[2rem] right-[2rem]"
                  src=".././assets/arrow-up.svg"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="relative ">
          <img className="relative z-[5] w-full" src=".././assets/robot.png" />
          <div className="absolute top-[70%] left-[28%] z-[0] h-[4rem] w-[50%] bg-gray-400 blur-[7rem] "></div>
          <div className="bg-pink absolute top-[20%] left-[30%] z-[0] h-[40%] w-[145px] blur-[7rem]"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-white">
        {stats.map((Element) => {
          return (
            <div
              id={Element.id}
              className="relative w-full"
            >
              <p className="text-center">
                <span className="text-3xl font-bold">{Element.value}</span>
                <span className="text-gradient text-xl">{Element.title}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
