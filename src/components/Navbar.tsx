"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {mobileMenuOpen && (
        <nav className="fixed inset-0 z-50 bg-black/98 px-7 pt-24 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute right-7 top-6 text-2xl text-gray-1 transition-colors hover:text-yellow"
            aria-label="Sluit menu"
          >
            <i className="fa fa-times"></i>
          </button>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm border border-white/10 px-4 py-4 font-heading text-lg font-semibold uppercase tracking-[.14em] text-gray-1 transition-colors hover:border-yellow hover:text-yellow"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <header
        className={`fixed inset-x-0 top-0 z-40 h-[80px] border-b px-7 transition-all duration-300 ${
          scrolled ? "border-white/10 bg-black/90 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto grid h-full max-w-[2000px] grid-cols-[auto_1fr_auto] items-center gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://www.kaise.nl/images/Kaisenllogo.gif"
              alt="Kaise.nl"
              width={180}
              height={60}
              className="h-14 w-auto"
              unoptimized
            />
          </Link>

          <ul className="hidden items-center justify-center gap-0 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-xs px-3.5 py-2 font-heading text-xs font-semibold uppercase tracking-[.14em] transition-colors ${
                    pathname === link.href ? "bg-yellow/10 text-yellow" : "text-gray-1 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-4">
            <Link
              href="/tickets"
              className="hidden items-center gap-2 rounded-xs bg-yellow px-5 py-2 font-heading text-sm font-bold uppercase tracking-[.14em] text-black transition-all hover:brightness-110 lg:flex"
            >
              <i className="fa fa-ticket"></i>
              Tickets
            </Link>
            <div className="hidden gap-4 sm:flex">
              <a href="https://www.instagram.com/kaisepuntnl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-xl text-gray-1 transition-colors hover:text-yellow">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@shaileshgajadien?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-xl text-gray-1 transition-colors hover:text-yellow">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=31683831717&text=Hallo%2C%20ik%20had%20een%20vraagje..." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-xl text-gray-1 transition-colors hover:text-yellow">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.facebook.com/web.kaise.nl" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-xl text-gray-1 transition-colors hover:text-yellow">
                <i className="fab fa-facebook"></i>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 text-xl text-gray-1 transition-colors hover:border-yellow hover:text-yellow lg:hidden"
              aria-label="Menu"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
