export type Site = {
  title: string;
  description: string;
  href: string;
  locale: string;
  author: string;
  featuredPostCount: number;
  postsPerPage: number;
};

export type Link = {
  href: string;
  label: string;
};

export const SITE: Site = {
  title: 'Nanasi',
  description: 'CTF write-ups, reverse engineering, and life.',
  href: 'https://nanasi0807.github.io',
  locale: 'en-US',
  author: 'Nanasi',
  featuredPostCount: 3,
  postsPerPage: 5,
};

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
];

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/nanasi0807', label: 'github' },
  { href: 'https://twitter.com/w1izbezt', label: 'twitter' },
  { href: 'mailto:sanglestrike@gmail.com', label: 'email' },
  { href: '/rss.xml', label: 'rss' },
];

export const ICON_MAP: Record<string, string> = {
  github: 'lucide:github',
  Github: 'lucide:github',
  GitHub: 'lucide:github',
  twitter: 'lucide:twitter',
  Twitter: 'lucide:twitter',
  email: 'lucide:mail',
  Email: 'lucide:mail',
  mail: 'lucide:mail',
  Mail: 'lucide:mail',
  rss: 'lucide:rss',
  RSS: 'lucide:rss',
  website: 'lucide:globe',
  Website: 'lucide:globe',
};

export const TAG_STYLES: Record<string, string> = {
  reverse:
    'bg-purple-500/10 text-purple-300 ring-1 ring-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.18)] hover:bg-purple-500/20 hover:text-purple-200',
  writeup:
    'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.18)] hover:bg-emerald-500/20 hover:text-emerald-200',
  vietnamese:
    'bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/30 shadow-[0_0_12px_rgba(244,63,94,0.18)] hover:bg-rose-500/20 hover:text-rose-200',
  clickbait:
    'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.18)] hover:bg-amber-500/20 hover:text-amber-200',
  english:
    'bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30 shadow-[0_0_12px_rgba(14,165,233,0.18)] hover:bg-sky-500/20 hover:text-sky-200',
};

export function getTagStyle(tag: string): string {
  return (
    TAG_STYLES[tag.toLowerCase()] ??
    'bg-zinc-500/10 text-zinc-300 ring-1 ring-zinc-500/30 hover:bg-zinc-500/20 hover:text-zinc-200'
  );
}