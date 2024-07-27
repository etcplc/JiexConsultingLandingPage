import React from "react";
import SectionAnimateYAxis from "../utils/SectionAnimateYAxis";

const StatSection = () => {
  return (
    <SectionAnimateYAxis className="rv-14-stats" visible>
      <div className="container">
        <div className="row g-4 row-cols-lg-4 row-cols-md-3 row-cols-2 row-cols-xxs-1 justify-content-center">
          <div className="col">
            <div className="rv-14-stat text-center text-lg-start">
              <h6 className="rv-14-stat__title rv-text-anime">
                Business Solution
              </h6>
              <h3 className="rv-14-stat__number rv-text-anime">2450+</h3>
            </div>
          </div>
          <div className="col">
            <div className="rv-14-stat text-center">
              <h6 className="rv-14-stat__title rv-text-anime">
                Years Experience
              </h6>
              <h3 className="rv-14-stat__number rv-text-anime">25+</h3>
            </div>
          </div>
          <div className="col">
            <div className="rv-14-stat text-center">
              <h6 className="rv-14-stat__title rv-text-anime">Expert Member</h6>
              <h3 className="rv-14-stat__number rv-text-anime">134+</h3>
            </div>
          </div>
          <div className="col">
            <div className="rv-14-stat rv-14-stat--last text-center text-lg-end">
              <h6 className="rv-14-stat__title rv-text-anime">
                Satisfied Clients
              </h6>
              <h3 className="rv-14-stat__number rv-text-anime">864+</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="rv-14-stats__vectors">
        <img src="assets/img/rv-14-stats-vector-1.png" alt="vector" />
        <img src="assets/img/rv-14-stats-vector-2.png" alt="vector" />
      </div>
    </SectionAnimateYAxis>
  );
};

export default StatSection;
