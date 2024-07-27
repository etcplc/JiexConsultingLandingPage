import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const FooterBottom = () => {
  return (
    <div className="rv-1-footer-bottom">
      <div className="row gy-3">
        <div className="col-md-8">
          <p className="rv-1-copyright m-0 text-center text-md-start">
            &copy; {new Date().getFullYear()} Revel All Rights Reserved by
            CodeBasket
          </p>
        </div>

        <DivAnimateYAxis
          className="col-md-4 text-center text-md-end"
          position={-60}
        >
          <img src="assets/img/payment_method.png" alt="Payment Method image" />
        </DivAnimateYAxis>
      </div>
    </div>
  );
};

export default FooterBottom;
