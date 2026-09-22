import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & { html: string };

function blogDir(locale: string) {
  return path.join(process.cwd(), 'content', locale, 'blog');
}

export function getAllBlogSlugs(locale: string): string[] {
  const dir = blogDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

function readPost(locale: string, slug: string): BlogPost | null {
  const filePath = path.join(blogDir(locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? data.description ?? '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    html: marked.parse(content, { async: false }) as string
  };
}

export function getBlogPost(locale: string, slug: string): BlogPost | null {
  return readPost(locale, slug);
}

export function getAllBlogPosts(locale: string): BlogPostMeta[] {
  return getAllBlogSlugs(locale)
    .map(slug => readPost(locale, slug))
    .filter((post): post is BlogPost => post !== null)
    .map(({ html, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
