import ErrorMain from "@/components/main/ErrorMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revel 404 Page",
  description: "Developed by Azizur Rahman",
};
export default function NotFound() {
  return <ErrorMain />;
}
