"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  position?: number;
  visible?: boolean;
};
const SectionAnimateYAxis = ({
  children,
  className,
  duration,
  position,
  visible,
}: Props) => {
  return (
    <motion.section
      className={className ? className : ""}
      initial={{
        y: `${position ? position : 60}`,
        opacity: visible ? 1 : 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: `${duration ? duration : 1.2}`,
        ease: "easeIn",
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.section>
  );
};

export default SectionAnimateYAxis;
