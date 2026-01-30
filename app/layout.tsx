import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "korean-blog",
  description: "A simple Korean blog on GitHub Pages",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              korean-blog
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-zinc-700 hover:text-zinc-900">
                Home
              </Link>
              <Link href="/posts" className="text-zinc-700 hover:text-zinc-900">
                Posts
              </Link>
              <Link href="/about" className="text-zinc-700 hover:text-zinc-900">
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>

        <footer className="border-t border-zinc-200">
          <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-zinc-500">
            © {new Date().getFullYear()} korean-blog
          </div>
        </footer>
      </body>
    </html>
  );
}
