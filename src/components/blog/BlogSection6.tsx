"use client";
import { blogData4 } from "@/data/Data";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSection6 = () => {
  return (
    <section className="rv-6-blogs rv-14-blogs rv-section-spacing">
      <DivAnimateYAxis className="container">
        <div className="rv-3-section-heading">
          <div className="rv-6-section-heading__left">
            <h6 className="rv-14-section__sub-title rv-text-anime">
              Blogs & News
            </h6>
            <h2 className="rv-7-section__title rv-text-anime">
              Latest News & Article
            </h2>
          </div>

          <div className="rv-3-section-heading__right">
            <div className="rv-1-slider-nav" id="rv-14-blogs__slider-nav">
              <button className="prev">
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button className="next">
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <Swiper
          className="rv-14-blogs__slider overflow-visible"
          autoplay={true}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            prevEl: "#rv-14-blogs__slider-nav .prev",
            nextEl: "#rv-14-blogs__slider-nav .next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            992: {
              slidesPerView: 1.6,
              centeredSlides: true,
            },
            1200: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {blogData4.slice(4, 7).map((item) => (
            <SwiperSlide
              className="rv-1-blog rv-6-blog rv-14-blog"
              key={item.id}
            >
              <div className="rv-6-blog__txt rv-14-blog__txt">
                <ul className="rv-14-blog__infos">
                  <li>Articles</li>
                  <li>
                    <i className="fa-light fa-calendar-days"></i> {item.date}
                  </li>
                </ul>
                <h4 className="rv-14-blog__title">
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </h4>
                <Link href={`/blog/${item.slug}`} className="rv-14-blog__btn">
                  Read More <i className="fa-light fa-arrow-up-right"></i>
                </Link>
              </div>

              <div className="rv-6-blog__img">
                <img src={item.img} alt="Blog Image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};

export default BlogSection6;
