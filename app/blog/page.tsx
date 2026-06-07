import type { Metadata } from "next";
import Link from "next/link";
import BlogNav from "@/components/BlogNav";
import { formatArticleDate, type Article } from "@/lib/blog";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Blog — Vistoo",
  description:
    "Artigos sobre websites, SEO local e marketing digital para clínicas de estética em Portugal.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 60;

async function getArticles(): Promise<Article[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("articles")
    .select("id, title, slug, excerpt, published_at, status, content")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch articles:", error.message);
    return [];
  }

  return data ?? [];
}

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <>
      <BlogNav />
      <main className="blog">
        <div className="container">
          <div className="blog__head section-head">
            <span className="kicker">Blog</span>
            <h1 className="h2">Dicas para clínicas de estética</h1>
            <p className="section-sub">
              SEO local, websites e estratégias para atrair mais pacientes online.
            </p>
          </div>

          {articles.length === 0 ? (
            <p className="blog__empty">Ainda não há artigos publicados.</p>
          ) : (
            <div className="blog__grid">
              {articles.map((article) => (
                <article key={article.id} className="blog-card">
                  <time
                    className="blog-card__date"
                    dateTime={article.published_at}
                  >
                    {formatArticleDate(article.published_at)}
                  </time>
                  <h2 className="blog-card__title">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  {article.excerpt && (
                    <p className="blog-card__excerpt">{article.excerpt}</p>
                  )}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="blog-card__link"
                  >
                    Ler artigo →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
