import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/constants";
import ".././index.css";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  return (
    <ul className="z-10 bg-primary top-0 sticky md:relative flex flex-col flex-wrap items-center justify-between p-[1rem]">
      <ul className="flex ">
        <li className="basis-[50%]">
          <a>
            <img src="../assets/logo.svg" alt="hoo bank logo" />
          </a>
        </li>
        <li
          className="flex basis-[50%] justify-end text-right"
          onClick={() => {
            if (drop) {
              setDrop(false);
            } else {
              setDrop(true);
            }
          }}
        >
          <img className="w-1/4" src=".././assets/menu-burger.svg" />
        </li>
      </ul>

      <ul className="bg-black-gradient absolute top-[100%] z-[6] flex w-[90%] flex-col gap-[1rem] rounded-[20px] text-white ">
        {navLinks.map((Element) => {
          if (drop) {
            return (
              <li className="w-full text-center first:mt-5 last:mt-5">
                <a id={Element.id}>{Element.title}</a>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </ul>
  );
};

export default Navbar;
