import { serviceData2 } from "@/data/Data";
import React from "react";
import Link from "next/link";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
const ServiceSection2 = () => {
  return (
    <section className="rv-14-services rv-section-spacing">
      <div className="container">
        <div className="row g-0 row-cols-md-3 row-cols-2 row-cols-xxs-1 overflow-hidden">
          {serviceData2.map((item) => {
            return (
              <DivAnimateYAxis
                className="col"
                key={item.id}
                duration={1.2 + 0.05 * item.id}
              >
                <div className="rv-14-service rv-inner-service">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
