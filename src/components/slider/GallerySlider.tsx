"use client";
import { galleryData } from "@/data/Data";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const GallerySlider = () => {
  return (
    <section className="rv-1-gallery rv-section-spacing">
      <div className="container">
        <div className="rv-1-section-heading rv-1-section-heading-2">
          <div className="rv-1-section-heading-left">
            <h6 className="rv-1-section__sub-title rv-text-anime">
              events gallery
            </h6>

            <h2 className="rv-1-section__title rv-text-anime">
              Past Event Memories
            </h2>
          </div>

          <DivAnimateYAxis className="rv-1-section-heading__right">
            <a href="#" className="rv-1-def-btn">
              <span className="txt">View All Memories</span>
            </a>
            <div className="rv-1-slider-nav" id="rv-1-gallery__slider-nav">
              <button className="prev">
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button className="next">
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </DivAnimateYAxis>
        </div>
      </div>
      <DivAnimateYAxis className="rv-1-gallery-slider-container" position={80}>
        <Swiper
          className="rv-1-gallery__slider"
          slidesPerView={3}
          spaceBetween={30}
          autoplay={true}
          navigation={{
            nextEl: "#rv-1-gallery__slider-nav .next",
            prevEl: "#rv-1-gallery__slider-nav .prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            480: {
              centeredSlides: true,
              spaceBetween: 15,
              slidesPerView: 1.5,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 3,
            },
            992: {
              spaceBetween: 20,
            },
            1400: {
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rv-1-gallery-slide">
                <img src={item.img} alt="Gallery Image" />
                <div className="rv-1-gallery-slide__txt">
                  <a href="#" className="rv-1-gallery-slide__tag">
                    {item.tag}
                  </a>
                  <h5 className="rv-1-gallery-slide__title">{item.title}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};

export default GallerySlider;
