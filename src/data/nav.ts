import { withBase } from '../config';

export const nav = [
  { label: 'Book Reviews', link: withBase('/book-reviews/') },
  { label: 'Blog', link: withBase('/blogs/') },
] as const;

export type NavItem = (typeof nav)[number];
