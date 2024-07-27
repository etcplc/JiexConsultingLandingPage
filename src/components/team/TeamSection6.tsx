"use client";
import { teamData6 } from "@/data/Data";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TeamSection6 = () => {
  return (
    <section className="rv-14-team rv-section-spacing">
      <DivAnimateYAxis className="container">
        <div className="rv-6-section__heading rv-14-section__heading rv-14-team__heading">
          <h6 className="rv-14-section__sub-title">Our Team</h6>
          <h2 className="rv-7-section__title">
            Uncovering Fresh Trends & Business Tactics
          </h2>
        </div>

        <Swiper
          className="rv-14-team__slider"
          spaceBetween={20}
          slidesPerView={1.3}
          autoplay={true}
          breakpoints={{
            0: {
              centeredSlides: true,
            },
            480: {
              centeredSlides: true,
              slidesPerView: 1.8,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              centeredSlides: true,
              slidesPerView: 2.3,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
            1200: {
              spaceBetween: 45,
              slidesPerView: 3,
            },
            1400: {
              spaceBetween: 60,
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          {teamData6.map((item) => (
            <SwiperSlide className="rv-14-member swiper-slide" key={item.id}>
              <div className="rv-14-member__img">
                <img src={item.img} alt="Member Image" />
              </div>

              <div className="rv-14-member__txt">
                <div>
                  <h6 className="rv-6-member__role">{item.role}</h6>
                  <h4 className="rv-6-member__name">
                    <a href="#">{item.name}</a>
                  </h4>
                </div>
                <div className="rv-14-member__socials rv-1-socials">
                  {item.socials.map((social) => (
                    <Link href={social.url} key={social.socialId}>
                      <i className={social.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};

export default TeamSection6;
