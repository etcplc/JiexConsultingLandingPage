"use client";
import React, { useState } from "react";
import Navlink from "../utils/Navlink";
type Props = {
  style: string;
  logo?: string;
};
type DropdownState = {
  home: boolean;
  pages: boolean;
  service: boolean;
  blog: boolean;
};
const NavSection = ({ style, logo }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    service: false,
    blog: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState) => {
    if (window.innerWidth < 992) {
      setDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <div className={style}>
      <ul className="justify-content-center">
        <li className={dropdown.home ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={() => handleToggleDropdown("home")}
          >
            Home
          </a>

          <ul className="sub-menu rv-mega-menu">
            <li>
              <Navlink href="/">Business Promotion</Navlink>
            </li>
            <li>
              <Navlink href="/home-2">Business Consulting</Navlink>
            </li>
            <li>
              <Navlink href="/home-3">Event</Navlink>
            </li>
          </ul>
        </li>

        <li>
          <Navlink href="/about">About</Navlink>
        </li>

        <li className={dropdown.pages ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={() => handleToggleDropdown("pages")}
          >
            Pages
          </a>
          <ul className="sub-menu">
            <li>
              <Navlink href="/projects">Projects</Navlink>
            </li>
            <li>
              <Navlink href="/projects/ecological-harmony-project">
                Project Details
              </Navlink>
            </li>
            <li>
              <Navlink href="/team">Team Members</Navlink>
            </li>
            <li>
              <Navlink href="/login">Login</Navlink>
            </li>
            <li>
              <Navlink href="/register">Register</Navlink>
            </li>
          </ul>
        </li>
        {logo && (
          <li className="d-none d-lg-block">
            <Navlink href="/" className="rv-5-logo">
              <img src={logo} alt="logo" />
            </Navlink>
          </li>
        )}
        <li className={dropdown.service ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={() => handleToggleDropdown("service")}
          >
            Services
          </a>
          <ul className="sub-menu">
            <li>
              <Navlink href="/services">Services</Navlink>
            </li>
            <li>
              <Navlink href="/services/digital-marketing">
                Service Details
              </Navlink>
            </li>
          </ul>
        </li>

        <li className={dropdown.blog ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={() => handleToggleDropdown("blog")}
          >
            Blog
          </a>
          <ul className="sub-menu">
            <li>
              <Navlink href="/blog">Blog</Navlink>
            </li>
            <li>
              <Navlink href="/blog/entrepreneur-productivity">
                Blog Details
              </Navlink>
            </li>
          </ul>
        </li>

        <li>
          <Navlink href="/contact">Contact</Navlink>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
