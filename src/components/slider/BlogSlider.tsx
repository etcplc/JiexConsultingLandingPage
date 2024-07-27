"use client";
import { blogData } from "@/data/Data";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSlider = () => {
  return (
    <section className="rv-1-blogs rv-section-spacing" data-aos="fade-up">
      <div className="container">
        <div className="rv-1-section-heading rv-1-section-heading-2">
          <div className="rv-1-section-heading-left">
            <h6 className="rv-1-section__sub-title rv-text-anime">
              latest updates
            </h6>

            <h2 className="rv-1-section__title rv-text-anime">
              Latest Blog & News.
            </h2>
          </div>

          <DivAnimateYAxis className="rv-1-section-heading__right">
            <a href="#" className="rv-1-def-btn">
              <span className="txt">View All News</span>
            </a>
            <div className="rv-1-slider-nav" id="rv-1-blogs__slider-nav">
              <button className="prev">
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button className="next">
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </DivAnimateYAxis>
        </div>
        <DivAnimateYAxis className="rv-1--blog-slider-container" position={80}>
          <Swiper
            className="rv-1-blogs__slider"
            spaceBetween={30}
            autoplay={true}
            navigation={{
              nextEl: "#rv-1-blogs__slider-nav .next",
              prevEl: "#rv-1-blogs__slider-nav .prev",
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
              768: {
                spaceBetween: 15,
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            {blogData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rv-1-blog">
                  <div className="rv-1-blog__img">
                    <img src={item.img} alt="Blog Image" />
                  </div>

                  <div className="rv-1-blog__txt">
                    <ul className="rv-1-blog__infos">
                      <li>
                        <img src="assets/img/rv-1-icon-4.png" alt="icon" />{" "}
                        {item.date}
                      </li>
                      <li>
                        <img src="assets/img/rv-1-icon-5.png" alt="icon" />{" "}
                        {item.commentAmount}
                        Comments
                      </li>
                    </ul>

                    <h4 className="rv-1-blog__title">
                      <a href="#" className="rv-text-anime">
                        {item.title}
                      </a>
                    </h4>

                    <a
                      href="#"
                      className="rv-1-schedule-conf__btn rv-1-blog__btn"
                    >
                      Read More <i className="fa-light fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default BlogSlider;
