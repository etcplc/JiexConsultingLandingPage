import { pricingData2 } from "@/data/Data";
import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const PricingSection2 = () => {
  return (
    <section className="rv-20-price_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="rv-20-price_section_heading">
              <CustomGsapHeaderAnimate>
                <p className="rv-20-price_sub_title rv-text-anime d-flex">
                  <span></span> Pricing Plan
                </p>
              </CustomGsapHeaderAnimate>
              <CustomGsapHeaderAnimate>
                <h2 className="rv-20-price_section_title rv-text-anime">
                  Limited-Time Promotions
                </h2>
              </CustomGsapHeaderAnimate>
            </div>
          </div>
        </div>
        <DivAnimateYAxis className="row">
          {pricingData2.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="rv-20-single_pricing_plan">
                <div className="rv-20-pricing_plan_header">
                  <h3 className="rv-20-pricing_plan_header_title">
                    {item.plan}
                  </h3>
                  <p className="rv-20-pricing_plan_header_desc">{item.desc}</p>
                </div>
                <h4 className="rv-20-pricing_plan_price">
                  ${item.price}
                  <sub>/MONTH</sub>
                </h4>

                <ul>
                  {item.benefits.map((benefit, index) => (
                    <li key={index}>
                      <i className="fal fa-arrow-to-right"></i>
                      {benefit}
                    </li>
                  ))}

                  <li>
                    <span className="rv-20-single_pricing_bg">
                      {" "}
                      <img src="assets/img/price/home-6-1.png" alt="image" />
                    </span>
                  </li>
                </ul>
                <a className="rv-20-pricing_plan_btn" href="">
                  Start Today
                </a>
              </div>
            </div>
          ))}
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default PricingSection2;
