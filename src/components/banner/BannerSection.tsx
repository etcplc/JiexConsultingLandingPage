"use client";
import React from "react";
import { motion } from "framer-motion";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const BannerSection = () => {
  return (
    <div className="container rv-1-container">
      <section className="rv-1-banner">
        <div className="row g-0 align-items-center">
          <div className="col-md-7">
            <div className="rv-1-banner__txt">
              <h1 className="rv-1-banner__title rv-1-text-animate">
                business conference.
              </h1>

              <DivAnimateXAxis className="rv-1-banner__infos" position={80}>
                <li className="rv-1-banner__info">
                  <i className="fa-solid fa-calendar"></i> 2023/08/24
                </li>
                <li className="rv-1-banner__info">
                  <i className="fa-solid fa-location-dot"></i> New York, United
                </li>
                <li className="rv-1-banner__info">
                  <i className="fa-solid fa-user"></i> 25 Speakers
                </li>
              </DivAnimateXAxis>
              <DivAnimateXAxis className="rv-1-banner__actions" position={-80}>
                <a href="#" className="rv-1-def-btn rv-1-def-btn-2">
                  <span className="txt">Register Now!</span>
                  <span className="icon">
                    <img src="assets/img/rv-1-icon-2.png" alt="icon" />
                  </span>
                </a>

                <ul className="rv-1-banner__socials">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </DivAnimateXAxis>

              <div className="rv-1-banner__vectors">
                <img
                  src="assets/img/rv-1-vector-1.png"
                  alt="vector"
                  className="rv-1-banner__vector rv-1-banner__vector-1"
                />
                <img
                  src="assets/img/rv-1-vector-2.png"
                  alt="vector"
                  className="rv-1-banner__vector rv-1-banner__vector-2"
                />
                <img
                  src="assets/img/rv-1-vector-3.png"
                  alt="vector"
                  className="rv-1-banner__vector rv-1-banner__vector-3"
                />
                <img
                  src="assets/img/rv-1-vector-4.png"
                  alt="vector"
                  className="rv-1-banner__vector rv-1-banner__vector-4"
                />
                <img
                  src="assets/img/rv-1-vector-5.png"
                  alt="vector"
                  className="rv-1-banner__vector rv-1-banner__vector-5"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="rv-1-banner__img text-end">
              <div className="reveal">
                <motion.img
                  src="assets/img/rv-1-banner-img.jpg"
                  alt="Banner image"
                  initial={{
                    opacity: 0,
                    clipPath: "polygon(0 0, 20% 0, 20% 100%, 0% 100%)",
                    scale: 1.2,
                  }}
                  whileInView={{
                    opacity: 1,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeIn",
                  }}
                  viewport={{
                    once: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
