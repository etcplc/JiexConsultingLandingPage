import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/components/error/ErrorSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { blogData4 } from "@/data/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporata - Blog Details Page",
  description: "Developed by Azizur Rahman",
};
export default function Home({ params }: { params: { slug: string } }) {
  const blogInfo = blogData4.find((item) => item.slug === params.slug);
  return (
    <main className="rv-14-home">
      <InnerLayout>
        {blogInfo ? (
          <>
            <BreadcrumbSection title="Blog Details" />
            <BlogDetailSection
              img={blogInfo.img}
              title={blogInfo.title}
              id={blogInfo.id}
            />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}
