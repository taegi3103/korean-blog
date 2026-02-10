// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korean Blog",
  description: "Next.js(App Router) + GitHub Pages(Static Export) 한국어 블로그 템플릿",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="bg-white text-zinc-900">
        <header className="border-b border-zinc-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold">
              Korean Blog
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-700">
              <Link className="hover:text-black" href="/">
                Home
              </Link>
              <Link className="hover:text-black" href="/posts">
                Posts
              </Link>
              <Link className="hover:text-black" href="/about">
                About
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>

        <footer className="border-t border-zinc-200">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-500">
            © {new Date().getFullYear()} Korean Blog
          </div>
        </footer>
      </body>
    </html>
  );
}
