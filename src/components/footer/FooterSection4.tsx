import Link from "next/link";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import NewsletterForm2 from "../form/NewsletterForm2";

const FooterSection4 = () => {
  return (
    <footer className="rv-inner-footer">
      <div className="container">
        <DivAnimateYAxis className="rv-8-footer-middle">
          <div className="row g-4 justify-content-xl-between justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-8 col-xxs-12">
              <div className="rv-1-footer__about">
                <Link href="/">
                  <img
                    src="/assets/img/logo-main-white.png"
                    alt="Logo"
                    className="logo"
                  />
                </Link>
                <p className="rv-1-footer__about-txt">
                  Morbi pharetra, eros sed euismod pellentesque, nulla risus
                  lobortis.
                </p>
                <div className="rv-1-socials rv-inner-socials">
                  <Link href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-6 col-xxs-12">
              <div className="rv-1-footer-widget rv-inner-footer-widget">
                <h5 className="rv-1-footer-widget__title">Useful Links</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Latest Work</Link>
                  </li>
                  <li>
                    <Link href="#">Team Member</Link>
                  </li>
                  <li>
                    <Link href="#">Latest Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-6 col-xxs-12">
              <div className="rv-1-footer-widget rv-inner-footer-widget">
                <h5 className="rv-1-footer-widget__title">Our Services</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <Link href="#">SEO Optimization</Link>
                  </li>
                  <li>
                    <Link href="#">Content Marketing</Link>
                  </li>
                  <li>
                    <Link href="#">Data Analysis</Link>
                  </li>
                  <li>
                    <Link href="#">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="#">Web Analytics</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-5 col-md-6 col-8 col-xxs-12">
              <div className="rv-1-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Newsletter Signup</h5>
                <NewsletterForm2 />
              </div>
            </div>
          </div>
        </DivAnimateYAxis>

        <div className="rv-2-footer rv-8-footer-bottom">
          <div className="row gy-3 align-items-center">
            <DivAnimateXAxis position={-60} className="col-md-8">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} Codebasket All Rights Reserved
                by site
              </p>
            </DivAnimateXAxis>
            <DivAnimateXAxis
              position={60}
              className="col-md-4 text-center text-md-end"
            >
              <div className="rv-2-footer__nav">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Term of Service</Link>
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection4;
