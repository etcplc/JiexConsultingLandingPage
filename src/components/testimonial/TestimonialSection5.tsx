"use client";
import React, { useState } from "react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionAnimateYAxis from "../utils/SectionAnimateYAxis";

const TestimonialSection5 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <SectionAnimateYAxis className="rv-14-testimonial rv-section-spacing">
      <div className="container">
        <div className="rv-6-testimonial__inner rv-14-testimonial__inner">
          <Swiper
            className="rv-6-testimonial__img-slider rv-14-testimonial__img-slider"
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            slidesPerView={1}
            effect="fade"
            spaceBetween={50}
            loop={true}
            allowTouchMove={false}
            modules={[EffectFade]}
          >
            <SwiperSlide className="rv-6-testimonial__img-slide rv-14-testimonial__img-slide">
              <img
                src="assets/img/rv-14-reviewer-img.jpg"
                alt="Reviewer Image"
              />
            </SwiperSlide>
            <SwiperSlide className="rv-6-testimonial__img-slide rv-14-testimonial__img-slide">
              <img src="assets/img/rv-6-reviewer-2.jpg" alt="Reviewer Image" />
            </SwiperSlide>
          </Swiper>

          <svg
            width="0"
            height="0"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="rv-14-testimonial-img-mask">
              <path
                d="M0 150C0 67.1573 67.1573 0 150 0V75C150 33.5786 183.579 0 225 0C266.421 0 300 33.5786 300 75C300 116.421 266.421 150 225 150H150V225C150 266.421 116.421 300 75 300C33.5786 300 0 266.421 0 225V150Z"
                fill="black"
              />
              <path
                d="M300 300C300 217.157 232.843 150 150 150C150 232.843 217.157 300 300 300Z"
                fill="black"
              />
            </clipPath>
          </svg>

          <Swiper
            className="rv-6-testimonial__txt-slider"
            autoplay={true}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              el: "#rv-6-testimonial__slider-pagination",
              type: "fraction",

              renderFraction: function (currentClass, totalClass) {
                return (
                  '0<span class="' +
                  currentClass +
                  '"></span>' +
                  " / " +
                  '0<span class="' +
                  totalClass +
                  '"></span>'
                );
              },
            }}
            navigation={{
              nextEl: ".rv-6-testimonial-slider-nav .next",
              prevEl: ".rv-6-testimonial-slider-nav .prev",
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Autoplay, Pagination, Navigation, Thumbs]}
          >
            <SwiperSlide className="rv-6-testimony-txt-slide rv-14-testimony-txt-slide">
              <div className="rv-5-testimony__stars">
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
              </div>

              <p className="rv-6-testimony__txt">
                Suspends dictum nil sed sem aliquot convallis. dictum ipsum
                quips mauri's valuate, quips commode ligula auctor laborites est
                abet mollies Aliquot digicam aliquot Suspends connecter Justo
                Maecenas meatus Faubus, maximus ligula at.
              </p>

              <div className="rv-5-testimony-reviewer">
                <h5 className="rv-6-testimony-reviewer__name">Douglas Lyphe</h5>
                <span className="rv-5-testimony-reviewer__infos">
                  <span className="service">Business Owner</span>
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="rv-6-testimony-txt-slide rv-14-testimony-txt-slide">
              <div className="rv-5-testimony__stars">
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
              </div>

              <p className="rv-6-testimony__txt">
                Suspends dictum nil sed sem aliquot convallis. dictum ipsum
                quips mauri's valuate, quips commode ligula auctor laborites est
                abet mollies Aliquot digicam aliquot Suspends connecter Justo
                Maecenas meatus Faubus, maximus ligula at.
              </p>

              <div className="rv-5-testimony-reviewer">
                <h5 className="rv-6-testimony-reviewer__name">Kesri Devgan</h5>
                <span className="rv-5-testimony-reviewer__infos">
                  <span className="service">Business Planner</span>
                </span>
              </div>
            </SwiperSlide>

            <div className="rv-6-testimonial-slider-controls">
              <div
                className="rv-6-testimonial-slider-nav"
                id="rv-14-testimonial-slider-nav"
              >
                <button className="prev">
                  <img
                    src="assets/img/rv-14-slider-icon-1.png"
                    alt="nav icon"
                  />
                </button>
                <button className="next">
                  <img
                    src="assets/img/rv-14-slider-icon-2.png"
                    alt="nav icon"
                  />
                </button>
              </div>

              <div
                className="rv-6-testimonial__slider-pagination rv-14-testimonial__slider-pagination"
                id="rv-6-testimonial__slider-pagination"
              ></div>
            </div>
          </Swiper>
        </div>
      </div>
    </SectionAnimateYAxis>
  );
};

export default TestimonialSection5;
