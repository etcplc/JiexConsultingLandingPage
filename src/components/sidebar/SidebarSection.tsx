import Link from "next/link";
import { RefObject } from "react";
type Props = {
  isSidebarOpen: boolean;
  sidebarRef: RefObject<HTMLDivElement>;
};
const SidebarSection = ({ isSidebarOpen, sidebarRef }: Props) => {
  return (
    <div
      className={`rv-2-sidebar rv-1-header ${isSidebarOpen ? "active" : ""}`}
      ref={sidebarRef}
    >
      <div className="rv-2-sidebar__logo-container">
        <Link href="/">
          <img src="assets/img/logo-2.png" alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="rv-2-sidebar__nav rv-1-header__nav">
        <ul>
          <li data-to-scrollspy-id="home">
            <Link href="#home">HOME</Link>

            <ul className="sub-menu rv-mega-menu">
              <li>
                <Link href="/">Event</Link>
              </li>
              <li>
                <Link href="/home-2">Personal Portfolio</Link>
              </li>
              <li>
                <Link href="/home-3">Wedding Planner</Link>
              </li>
              <li>
                <Link href="/home-4">Gardening</Link>
              </li>
              <li>
                <Link href="/home-5">Herbal Tea</Link>
              </li>
              <li>
                <Link href="/home-6">ECO</Link>
              </li>
            </ul>
          </li>
          <li data-to-scrollspy-id="about">
            <Link href="#about">ABOUT US</Link>
          </li>
          <li data-to-scrollspy-id="history">
            <Link href="#history">HISTORY</Link>
          </li>
          <li data-to-scrollspy-id="skills">
            <Link href="#skills">SKILLS</Link>
          </li>
          <li data-to-scrollspy-id="portfolio">
            <Link href="#portfolio">PORTFOLIO</Link>
          </li>
          <li data-to-scrollspy-id="award">
            <Link href="#award">AWARDS</Link>
          </li>
          <li data-to-scrollspy-id="playing">
            <Link href="#playing">PLAYING</Link>
          </li>
          <li data-to-scrollspy-id="blog">
            <Link href="#blog">BLOG</Link>
          </li>
          <li data-to-scrollspy-id="contact">
            <Link href="#contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      <div className="rv-2-sidebar__socials">
        <div className="rv-1-socials rv-2-socials">
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
  );
};

export default SidebarSection;
