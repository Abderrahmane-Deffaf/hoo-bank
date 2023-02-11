import React from "react";
import { navLinks } from "../constants/constants";
import ".././index.css";

const Navbar = () => {
  return (
    <ul className="flex items-center justify-between p-[1rem]">
      <li className="cursor-pointer">
        <a>
          <img className="w-1/2" src="../assets/logo.svg" alt="hoo bank logo" />
        </a>
      </li>
      <ul className="flex gap-[1rem] text-white">
        {navLinks.map((Element) => {
          return (
            <li>
              <a id={Element.id}>{Element.title}</a>
            </li>
          );
        })}
      </ul>
    </ul>
  );
};

export default Navbar;
