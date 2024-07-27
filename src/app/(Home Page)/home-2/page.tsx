import AboutSection5 from "@/components/about/AboutSection5";
import BannerSection7 from "@/components/banner/BannerSection7";
import BlogSection5 from "@/components/blog/BlogSection5";
import FooterSection7 from "@/components/footer/FooterSection7";
import HeaderSection6 from "@/components/header/HeaderSection6";
import SearchFormModal from "@/components/modal/SearchFormModal";
import VideoModal from "@/components/modal/VideoModal";
import ServiceSection5 from "@/components/service/ServiceSection5";
import ClientSlider from "@/components/slider/ClientSlider";
import TeamSection5 from "@/components/team/TeamSection5";
import TestimonialSection4 from "@/components/testimonial/TestimonialSection4";
import VideoSection6 from "@/components/video/VideoSection6";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporata - Homepage 2",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-6-body">
      <HeaderSection6 />
      <BannerSection7 />
      <ServiceSection5 />
      <AboutSection5 />
      <TeamSection5 />
      <TestimonialSection4 />
      <VideoSection6 />
      <ClientSlider />
      <BlogSection5 />
      <FooterSection7 />
      {/* Modal */}
      <SearchFormModal />
      <VideoModal videoUrl="https://www.youtube.com/embed/IibDkSDNL3Y?si=MYzPiMAw66BG0eAO" />
    </main>
  );
}
