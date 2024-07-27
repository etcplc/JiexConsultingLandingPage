import { pricingData } from "@/data/Data";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const PricingSection = () => {
  return (
    <section className="rv-1-pricing rv-section-spacing">
      <div className="container">
        <div className="rv-1-section-heading">
          <h6 className="rv-1-section__sub-title rv-text-anime">
            pricing plans
          </h6>

          <h2 className="rv-1-section__title rv-text-anime">Buy Tickets</h2>
        </div>

        <div className="row rv-1-pricing__row justify-content-center">
          {pricingData.map((item) => (
            <DivAnimateYAxis
              className="col-lg-4 col-6 col-xxs-12"
              key={item.id}
              position={80}
              duration={1.2 + 0.2 * item.id}
            >
              <div className="rv-1-pricing-pack">
                <div className="rv-1-pricing-pack__heading">
                  <h6 className="rv-1-pricing-pack__sub-title">{item.title}</h6>

                  <h2 className="rv-1-pricing-pack__title">${item.price}</h2>
                </div>

                <div className="rv-1-pricing-pack__details">
                  <ul className="rv-1-pricng-pack__infos">
                    {item.services.map((info, index) => (
                      <li className="rv-1-pricing-pack__info" key={index}>
                        {info}
                      </li>
                    ))}
                  </ul>

                  <a href="#" className="rv-1-def-btn rv-1-pricing-pack__btn">
                    <span className="txt">Buy Ticket</span>
                    <span className="icon">
                      <img src="assets/img/rv-1-icon-1.png" alt="icon" />
                    </span>
                  </a>
                </div>
              </div>
            </DivAnimateYAxis>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
