export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'n4n4s1',
  DESCRIPTION: 'death is a form of salvation',
  EMAIL: 'sanglestrike@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://nanasi.github.io',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/nanasi0807', label: 'github' },
  { href: 'https://x.com/w1izbezt', label: 'twitter' },
  { href: 'sanglestrike@gmail.com', label: 'email' },
  { href: '/rss.xml', label: 'rss' },
]

export const ICON_MAP: Record<string, string> = {
  github: 'lucide:github',
  twitter: 'lucide:twitter',
  email: 'lucide:mail',
  rss: 'lucide:rss',
}