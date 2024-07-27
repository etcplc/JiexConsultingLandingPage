import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import TeamSection2 from "@/components/team/TeamSection2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporata - Team Members Page",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-14-body team-inner-page">
      <InnerLayout>
        <BreadcrumbSection title="Team Members" />
        <TeamSection2 />
        <CtaSection />
      </InnerLayout>
    </main>
  );
}
