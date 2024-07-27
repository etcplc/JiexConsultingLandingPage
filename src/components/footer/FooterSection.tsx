import Link from "next/link";
import React from "react";
import FooterBottom from "./FooterBottom";
import NewsletterForm from "../form/NewsletterForm";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
const FooterSection = () => {
  return (
    <footer className="rv-1-footer">
      <div className="container">
        <DivAnimateXAxis className="rv-1-footer-top" position={80}>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="rv-1-footer__about">
                <Link href="/">
                  <img
                    src="assets/img/logo-main-white.png"
                    alt="Logo"
                    className="logo"
                  />
                </Link>
                <p className="rv-1-footer__about-txt">
                  Mauris justo mi, volutpat a lacus eget, laoreet vehicula
                  augue.
                </p>
                <div className="rv-1-socials">
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

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="rv-1-footer-widget">
                <h5 className="rv-1-footer-widget__title">Quick Links</h5>
                <ul className="rv-1-footer-widget__links">
                  <li>
                    <a href="#">Schedule</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="rv-1-footer-widget">
                <h5 className="rv-1-footer-widget__title">Contact Us</h5>
                <ul className="rv-1-footer-widget__infos">
                  <li>
                    <img src="assets/img/rv-1-icon-6.png" alt="icon" /> 24th St,
                    New York, NY
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

            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="rv-1-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Newsletter</h5>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </DivAnimateXAxis>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterSection;
