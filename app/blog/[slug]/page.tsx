import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogNav from "@/components/BlogNav";
import { formatArticleDate, type Article } from "@/lib/blog";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

async function getArticle(slug: string): Promise<Article | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("articles")
    .select("id, title, slug, content, excerpt, published_at, status")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch article:", error.message);
    return null;
  }

  return data;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: "Artigo não encontrado — Vistoo" };
  }

  const description =
    article.excerpt ||
    article.content?.replace(/<[^>]+>/g, "").slice(0, 160) ||
    article.title;

  return {
    title: `${article.title} — Vistoo`,
    description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description,
      type: "article",
      publishedTime: article.published_at,
      url: `https://vistoo.pt/blog/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  return (
    <>
      <BlogNav />
      <main className="blog blog--article">
        <div className="container blog-article">
          <Link href="/blog" className="blog-article__back link-quiet">
            ← Voltar ao blog
          </Link>
          <header className="blog-article__head">
            <time
              className="blog-article__date"
              dateTime={article.published_at}
            >
              {formatArticleDate(article.published_at)}
            </time>
            <h1 className="blog-article__title">{article.title}</h1>
          </header>
          {article.content && (
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          )}
        </div>
      </main>
    </>
  );
}
