"use client";
import { teamData5 } from "@/data/Data";
import Link from "next/link";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TeamSection5 = () => {
  return (
    <section className="rv-6-team">
      <DivAnimateYAxis className="container">
        <div className="rv-6-section__heading">
          <h6 className="rv-6-section__sub-title rv-text-anime">
            Meet Our Team
          </h6>
          <h2 className="rv-6-section__title rv-text-anime">
            Organizational Members
          </h2>
        </div>

        <Swiper
          className="rv-6-team__slider"
          autoplay={true}
          spaceBetween={15}
          slidesPerView={4}
          loop={true}
          autoHeight={true}
          pagination={{
            el: "#rv-6-team-slider-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              spaceBetween: 20,
            },
            1400: {
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {teamData5.map((item) => (
            <SwiperSlide className="rv-6-member" key={item.id}>
              <img src={item.img} alt="Member Image" />

              <div className="rv-6-member__txt">
                <h6 className="rv-6-member__role">{item.role}</h6>
                <h4 className="rv-6-member__name">{item.name}</h4>
                <div className="rv-6-member__socials rv-1-socials">
                  {item.socials.map((social, index) => (
                    <Link href={social.url} key={index}>
                      <i className={social.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div
            className="rv-2-swiper-dots"
            id="rv-6-team-slider-pagination"
          ></div>
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};

export default TeamSection5;
