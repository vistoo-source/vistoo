import type { MetadataRoute } from "next";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const BASE_URL = "https://vistoo.pt";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  try {
    const supabase = createSupabaseServerClient();
    const { data: articles } = await supabase
      .from("articles")
      .select("slug, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    const articlePages: MetadataRoute.Sitemap = (articles ?? []).map(
      (article) => ({
        url: `${BASE_URL}/blog/${article.slug}`,
        lastModified: article.published_at
          ? new Date(article.published_at)
          : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })
    );

    return [...staticPages, ...articlePages];
  } catch {
    return staticPages;
  }
}
