import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: "重要なお知らせ" | "休講・代講" | "イベント・発表会" | "一般案内" | string;
  isPinned?: boolean;
  isAlert?: boolean;
  summary?: string;
  contentHtml?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags?: string[];
  thumbnail?: string;
  excerpt?: string;
  contentHtml?: string;
}

export interface SiteInfo {
  studioName: string;
  tagline: string;
  director: string;
  phone: string;
  email: string;
  address: string;
  access: string;
  openingHours: string;
  lineUrl: string;
  instagramUrl: string;
  ekitenUrl: string;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

export function getSiteInfo(): SiteInfo {
  const fullPath = path.join(contentDirectory, "settings", "site.json");
  if (!fs.existsSync(fullPath)) {
    return {
      studioName: "Estudio Oloroso (エストゥディオ・オロロソ)",
      tagline: "アンダルシアの伝統と洗練された情熱",
      director: "池田 遥香",
      phone: "03-0000-0000（架空）",
      email: "contact@estudio-oloroso.jp",
      address: "東京都目黒区（※架空の所在地）",
      access: "想定ロケーション: 中目黒駅南改札より徒歩4分",
      openingHours: "月〜金 10:00 - 21:30 / 土・日 09:30 - 20:00",
      lineUrl: "https://line.me/R/ti/p/@estudio_oloroso",
      instagramUrl: "https://www.instagram.com/estudio_oloroso",
      ekitenUrl: "https://www.ekiten.jp/shop_estudio_oloroso/",
    };
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
}

export function getAllNews(): NewsItem[] {
  const newsDir = path.join(contentDirectory, "news");
  if (!fs.existsSync(newsDir)) return [];
  const filenames = fs.readdirSync(newsDir);

  const items = filenames
    .filter((fn) => fn.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(newsDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "お知らせ",
        date: data.date ? String(data.date) : "2026-10-01",
        category: data.category || "一般案内",
        isPinned: Boolean(data.isPinned),
        isAlert: Boolean(data.isAlert),
        summary: data.summary || "",
      };
    });

  // Sort: Pinned first, then by date descending
  return items.sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  const fullPath = path.join(contentDirectory, "news", `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await markdownToHtml(content);

  return {
    slug,
    title: data.title || "お知らせ",
    date: data.date ? String(data.date) : "2026-10-01",
    category: data.category || "一般案内",
    isPinned: Boolean(data.isPinned),
    isAlert: Boolean(data.isAlert),
    summary: data.summary || "",
    contentHtml,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, "blog");
  if (!fs.existsSync(blogDir)) return [];
  const filenames = fs.readdirSync(blogDir);

  const posts = filenames
    .filter((fn) => fn.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "記事タイトル",
        date: data.date ? String(data.date) : "2026-10-01",
        category: data.category || "日々のレッスン風景",
        tags: Array.isArray(data.tags) ? data.tags : [],
        thumbnail: data.thumbnail || "/images/blog-culture.jpg",
        excerpt: data.excerpt || "",
      };
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(contentDirectory, "blog", `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await markdownToHtml(content);

  return {
    slug,
    title: data.title || "記事タイトル",
    date: data.date ? String(data.date) : "2026-10-01",
    category: data.category || "日々のレッスン風景",
    tags: Array.isArray(data.tags) ? data.tags : [],
    thumbnail: data.thumbnail || "/images/blog-culture.jpg",
    excerpt: data.excerpt || "",
    contentHtml,
  };
}
