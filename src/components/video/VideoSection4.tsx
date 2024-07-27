"use client";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";

const VideoSection4 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <div className="rv-inner-video rv-10-infos__video">
      <div className="rv-5-video">
        <div className="container">
          <div className="outer-container">
            <span className="btn-wrapper">
              <a
                className="rv-5-video-btn"
                role="button"
                onClick={openVideoModal}
              >
                <i className="fa-solid fa-sharp fa-play"></i>
              </a>
            </span>
            <h3>Health Care & Beauty.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection4;
