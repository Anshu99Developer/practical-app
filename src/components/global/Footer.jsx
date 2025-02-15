import React from "react";
import footerLogo from "../../assets/images/footer-logo.svg";
import menuItem from "../../data/data.json";
import Menu from "./Menu";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const { footerNav } = menuItem;
  return (
    <div className="app-footer py-24 bg-neutral-90">
      <div className="wrapper flex flex-col gap-9">
        <div className="flex md:gap-5 gap-8 justify-between max-md:flex-col max-md:items-center">
          <div className="flex md:gap-24 items-center max-md:flex-col gap-3">
            <div>
              <img
                src={footerLogo}
                alt="footer-logo"
                className="w-full h-full"
              />
            </div>
            <div className="">
              <Menu menuItem={footerNav} />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="p-8 transition-all duration-300 hover:scale-110"
            >
              <FacebookIcon />
            </Link>
            <Link
              to="/"
              className="p-8 transition-all duration-300 hover:scale-110"
            >
              <InstagramIcon />
            </Link>
            <Link
              to="/"
              className="p-8 transition-all duration-300 hover:scale-110"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
        <div>
          <p className="caption leading-normal text-neutral-30 text-center">
            © 2024 Central Texas Fly Fishing All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
