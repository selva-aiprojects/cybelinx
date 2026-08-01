import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ slug: "nda-reference" }];
}

export default async function CaseStudyPage() {
  notFound();
}
