import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon - Khushiram Meena',
  description: 'Something amazing is being crafted! Stay tuned for exciting new features.',
  keywords: 'coming soon, khushiram meena, portfolio, software engineer, new features',
  robots: 'noindex, nofollow', // Prevent search engines from indexing this page
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
