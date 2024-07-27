"use client";
import React, { useEffect, useRef, useState } from "react";
import NavSection from "../navigation/NavSection";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { toggleSearchModalOpen } from "@/redux/features/searchModalSlice";

const HeaderSection7 = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
    setIsHeaderFixed(false);
  };
  const dispatch = useAppDispatch();
  const openSearchModal = () => {
    dispatch(toggleSearchModalOpen());
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);
  return (
    <header className="rv-14-header rv-1-header p-0">
      <div className="rv-10-header-top rv-14-header-top">
        <div className="container">
          <div className="row gy-2 align-items-center">
            <div className="col-md-9">
              <div className="rv-7-header-top__actions rv-14-header-top__actions">
                <h6 className="rv-8-header-contact-info email">
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </h6>
                <h6 className="rv-8-header-contact-info location">
                  <i className="fa-solid fa-sharp fa-location-dot"></i> New
                  York, NY 10038
                </h6>
                <h6 className="rv-8-header-contact-info numb">
                  <i className="fa-solid fa-sharp fa-phone"></i>{" "}
                  <a href="tel:1237775643">(123) 777 - 5643</a>
                </h6>
              </div>
            </div>

            <div className="col-md-3">
              <form
                action="#"
                className="rv-7-header-top__actions rv-14-header-top-form"
              >
                <select name="language" id="rv-7-lang">
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Korean">Korean</option>
                  <option value="Bangla">Bangla</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`rv-7-header-bottom rv-14-header-bottom to-be-fixed ${
          isHeaderFixed ? "fixed" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-4 col-xxs-6">
              <div className="rv-8-header__logo">
                <Link href="/">
                  <img src="assets/img/logo-main-white.png" alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1 order-2">
              <div
                className={`rv-1-header-nav__sidebar ${
                  isSidebarOpen ? "active" : ""
                }`}
                ref={sidebarRef}
              >
                <div className="sidebar-heading d-lg-none d-flex align-items-center justify-content-between">
                  <Link href="/" className="logo-container">
                    <img src="assets/img/rv-14-logo.png" alt="logo" />
                  </Link>
                  <button
                    className="rv-3-def-btn rv-1-header-mobile-menu-btn rv-14-mobile-menu-btn sidebar-close-btn"
                    onClick={closeSidebar}
                  >
                    <i className="fa-regular fa-xmark"></i>
                  </button>
                </div>

                <NavSection style="rv-1-header__nav rv-7-header__nav rv-14-header__nav" />
              </div>
            </div>

            <div className="col-lg-3 col-md-9 col-8 col-xxs-6 text-end order-1">
              <div className="rv-7-header-bottom-right rv-14-header-bottom-right">
                <a href="#" className="rv-3-def-btn d-xxs-none">
                  Get in Touch
                </a>
                <div className="rv-7-header-bottom-right__actions rv-14-header-bottom-right__actions">
                  <button
                    className="rv-14-search-btn rv-search-modal-open-btn"
                    onClick={openSearchModal}
                  >
                    <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </div>
                <button
                  className="rv-1-header-mobile-menu-btn rv-3-def-btn d-inline-block d-lg-none p-0"
                  id="rv-1-header-mobile-menu-btn"
                  onClick={openSidebar}
                >
                  <i className="fa-regular fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection7;
