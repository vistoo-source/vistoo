import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type RecentArticle = {
  title: string;
  slug: string;
  published_at: string;
};

async function getRecentArticles(): Promise<RecentArticle[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("articles")
    .select("title, slug, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Failed to fetch recent articles:", error.message);
    return [];
  }

  return data ?? [];
}

export default async function RecentArticles() {
  const articles = await getRecentArticles();

  if (articles.length === 0) return null;

  return (
    <section className="recent-articles">
      <div className="container">
        <div className="section-head">
          <h2 className="h2">Recursos para clínicas de estética</h2>
          <p className="section-sub">
            Dicas práticas de SEO e presença digital para o seu negócio
          </p>
        </div>
        <div className="recent-articles__grid">
          {articles.map((article) => (
            <article key={article.slug} className="recent-articles__card">
              <h3 className="recent-articles__title">{article.title}</h3>
              <Link
                href={`/blog/${article.slug}`}
                className="recent-articles__link"
              >
                Ler mais →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
