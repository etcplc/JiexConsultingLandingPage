import Link from "next/link";
import React from "react";

const FooterSection6 = () => {
  return (
    <footer className="rv-1-footer rv-3-footer rv-12-footer rv-12-infos p-0">
      <div className="container">
        <div className="rv-1-footer-top">
          <div className="row gy-5 justify-content-xl-between justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="rv-1-footer__about">
                <Link href="/">
                  <img
                    src="assets/img/rv-12-logo-light.png"
                    alt="Logo"
                    className="logo"
                  />
                </Link>
                <p className="rv-1-footer__about-txt">
                  Mauris justo mi, volutpat a lacus eget, laoreet vehicula
                  augue.
                </p>
                <div className="rv-1-socials rv-12-socials">
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-8 order-1 order-md-2 order-lg-1">
              <div className="row gy-4">
                <div className="col-md-4 col-6 col-xxs-12">
                  <div className="rv-1-footer-widget rv-12-footer-widget">
                    <h5 className="rv-1-footer-widget__title">Support</h5>
                    <ul className="rv-1-footer-widget__links">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#">Terms of Services</Link>
                      </li>
                      <li>
                        <Link href="#">Refund Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 col-6 col-xxs-12">
                  <div className="rv-1-footer-widget rv-12-footer-widget">
                    <h5 className="rv-1-footer-widget__title">Policies</h5>
                    <ul className="rv-1-footer-widget__links">
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Refund Policy</a>
                      </li>
                      <li>
                        <a href="#">Our Sitemap</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 col-6 col-xxs-12">
                  <div className="rv-1-footer-widget rv-12-footer-widget">
                    <h5 className="rv-1-footer-widget__title">Contact Us</h5>
                    <ul className="rv-1-footer-widget__infos">
                      <li>
                        <img src="assets/img/rv-1-icon-6.png" alt="icon" /> 24th
                        St, New York, NY
                      </li>
                      <li>
                        <img src="assets/img/rv-1-icon-7.png" alt="icon" />{" "}
                        <a href="tel:+12365858988">+123 658 589 88</a>
                      </li>
                      <li>
                        <img src="assets/img/rv-1-icon-8.png" alt="icon" />{" "}
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 order-2 order-md-1 order-lg-2">
              <div className="rv-1-footer-nwsltr rv-3-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Newsletter</h5>
                <form
                  action="#"
                  className="rv-1-footer-nwsltr__form rv-3-footer-nwsltr__form rv-12-footer-nwsltr__form"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email..."
                    required
                  />
                  <button className="rv-1-def-btn">
                    <span className="txt">Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="rv-1-footer-bottom">
          <div className="row gy-3">
            <div className="col-md-8">
              <p className="rv-1-copyright m-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} All Rights Reserved by site
              </p>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <img
                src="assets/img/payment_method.png"
                alt="Payment Method image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rv-12-infos__vectors">
        <img
          src="assets/img/rv-12-infos-vector.png"
          alt="vector"
          className="rv-12-infos-vector"
        />
      </div>
      <div className="rv-12-infos__vectors rv-12-infos__vectors--2">
        <img
          src="assets/img/rv-12-infos-vector.png"
          alt="vector"
          className="rv-12-infos-vector"
        />
      </div>
    </footer>
  );
};

export default FooterSection6;
