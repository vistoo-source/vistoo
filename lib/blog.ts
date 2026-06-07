export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  published_at: string;
  status: string;
};

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function stripFirstHeading(html: string): string {
  return html.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/i, "").trim();
}

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
