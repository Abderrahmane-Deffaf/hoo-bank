import React from "react";
import { footerLinks, socialMedia } from "../constants/constants";
import { logo } from "..";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 p-[1rem]">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <img
            className="w-2/3 ss:w-1/2 md:w-full"
            src={logo}
            loading="lazy"
            alt="hoobank logo"
          />
          <p className="text-gray-400 md:text-xl">
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        <ul className="flex flex-col justify-between gap-5 ss:flex-row md:gap-10">
          {footerLinks.map((Element, index) => {
            return (
              <li key={index} className="flex flex-col gap-3">
                <li className="text-white md:text-2xl">{Element.title}</li>
                <ul>
                  {Element.links.map((Element, index) => {
                    return (
                      <li key={index} className="text-gray-400">
                        <a href={Element.link}>{Element.name}</a>
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
          {socialMedia.map((Element, index) => {
            return (
              <a key={index} href={Element.link}>
                <img src={Element.icon} alt="socials" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
