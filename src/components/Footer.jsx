import React from "react";
import { footerLinks, socialMedia } from "../constants/constants";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 p-[1rem]">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <img
            className="w-2/3 ss:w-1/2 md:w-full"
            src=".././assets/logo.svg"
            alt="hoobank logo"
          />
          <p className="text-gray-400 md:text-xl">
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        <ul className="flex flex-col gap-5 ss:flex-row justify-between md:gap-10">
          {footerLinks.map((Element) => {
            return (
              <li className="flex flex-col gap-3">
                <li className="text-white md:text-2xl">{Element.title}</li>
                <ul>
                  {Element.links.map((Element) => {
                    return (
                      <li className="text-gray-400">
                        <a src={Element.link}>{Element.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="flex flex-col gap-5 ss:flex-row ss:justify-between">
        <div>
          <small className="text-gray-400">
            Copyright 2021 HooBank. All Rights Reserved.
          </small>
        </div>
        <div className="flex gap-4">
          {socialMedia.map((Element) => {
            return (
              <a src={Element.link}>
                <img src={Element.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
