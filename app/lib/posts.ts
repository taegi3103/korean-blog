// app/lib/posts.ts
import fs from "node:fs";
import path from "node:path";

export type Post = {
  tags?: string[];
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "_posts"); // ✅ repo 루트의 /_posts 폴더

const norm = (s: string) =>
  s
    .replace(/^\/+|\/+$/g, "") // 앞뒤 /
    .replace(/^posts\//, "") // posts/ 제거
    .replace(/\.(md|mdx)$/i, ""); // .md/.mdx 제거

function walkFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const out: string[] = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}

function parseFrontMatter(raw: string): { meta: Record<string, string>; body: string } {
  if (!raw.startsWith("---\n")) return { meta: {}, body: raw };

  const end = raw.indexOf("\n---\n", 4);
  if (end === -1) return { meta: {}, body: raw };

  const fm = raw.slice(4, end).trim();
  const body = raw.slice(end + "\n---\n".length);

  const meta: Record<string, string> = {};
  for (const line of fm.split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const val = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    if (key) meta[key] = val;
  }
  return { meta, body };
}

export function getAllPosts(): Post[] {
  const files = walkFiles(POSTS_DIR).filter((f) => /\.(md|mdx)$/i.test(f));

  const posts: Post[] = files.map((filePath) => {
    const rel = path.relative(POSTS_DIR, filePath).replaceAll(path.sep, "/");
    const slug = norm(rel); // 파일명 기반 slug
    const raw = fs.readFileSync(filePath, "utf8");
    const { meta, body } = parseFrontMatter(raw);

    return {
      slug,
      title: meta.title,
      date: meta.date,
      excerpt: meta.excerpt,
      content: body.trim(),
    };
  });

  // 날짜 있으면 최신순 정렬(없으면 그대로)
  posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const s = norm(slug);
  const posts = getAllPosts();
  return posts.find((p) => norm(p.slug) === s) ?? null;
}
