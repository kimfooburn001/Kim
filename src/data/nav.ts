import { SITE_BASE } from '../config';

const BASE = SITE_BASE.replace(/\/$/, ''); // Remove trailing slash

export const nav = [
  { label: 'Reviews', link: `${BASE}/reviews/` },
  { label: 'Blog', link: `${BASE}/blogs/` },
] as const;

export type NavItem = (typeof nav)[number];
