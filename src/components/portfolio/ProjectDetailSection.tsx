import React from "react";
import VideoSection from "../video/VideoSection";
import { projectData } from "@/data/Data";
import Link from "next/link";
import ProjectDetailSlider from "../slider/ProjectDetailSlider";
import ProjectDetailText from "./ProjectDetailText";
import ProjectDetailFeature from "./ProjectDetailFeature";
import ProjectDetailBottomSection from "./ProjectDetailBottomSection";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  title: string;
  id: number;
};
const ProjectDetailSection = ({ title, id }: Props) => {
  const prevProject = projectData.find((item) => item.id === id - 1);
  const nextProject = projectData.find((item) => item.id === id + 1);
  return (
    <section className="rv-project-details rv-section-spacing">
      <div className="container">
        <ProjectDetailSlider />

        <ProjectDetailText title={title} />

        <ProjectDetailFeature />
      </div>

      <VideoSection innerPage />

      <div className="container">
        <ProjectDetailBottomSection />
      </div>

      <div className="container">
        <DivAnimateYAxis className="rv-project-details-bottom-navs mt-30">
          <div className="row gy-0">
            <div className="col-md-6 col-12">
              <Link
                href={prevProject ? `/projects/${prevProject.slug}` : "#"}
                className="rv-project-details-bottom-nav"
              >
                <span
                  className={`rv-project-details-bottom-nav-arrow ${
                    prevProject ? "" : "disabled-icon"
                  }`}
                >
                  <i className="fa-sharp fa-regular fa-arrow-left"></i>
                </span>
                <div className="rv-project-details-bottom-nav-txt">
                  <span className="rv-project-details-bottom-nav-subtitle">
                    Prev Project
                  </span>
                  <h4 className="rv-project-details-bottom-nav-title">
                    {prevProject?.title}
                  </h4>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-12 text-end">
              <Link
                href={nextProject ? `/projects/${nextProject.slug}` : "#"}
                className="rv-project-details-bottom-nav rv-project-details-bottom-nav-next justify-content-end"
              >
                <div className="rv-project-details-bottom-nav-txt">
                  <span className="rv-project-details-bottom-nav-subtitle">
                    Next Project
                  </span>
                  <h4 className="rv-project-details-bottom-nav-title">
                    {nextProject?.title}
                  </h4>
                </div>
                <span className="rv-project-details-bottom-nav-arrow">
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default ProjectDetailSection;
