import AboutSection from "@/components/about/AboutSection";
import BannerSection from "@/components/banner/BannerSection";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection from "@/components/header/HeaderSection";
import VideoModal from "@/components/modal/VideoModal";
import PricingSection from "@/components/pricing/PricingSection";
import ScheduleSection from "@/components/schedule/ScheduleSection";
import BlogSlider from "@/components/slider/BlogSlider";
import GallerySlider from "@/components/slider/GallerySlider";
import SpeakerSlider from "@/components/slider/SpeakerSlider";
import VideoSection from "@/components/video/VideoSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporata - Homepage 3",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-1-body">
      <HeaderSection />
      <BannerSection />
      <AboutSection />
      <SpeakerSlider />
      <ScheduleSection />
      <VideoSection />
      <PricingSection />
      <GallerySlider />
      <BlogSlider />
      <FooterSection />
      <VideoModal videoUrl="https://www.youtube.com/embed/IibDkSDNL3Y?si=MYzPiMAw66BG0eAO" />
    </main>
  );
}
