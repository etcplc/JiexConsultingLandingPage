import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/components/error/ErrorSection";
import InnerLayout from "@/components/layout/InnerLayout";
import ServiceDetails from "@/components/service/ServiceDetails";
import { serviceData2 } from "@/data/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporata - Service Details Page",
  description: "Developed by Azizur Rahman",
};
export default function Home({ params }: { params: { slug: string } }) {
  const serviceInfo = serviceData2.find((item) => item.slug === params.slug);
  return (
    <main className="rv-14-body">
      <InnerLayout>
        {serviceInfo ? (
          <>
            <BreadcrumbSection title="Service Details" />
            <ServiceDetails img={serviceInfo?.img} title={serviceInfo?.title} />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}
