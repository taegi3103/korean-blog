import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Korean Blog",
  description: "Next.js + GitHub Pages로 만드는 한국어 블로그",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-zinc-900">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Korean Blog
            </Link>

            <nav className="flex items-center gap-4 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-1 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>

        <footer className="border-t border-zinc-200 py-10">
          <div className="mx-auto max-w-4xl px-6 text-sm text-zinc-500">
            © {new Date().getFullYear()} Korean Blog
          </div>
        </footer>
      </body>
    </html>
  );
}
