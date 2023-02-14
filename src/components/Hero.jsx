import React from "react";
import { stats } from "../constants/constants";

const Hero = () => {
  return (
    <div className="z-1 relative p-[1rem] " id="Hero">
      <div className="flex flex-col  gap-[1rem] md:flex-row">
        <div className="relative flex flex-col gap-[1rem] md:justify-end md:basis-[50%] md:gap-[2rem]">
          <div className="bg-discount-gradient flex w-fit items-center rounded-xl p-1">
            <img src=".././assets/Discount.svg" />
            <p className=" ml-1 text-gray-400 sm:text-2xl md:text-xl">
              <span className=" text-white">20%</span> DISCOUNT FOR
              <span className="text-white ">1 MONTH</span> ACCOUNT
            </p>
          </div>

          <h1 className="relative z-[5] mt-5 text-4xl font-bold text-white ss:text-5xl md:text-6xl">
            The Next <br /> <span className="text-gradient">Generation</span>
            <br /> Payment Method.
          </h1>
          <p className="text-gray-400 ss:max-w-[70%] md:text-xl">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <div className="absolute -left-[9rem] top-[3rem] z-[0] h-[9rem] w-[12rem] rounded-full bg-white blur-[170px] md:top-[50%]"></div>
          <a>
            <div className="bg-blue-gradient absolute right-0 top-[20%] w-fit rounded-full p-[2px] xs:left-[70%] md:top-[24%]">
              <div className="relative aspect-square  w-fit rounded-full bg-primary p-3 font-bold ss:p-[1.5rem] sm:p-[2rem]">
                <h2 className="text-gradient text-xl sm:text-2xl">
                  Get <br /> Started
                </h2>
                <img
                  className="absolute top-[1rem] right-[1.4rem] xs:top-[1.8rem] xs:right-[2rem] sm:top-[2.3rem]"
                  src=".././assets/arrow-up.svg"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="relative md:basis-[50%]">
          <img className="relative z-[5] w-full" src=".././assets/robot.png" />
          <div className="absolute top-[70%] left-[28%] z-[0] h-[4rem] w-[50%] bg-gray-400 blur-[7rem] "></div>
          <div className="bg-pink absolute top-[20%] left-[30%] z-[0] h-[40%] w-[145px] blur-[7rem]"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-white ss:flex-wrap ss:gap-5">
        {stats.map((Element) => {
          return (
            <div
              id={Element.id}
              className="ss:first:border-r relative w-full ss:w-[45%] md:w-[32%] md:last:border-l"
            >
              <p className="text-center">
                <span className="text-3xl font-bold sm:text-4xl">{Element.value}</span>
                <span className="text-gradient text-xl sm:text-2xl">{Element.title}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
