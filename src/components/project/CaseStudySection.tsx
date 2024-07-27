"use client";
import { caseStudyData } from "@/data/Data";
import React, { useState } from "react";
import { Autoplay, EffectFade, Mousewheel, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CaseStudySection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className="rv-14-case-studies">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Swiper
              className="rv-14-case-studies-img-slider overflow-visible"
              slidesPerView={1}
              effect="fade"
              spaceBetween={50}
              loop={true}
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
              modules={[EffectFade]}
            >
              {caseStudyData.map((item) => (
                <SwiperSlide className="rv-14-case-study__img " key={item.id}>
                  <img src={item.img} alt="Case Study Image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-6">
            <Swiper
              className="rv-14-case-studies-txt-slider"
              autoplay={true}
              autoHeight={true}
              direction="vertical"
              spaceBetween={50}
              slidesPerView={3}
              mousewheel={true}
              centeredSlides={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Thumbs, Mousewheel]}
            >
              {caseStudyData.map((item) => (
                <SwiperSlide className="rv-14-case-study__txt" key={item.id}>
                  <div className="rv-14-case-study__heading">
                    <div className="rv-14-case-study__icon">
                      <img src={item.icon} alt="Icon" />
                    </div>
                    <span className="rv-14-case-study__order">0{item.id}</span>
                  </div>

                  <div className="rv-14-case-study__bottom">
                    <span className="rv-3-project__sub-title">
                      {item.subTitle}
                    </span>
                    <h5 className="rv-14-case-study__title">{item.title}</h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
