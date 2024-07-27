"use client";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";

const VideoSection7 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <div className="rv-14-video text-center">
      <div className="container">
        <a onClick={openVideoModal}>
          <i className="fa-thin fa-sharp fa-play">
            <span className="stroke-1"></span>
            <span className="stroke-2"></span>
            <span className="stroke-3"></span>
          </i>
        </a>
      </div>
    </div>
  );
};

export default VideoSection7;
