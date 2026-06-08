import Link from "next/link";
import { formatArticleDate } from "@/lib/blog";

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt: string | null;
  published_at: string;
};

export default function BlogCard({ title, slug, excerpt, published_at }: BlogCardProps) {
  return (
    <article className="blog-card">
      <time className="blog-card__date" dateTime={published_at}>
        {formatArticleDate(published_at)}
      </time>
      <h2 className="blog-card__title">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      {excerpt && <p className="blog-card__excerpt">{excerpt}</p>}
      <Link href={`/blog/${slug}`} className="blog-card__link">
        Ler artigo →
      </Link>
    </article>
  );
}
