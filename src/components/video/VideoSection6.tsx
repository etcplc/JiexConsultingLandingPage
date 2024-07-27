"use client";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";

const VideoSection6 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <div className="rv-5-video rv-6-video text-center">
      <div className="container">
        <span>
          <a onClick={openVideoModal}>
            <i className="fa-solid fa-sharp fa-play"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default VideoSection6;
