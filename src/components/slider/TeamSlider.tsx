"use client";
import { teamData } from "@/data/Data";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TeamSlider = () => {
  return (
    <DivAnimateYAxis className="rv-5-team-slider-container">
      <Swiper
        className="rv-5-team__slider"
        autoplay={true}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          prevEl: "#rv-5-team-slider-nav .prev",
          nextEl: "#rv-5-team-slider-nav .next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
          },
          480: {
            spaceBetween: 20,
            slidesPerView: 1.6,
            centeredSlides: true,
            loop: true,
          },
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        {teamData.map((item) => (
          <SwiperSlide className="rv-5-member" key={item.id}>
            <div className="rv-5-member__img">
              <img src={item.img} alt="Member Image" />
            </div>

            <div className="rv-5-member__txt">
              <h6 className="rv-5-member__label">{item.label}</h6>

              <h5 className="rv-5-member__name">
                <a href="#">{item.name}</a>
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="rv-5-team-slider-nav">
        <button className="prev">
          <i className="fa-regular fa-arrow-left"></i> Previous
        </button>
        <button className="next">
          Next <i className="fa-regular fa-arrow-right"></i>
        </button>
      </div>
    </DivAnimateYAxis>
  );
};

export default TeamSlider;
