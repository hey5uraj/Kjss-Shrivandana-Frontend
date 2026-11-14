import { notFound } from "next/navigation";
import { getAllPujas, getPujaBySlug } from "@/data";
import PujaDetailPage from "@/features/pages/PujaPage/PujaDetailPage/PujaDetailPage";

export function generateStaticParams() {
  return getAllPujas().map((puja) => ({ slug: puja.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puja = getPujaBySlug(slug);

  if (!puja) notFound();

  return <PujaDetailPage puja={puja} />;
}