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
  DESCRIPTION:
    'Reversing, Gaming & Life',
  EMAIL: 'sanglestrike@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://nanasi0807.github.io/',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/nanasi0807', label: 'GitHub' },
  { href: 'https://x.com/w1izbezt', label: 'Twitter' },
  { href: 'sanglestrike@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]