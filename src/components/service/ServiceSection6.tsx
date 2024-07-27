import { serviceData2 } from "@/data/Data";
import Link from "next/link";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection6 = () => {
  const serviceData = serviceData2.slice(0, 4);
  return (
    <section className="rv-14-services rv-section-spacing">
      <DivAnimateYAxis className="container">
        <div className="rv-3-section-heading rv-14-section__heading">
          <div className="rv-3-section-heading__left">
            <h6 className="rv-14-section__sub-title rv-text-anime">
              Business Services
            </h6>
            <h2 className="rv-7-section__title rv-text-anime">
              Specialized Domains Where Our Great Team Shines
            </h2>
            <p className="rv-14-section__descr rv-text-anime">
              habitats plateau dictums Quisqueya cursus, dictum orca pharetra
            </p>
          </div>

          <div className="rv-3-section-heading__right">
            <a href="#" className="rv-10-def-btn rv-14-def-btn">
              View Services <i className="fa-regular fa-arrow-up-right"></i>
            </a>
          </div>
        </div>

        <div className="row g-0 align-items-center justify-content-center rv-14-services-row">
          {serviceData.map((item, index) => (
            <DivAnimateYAxis
              className="col-xl-3 col-lg-4 col-sm-6 col-9 col-xxs-12"
              key={index}
              duration={index * 0.2 + 1.2}
            >
              <div
                className={`rv-14-service ${
                  index + 1 === serviceData.length ? "rv-14-service--last" : ""
                }`}
              >
                <div className="rv-14-service__icon">
                  <item.icon />
                </div>
                <h4 className="rv-14-service__title">
                  <Link href={`/services/${item.slug}`}>{item.title}</Link>
                </h4>
                <p className="rv-3-service__descr">{item.description}</p>
                <Link
                  href={`/services/${item.slug}`}
                  className="rv-14-service__btn"
                >
                  Read More <i className="fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </DivAnimateYAxis>
          ))}
        </div>
      </DivAnimateYAxis>
    </section>
  );
};

export default ServiceSection6;
