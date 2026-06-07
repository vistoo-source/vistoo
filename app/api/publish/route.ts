import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { slugify } from "@/lib/blog";

type PublishBody = {
  title?: string;
  content?: string;
  excerpt?: string;
  slug?: string;
};

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

  let body: PublishBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const title = body.title?.trim();
  if (!title) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  const content = body.content?.trim() ?? "";
  const excerpt = body.excerpt?.trim() ?? "";
  const baseSlug = slugify(body.slug?.trim() || title);

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

    return NextResponse.json({ success: true, slug });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
