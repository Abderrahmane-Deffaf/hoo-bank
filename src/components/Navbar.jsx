import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/constants";
import ".././index.css";
import { close, menu } from "../assets";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [icon, setIcon] = useState(menu);

  return (
    <ul className=" relative flex flex-col flex-wrap items-center justify-between px-[1rem] py-[2rem] ss:flex-row ss:justify-between">
      <ul className="flex w-full justify-between ss:w-[40%]">
        <li>
          <a href="#Hero">
            <img className="ss:w-2/3 md:w-full" src="../assets/logo.svg" alt="hoo bank logo" />
          </a>
        </li>
        <li
          className="flex basis-[50%] justify-end text-right ss:hidden"
          onClick={() => {
            if (drop) {
              setDrop(false);
              setIcon(menu);
            } else {
              setDrop(true);
              setIcon(close);
            }
          }}
        >
          <img
            className="w-1/4"
            src={icon}
            alt={icon === menu ? "menu" : "close"}
          />
        </li>
      </ul>

      <ul className="bg-black-gradient absolute top-[100%] z-[6] flex w-[90%] flex-col gap-[1rem] rounded-[20px] text-white ss:w-[60%] ss:relative ss:flex-row ss:bg-none ss:gap-5 ss:justify-end">
        {navLinks.map((Element) => {
          if (drop || window.innerWidth >= 600) {
            return (
              <li className="w-fit text-center first:mt-5 last:mb-5 ss:first:mt-0 ss:last:mb-0">
                <a className="text-xl sm:text-2xl md:text-4xl" href={Element.href} id={Element.id}>
                  {Element.title}
                </a>
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
