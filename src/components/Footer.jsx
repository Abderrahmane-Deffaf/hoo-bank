import React from "react";
import { footerLinks, socialMedia } from "../constants/constants";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <img src=".././assets/logo.svg" alt="hoobank logo" />
          <p className="text-gray-400">
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        <ul>
          {footerLinks.map((Element) => {
            return (
              <>
                <li className="text-white">{Element.title}</li>
                {Element.links.map((Element) => {
                  return (
                    <li className="text-gray-400">
                      <a src={Element.link}>{Element.name}</a>
                    </li>
                  );
                })}
              </>
            );
          })}
        </ul>
      </div>
      <hr />
      <div>
        <div>
          <small className="text-gray-400">
            Copyright 2021 HooBank. All Rights Reserved.
          </small>
        </div>
        <div className="flex">
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
