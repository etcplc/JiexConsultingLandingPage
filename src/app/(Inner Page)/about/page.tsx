import React from "react";
import { Metadata } from "next";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import AboutSection from "@/components/about/AboutSection";
import SpeakerSlider from "@/components/slider/SpeakerSlider";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";

export const metadata: Metadata = {
  title: "Corporata - About Page",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="About" currentPage="About Us" />
        <AboutSection btnStyle="rv-inner-about-btn" />
        <SpeakerSlider />
        <CtaSection />
      </InnerLayout>
    </main>
  );
}
