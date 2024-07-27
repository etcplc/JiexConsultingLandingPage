"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const mousemoveHandler = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;

    gsap.to({}, 0.005, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower, {
          left: posX - 12,
          top: posY - 12,
        });

        gsap.set(cursor, {
          left: mouseX,
          top: mouseY,
        });
      },
    });

    const handleMouseEnter = () => {
      cursor?.classList.add("active");
      follower?.classList.add("active");
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove("active");
      follower?.classList.remove("active");
    };

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
      document.querySelectorAll("a, button").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default Cursor;
