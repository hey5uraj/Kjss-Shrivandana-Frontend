import { notFound } from "next/navigation";
import { TEMPLES } from "@/data/temples";
import TempleDetailsPage from "@/features/pages/TemplesPage/TempleDetailsPage/TempleDetailsPage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return TEMPLES.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const temple = TEMPLES.find((t) => t.id === id);
  if (!temple) return { title: "Temple not found" };
  return {
    title: `${temple.name} | Temples`,
    description: temple.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  if (!TEMPLES.some((t) => t.id === id)) notFound();
  return <TempleDetailsPage id={id} />;
}