"use client";
import { partnerData2 } from "@/data/Data";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection8 = () => {
  return (
    <section className="rv-14-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-9 col-lg-10">
            <div className="rv-11-banner__txt">
              <h6 className="rv-14-section__sub-title rv-14-banner__sub-title rv-text-anime">
                Specialized Direction
              </h6>
              <h1 className="rv-14-banner__title rv-text-anime">
                Well-Versed Financial Professionals.
              </h1>
              <a href="#" className="rv-10-def-btn rv-14-def-btn">
                Schedule Consultation{" "}
                <i className="fa-regular fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <Swiper
              className="rv-14-partners__slider"
              autoplay={true}
              slidesPerView={5}
              spaceBetween={37}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 3,
                },
                768: {
                  spaceBetween: 57,
                  slidesPerView: 4,
                },
                992: {
                  spaceBetween: 67,
                  slidesPerView: 4,
                },
                1200: {
                  spaceBetween: 87,
                  slidesPerView: 5,
                },
                1400: {
                  spaceBetween: 123,
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay]}
            >
              {partnerData2.map((img, index) => (
                <SwiperSlide key={index}>
                  <a href="#">
                    <img src={img} alt="Partner Logo" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="wave"></div>
    </section>
  );
};

export default BannerSection8;
