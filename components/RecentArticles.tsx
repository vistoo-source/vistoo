import { createSupabaseServerClient } from "@/lib/supabase/server";
import BlogCard from "@/components/BlogCard";

export const revalidate = 300;

async function getRecentArticles() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("articles")
    .select("id, title, slug, excerpt, published_at")
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
          <span className="kicker">Recursos</span>
          <h2 className="h2">Recursos para clínicas de estética</h2>
          <p className="section-sub">
            Dicas práticas de SEO e presença digital para o seu negócio
          </p>
        </div>
        <div className="blog__grid">
          {articles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
