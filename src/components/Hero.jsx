import React from "react";
import { stats } from "../constants/constants";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col  gap-[1rem]">
        <div className="relative flex flex-col gap-[1rem] ">
          <div className="bg-discount-gradient flex w-fit items-center rounded-xl px-2">
            <img src=".././assets/Discount.svg" />
            <p className="text-gray-400 ">
              <span className="text-white">20%</span> DISCOUNT FOR{" "}
              <span className="text-white">1 MONTH</span> ACCOUNT
            </p>
          </div>

          <h1 className="relative z-[5] text-7xl font-bold text-white">
            The Next <br /> <span className="text-gradient">Generation</span>{" "}
            <br /> Payment Method.
          </h1>
          <p className="text-gray-400">
            Our team of experts uses a methodology to identify <br /> the credit
            cards most likely to fit your needs. <br /> We examine annual
            percentage rates, annual fees.
          </p>
          <div className="absolute -left-[9rem] z-[0] h-[20rem] w-[12rem] bg-white blur-[225px]"></div>
          <a>
            <div className="bg-blue-gradient absolute right-[5rem] top-[2rem] w-fit rounded-full p-[2px]">
              <div className="relative aspect-square  w-fit rounded-full bg-primary p-[1.5rem] font-bold">
                <h2 className="text-gradient text-2xl">
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
        <div className="relative">
          <img className="relative z-[5] w-full" src=".././assets/robot.png" />
          <div className="absolute top-0 z-[0] h-[471px] w-[405px] bg-gray-400 blur-[375px]"></div>
          <div className="bg-dark-blue-gradient absolute top-0 z-[0] h-[571px] w-[578px] blur-[61.5px]"></div>
          <div className="bg-pink blur-[450px] absolute top-0 left-[30%] h-[514px] w-[145px] z-[5]"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-white">
        {stats.map((Element) => {
          return (
            <div
              id={Element.id}
              className="relative flex basis-1/2 justify-center after:absolute after:right-0 after:h-5 after:w-[1px] after:bg-white after:content-['']  "
            >
              <p>
                <span className="text-4xl font-bold">{Element.value}</span>
                <span className="text-gradient text-2xl">{Element.title}</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Hero;
