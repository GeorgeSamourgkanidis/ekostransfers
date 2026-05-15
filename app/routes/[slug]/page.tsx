import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { ROUTES } from "@/lib/routes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ROUTES.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = ROUTES.find((r) => r.slug === slug);

  if (!route) return {};

  return {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    openGraph: {
      title: `${route.title} | EKOS TRANSFERS`,
      description: route.description,
    },
  };
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params;
  const route = ROUTES.find((r) => r.slug === slug);
  if (!route) return permanentRedirect("/services");

  return permanentRedirect("/services");
}
