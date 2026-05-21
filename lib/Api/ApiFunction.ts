import { notFound } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://localhost:3000/api";
export const fetchService = async (endpoint: string) => {
  const result = await fetch(`${baseUrl}/${endpoint}`, {
    cache: "no-store",
  });

  if (!result.ok) {
    return notFound();
  }

  return result.json();
};

export const fetchServiceBySlug = async (endpoint: string, slug: string) => {
  const result = await fetch(`${baseUrl}/${endpoint}/${slug}`, {
    cache: "no-store",
  });

  if (!result.ok) {
    return notFound();
  }

  return result.json();
};
