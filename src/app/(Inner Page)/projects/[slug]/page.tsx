import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/components/error/ErrorSection";
import InnerLayout from "@/components/layout/InnerLayout";
import VideoModal from "@/components/modal/VideoModal";
import ProjectDetailSection from "@/components/portfolio/ProjectDetailSection";
import { projectData } from "@/data/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporata - Project Details Page",
  description: "Developed by Azizur Rahman",
};
export default function Home({ params }: { params: { slug: string } }) {
  const projectInfo = projectData.find((item) => item.slug === params.slug);
  return (
    <main className="rv-14-body">
      <InnerLayout>
        {projectInfo ? (
          <>
            <BreadcrumbSection title="Project Details" />
            <ProjectDetailSection
              title={projectInfo.title}
              id={projectInfo.id}
            />
            <VideoModal videoUrl="https://www.youtube.com/embed/IibDkSDNL3Y?si=MYzPiMAw66BG0eAO" />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}
