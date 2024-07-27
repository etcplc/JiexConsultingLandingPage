import React from "react";
import CtaForm from "../form/CtaForm";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const CtaSection = () => {
  return (
    <section className="rv-14-cta rv-section-spacing">
      <DivAnimateYAxis className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="rv-14-cta__txt">
              <h6 className="rv-1-section__sub-title rv-text-anime">
                Our Newsletter
              </h6>

              <h2 className="rv-1-section__title rv-text-anime mb-0">
                Become a Member For Unique Updates!
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <CtaForm />
          </div>
        </div>
      </DivAnimateYAxis>
    </section>
  );
};

export default CtaSection;
