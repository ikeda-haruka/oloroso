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

export const DEFAULT_BLOG_THUMBNAIL = "/images/default-blog-thumbnail.jpg";

/**
 * サムネイル画像のパスを検証し、実在しない場合は安全に公式デフォルト画像へフォールバックする
 */
export function resolveValidThumbnail(thumbnailPath?: string | null): string {
  if (!thumbnailPath || typeof thumbnailPath !== "string" || !thumbnailPath.trim()) {
    return DEFAULT_BLOG_THUMBNAIL;
  }
  const trimmed = thumbnailPath.trim();
  // 外部URL（https:// 等）の場合はそのまま返す
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  // public フォルダ内での実在チェック
  const cleanPath = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;
  const fullPath = path.join(process.cwd(), "public", cleanPath);
  if (fs.existsSync(fullPath)) {
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  }
  // 存在しないパス（404）の場合はデフォルト画像へフォールバック
  return DEFAULT_BLOG_THUMBNAIL;
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

      const thumbnail = resolveValidThumbnail(data.thumbnail);

      return {
        slug,
        title: data.title || "記事タイトル",
        date: data.date ? String(data.date) : "2026-10-01",
        category: data.category || "日々のレッスン風景",
        tags: Array.isArray(data.tags) ? data.tags : [],
        thumbnail,
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

  const thumbnail = resolveValidThumbnail(data.thumbnail);

  return {
    slug,
    title: data.title || "記事タイトル",
    date: data.date ? String(data.date) : "2026-10-01",
    category: data.category || "日々のレッスン風景",
    tags: Array.isArray(data.tags) ? data.tags : [],
    thumbnail,
    excerpt: data.excerpt || "",
    contentHtml,
  };
}

export interface StaffMember {
  slug: string;
  staffId: string;
  name: string;
  kana: string;
  role: string;
  employmentType: string;
  status: string;
  joinedDate: string;
  scheduleSummary: string;
  email: string;
  avatar?: string;
  responsibilities: string[];
  bio: string;
  bioHtml?: string;
}

export interface MemberRecord {
  slug: string;
  memberId: string;
  name: string;
  kana: string;
  email: string;
  phone?: string;
  status: string;
  plan: string;
  classLevel: string;
  joinedDate: string;
  canReserveStudio: boolean;
  canAccessArchive: boolean;
  notes?: string;
}

export function getAllStaff(): StaffMember[] {
  const staffDir = path.join(contentDirectory, "staff");
  if (!fs.existsSync(staffDir)) return [];
  const filenames = fs.readdirSync(staffDir);

  const items = filenames
    .filter((fn) => fn.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(staffDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        staffId: data.staffId || slug,
        name: data.name || "スタッフ",
        kana: data.kana || "",
        role: data.role || "スタッフ",
        employmentType: data.employmentType || "常勤・常駐スタッフ",
        status: data.status || "在籍・稼働中",
        joinedDate: data.joinedDate ? String(data.joinedDate) : "",
        scheduleSummary: data.scheduleSummary || "",
        email: data.email || "",
        avatar: data.avatar || "/images/instructor-ikeda.jpg",
        responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : [],
        bio: content || data.bio || "",
      };
    });

  // Sort by staffId ascending (STF-001, STF-002, ...)
  return items.sort((a, b) => a.staffId.localeCompare(b.staffId));
}

export async function getStaffBySlug(slug: string): Promise<StaffMember | null> {
  const fullPath = path.join(contentDirectory, "staff", `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const bioHtml = await markdownToHtml(content);

  return {
    slug,
    staffId: data.staffId || slug,
    name: data.name || "スタッフ",
    kana: data.kana || "",
    role: data.role || "スタッフ",
    employmentType: data.employmentType || "常勤・常駐スタッフ",
    status: data.status || "在籍・稼働中",
    joinedDate: data.joinedDate ? String(data.joinedDate) : "",
    scheduleSummary: data.scheduleSummary || "",
    email: data.email || "",
    avatar: data.avatar || "/images/instructor-ikeda.jpg",
    responsibilities: Array.isArray(data.responsibilities) ? data.responsibilities : [],
    bio: content || data.bio || "",
    bioHtml,
  };
}

export function getAllMembers(): MemberRecord[] {
  const membersDir = path.join(contentDirectory, "members");
  if (!fs.existsSync(membersDir)) return [];
  const filenames = fs.readdirSync(membersDir);

  const items = filenames
    .filter((fn) => fn.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(membersDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        memberId: data.memberId || slug,
        name: data.name || "会員",
        kana: data.kana || "",
        email: data.email || "",
        phone: data.phone || "",
        status: data.status || "在籍（受講中）",
        plan: data.plan || "月4回レギュラープラン",
        classLevel: data.classLevel || "入門・基礎クラス",
        joinedDate: data.joinedDate ? String(data.joinedDate) : "",
        canReserveStudio: data.canReserveStudio !== false,
        canAccessArchive: data.canAccessArchive !== false,
        notes: data.notes || "",
      };
    });

  // Sort by memberId ascending
  return items.sort((a, b) => a.memberId.localeCompare(b.memberId));
}

export function getMemberById(memberId: string): MemberRecord | null {
  const members = getAllMembers();
  return members.find((m) => m.memberId === memberId || m.email === memberId) || null;
}
