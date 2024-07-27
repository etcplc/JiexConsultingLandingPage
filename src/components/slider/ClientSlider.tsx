"use client";
import { clientData } from "@/data/Data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ClientSlider = () => {
  return (
    <section className="rv-6-clients">
      <DivAnimateYAxis className="container">
        <h6 className="rv-6-clients__title">
          3,400 Companies & Individuals Rely on Us.=
          <a href="#">View All Clients</a>
        </h6>
        <Swiper
          className="rv-6-clients__slider"
          autoplay={true}
          spaceBetween={30}
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              spaceBetween: 120,
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
        >
          {clientData.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="client Logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};

export default ClientSlider;
