"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "关于我", href: "#about" },
  { label: "经历", href: "#timeline" },
  { label: "项目", href: "#projects" },
  { label: "能力", href: "#skills" },
  { label: "联系", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-primary/5" 
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" aria-label="主导航">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#hero"
            className="text-primary font-bold text-lg hover:text-accent transition-colors flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="w-8 h-8 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              P
            </span>
            <span className="hidden sm:inline">个人展示</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-primary/70 hover:text-accent hover:bg-accent/5 text-sm font-medium transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Link
                href="#contact"
                className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                联系我
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">打开菜单</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col gap-1 pt-2 bg-white/95 backdrop-blur-md rounded-xl p-2 mt-2 border border-primary/10 shadow-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 px-4 rounded-lg text-primary/80 hover:bg-accent/5 hover:text-accent font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-primary/10">
              <Link
                href="#contact"
                className="block py-3 px-4 rounded-lg bg-accent text-white text-center font-medium hover:bg-accent/90 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                联系我
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
