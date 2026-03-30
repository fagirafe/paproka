import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "О нас", href: "#about" },
  { name: "Кейсы", href: "#cases" },
  { name: "Процесс работы", href: "#process" },
  { name: "Нам доверяют", href: "#clients" },
  { name: "Команда", href: "#team" },
  { name: "Карьера", href: "#career" },
  { name: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          PAPRIKA
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors">
          Обсудить проект
        </button>
      </div>
    </header>
  );
}
