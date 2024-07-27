"use client";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";

const VideoSection5 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section className="rv-20-video_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-7 col-sm-7">
            <div className="rv-20-video_section_heading">
              <CustomGsapHeaderAnimate>
                <p className="rv-20-video_sub_title rv-text-anime d-flex">
                  <span></span> More Information
                </p>
              </CustomGsapHeaderAnimate>
              <CustomGsapHeaderAnimate>
                <h2 className="rv-20-video_section_title rv-text-anime">
                  Uncomplicated Garden Care Services by Us.
                </h2>
              </CustomGsapHeaderAnimate>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-sm-5">
            <div className="rv-20-video_button">
              <BounceAnimatedBtn>
                <a
                  className="video_btn my-video-links"
                  role="button"
                  onClick={openVideoModal}
                >
                  <i className="fas fa-play"></i>
                </a>
              </BounceAnimatedBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection5;
