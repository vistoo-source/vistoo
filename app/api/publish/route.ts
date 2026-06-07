import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { slugify } from "@/lib/blog";

type ArticleFields = {
  title?: string;
  article_title?: string;
  name?: string;
  content?: string;
  content_html?: string;
  html_content?: string;
  body?: string;
  article_content?: string;
  excerpt?: string;
  meta_description?: string;
  slug?: string;
};

type PublishBody = ArticleFields & {
  event_type?: string;
  data?: {
    article?: ArticleFields;
  };
};

function pickString(...values: (string | undefined)[]): string | undefined {
  for (const value of values) {
    const trimmed = value?.trim();
    if (trimmed) return trimmed;
  }
  return undefined;
}

function getAuthToken(request: NextRequest): string | null {
  const auth = request.headers.get("authorization");
  if (!auth) return null;
  if (auth.startsWith("Bearer ")) return auth.slice(7);
  return auth;
}

async function uniqueSlug(
  supabase: ReturnType<typeof createSupabaseAdminClient>,
  base: string
): Promise<string> {
  let slug = base;
  let suffix = 2;

  while (true) {
    const { data } = await supabase
      .from("articles")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (!data) return slug;
    slug = `${base}-${suffix}`;
    suffix++;
  }
}

export async function POST(request: NextRequest) {
  let body: PublishBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  console.log("SEOForge payload:", JSON.stringify(body));

  const secret = process.env.WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "WEBHOOK_SECRET not configured" },
      { status: 500 }
    );
  }

  const token = getAuthToken(request);
  if (!token || token !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const article = body.data?.article;
  const src = { ...body, ...article };

  const title = pickString(src.title, src.article_title, src.name);
  if (!title) {
    return NextResponse.json(
      { error: "title is required (title, article_title, or name)" },
      { status: 400 }
    );
  }

  const content =
    pickString(
      src.content_html,
      src.content,
      src.html_content,
      src.body,
      src.article_content
    ) ?? "";
  const excerpt =
    pickString(src.meta_description, src.excerpt) ?? "";
  const baseSlug = slugify(src.slug?.trim() || title);

  if (!baseSlug) {
    return NextResponse.json(
      { error: "Could not generate a valid slug" },
      { status: 400 }
    );
  }

  try {
    const supabase = createSupabaseAdminClient();
    const slug = await uniqueSlug(supabase, baseSlug);

    const { error } = await supabase.from("articles").insert({
      title,
      slug,
      content,
      excerpt,
      status: "published",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    revalidatePath("/");
    revalidatePath("/blog");

    return NextResponse.json({ success: true, slug });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
