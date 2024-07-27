import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const AboutSection5 = () => {
  return (
    <section className="rv-6-about pt-60 pb-60">
      <DivAnimateYAxis className="container">
        <div className="row gy-4 gy-sm-5 align-items-center">
          <div className="col-lg-6">
            <div className="rv-6-about__txt">
              <div className="rv-6-section__heading">
                <h6 className="rv-6-section__sub-title rv-text-anime">
                  New Business Plan
                </h6>
                <h2 className="rv-6-section__title rv-text-anime">
                  The Superior Remedy For Your Organization.
                </h2>
              </div>
              <p className="rv-6-about__descr">
                Fusce egestas viverra libero eu elementum. Maecenas sit amet
                lorem nec ero ullamcorper Vivamus finibus lacinia erat,
                tristique ligula odio maximus ultricies fermentum egestas.
              </p>

              <ul className="rv-5-about__features rv-6-about__features">
                <li className="rv-5-about__feature">Business Planning</li>
                <li className="rv-5-about__feature">Wealth Managements</li>
                <li className="rv-5-about__feature">Treasury instruments</li>
                <li className="rv-5-about__feature">Consulting Services</li>
              </ul>

              <div className="rv-5-about__btns rv-6-about__btns">
                <a href="#" className="rv-6-def-btn">
                  More About <i className="fa-regular fa-arrow-up-right"></i>
                </a>
                <div className="rv-5-about__call rv-6-about__call">
                  <span className="rv-5-about__call-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div className="rv-5-about__call-txt">
                    <a href="tel:123654564388" className="">
                      (123) 654 - 5643 88
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rv-6-about__img">
              <img src="assets/img/rv-6-about-img-1.jpg" alt="Image" />
              <img src="assets/img/rv-6-about-img-2.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </DivAnimateYAxis>
    </section>
  );
};

export default AboutSection5;
