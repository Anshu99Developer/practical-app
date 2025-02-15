import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "../../assets/Icons";
import headerLogoLight from "../../assets/images/header-logo-white.svg";
import headerLogo from "../../assets/images/header-logo.svg";
import mobileLogoLight from "../../assets/images/header-mobile-logo-white.svg";
import mobileLogo from "../../assets/images/header-mobile-logo.svg";
import menuItem from "../../data/data.json";
import Menu from "./Menu";

const Header = () => {
  const { mainNav } = menuItem;
  const [menuStatus, setMenuStatus] = useState(false);
  const { pathname } = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to check scroll position and update state
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu when the route changes
  useEffect(() => {
    setMenuStatus(false);
  }, [pathname]);

  // Close the menu when resizing the screen
  useEffect(() => {
    const handleResize = () => {
      setMenuStatus(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle the menu open/close state
  const handleOpenMenu = () => {
    setMenuStatus(!menuStatus);
  };
  return (
    <div
      className={`app-header sticky top-0 py-8 transition-all duration-300 ${
        isSticky ? "sticky-header bg-neutral-90" : "bg-white"
      } z-40`}
    >
      <div className="wrapper flex items-center gap-10 justify-between">
        <Link to="/" className="header-logo">
          <img
            src={isSticky ? headerLogoLight : headerLogo}
            alt="header-logo"
            className="w-full h-full max-lg:max-h-[30px] max-md:hidden"
          />
          <img
            src={isSticky ? mobileLogoLight : mobileLogo}
            alt="header-logo"
            className="w-full h-full md:hidden"
          />
        </Link>

        {/* Desktop Navigation Menu (hidden on small screens) */}
        <div className="max-md:hidden">
          <Menu menuItem={mainNav} />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div
          className={`md:hidden p-8 border hover:border-neutral-90 rounded-[5px] transition-all duration-300 cursor-pointer z-50 size-10 flex items-center justify-center ${
            menuStatus ? "!border-neutral-90" : " border-transparent"
          } ${isSticky && "hover:border-neutral-5"}`}
          onClick={handleOpenMenu}
        >
          {/* Show Close Icon if menu is open, else show Hamburger Icon */}
          {menuStatus ? (
            <CloseIcon />
          ) : (
            <HamburgerIcon fill={isSticky && "#F7F7F6"} />
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`bg-white p-24 fixed left-0 top-0 pt-[56px] w-full transition-all duration-100 h-full z-40 ${
            menuStatus ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Menu menuItem={mainNav} />
        </div>
      </div>
    </div>
  );
};

export default Header;
