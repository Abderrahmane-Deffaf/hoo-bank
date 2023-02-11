import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col  gap-[1rem]">
      <div className="relative flex flex-col gap-[1rem] ">
        <div className="bg-discount-gradient flex w-fit items-center rounded-xl px-2">
          <img src=".././assets/Discount.svg" />
          <p className="text-gray-400 ">
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
        
        <h1 className="text-7xl font-bold text-white">
          The Next <br /> <span className="text-gradient">Generation</span>{" "}
          <br /> Payment Method.
        </h1>
        <p className="text-gray-400">
          Our team of experts uses a methodology to identify <br /> the credit
          cards most likely to fit your needs. <br /> We examine annual
          percentage rates, annual fees.
        </p>
        <div className="absolute -left-[9rem] h-[20rem] w-[12rem] bg-white blur-[225px]"></div>
        <a>
          <div className="bg-blue-gradient w-fit rounded-full p-[2px] absolute right-[5rem] top-[2rem]">
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
      <div>
        <img className="w-full" src=".././assets/robot.png" />
      </div>
    </div>
  );
};

export default Hero;
