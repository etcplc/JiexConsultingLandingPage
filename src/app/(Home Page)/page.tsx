import AboutSection6 from "@/components/about/AboutSection6";
import BannerSection8 from "@/components/banner/BannerSection8";
import BlogSection6 from "@/components/blog/BlogSection6";
import CtaSection from "@/components/cta/CtaSection";
import FooterSection8 from "@/components/footer/FooterSection8";
import HeaderSection7 from "@/components/header/HeaderSection7";
import SearchFormModal from "@/components/modal/SearchFormModal";
import VideoModal from "@/components/modal/VideoModal";
import CaseStudySection from "@/components/project/CaseStudySection";
import ServiceSection6 from "@/components/service/ServiceSection6";
import StatSection from "@/components/stats/StatSection";
import TeamSection6 from "@/components/team/TeamSection6";
import TestimonialSection5 from "@/components/testimonial/TestimonialSection5";
import VideoSection7 from "@/components/video/VideoSection7";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporata - Homepage 1",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-4-body">
      <HeaderSection7 />
      <BannerSection8 />
      <ServiceSection6 />
      <AboutSection6 />
      <StatSection />
      <CtaSection />
      <CaseStudySection />
      <TeamSection6 />
      <TestimonialSection5 />
      <VideoSection7 />
      <BlogSection6 />
      <FooterSection8 />
      {/* Modal */}
      <SearchFormModal />
      <VideoModal videoUrl="https://www.youtube.com/embed/TboWOSW7qCI?si=Tai9q8LZqyR5R9e6" />
    </main>
  );
}
