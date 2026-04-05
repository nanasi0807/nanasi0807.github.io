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
  description: 'CTF Write-ups, Reverse Engineering, and life.',
  href: 'https://nanasi.github.io',
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
  twitter: 'lucide:twitter',
  email: 'lucide:mail',
  rss: 'lucide:rss',
};