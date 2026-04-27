import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Navigatie",
    links: [
      ["Home", "/"],
      ["Snapshots", "/snapshots"],
      ["Agenda", "/agenda"],
      ["Nieuws", "/nieuws"],
      ["Forum", "/forum"],
    ],
  },
  {
    title: "Info",
    links: [
      ["Over Kaise.nl", "#"],
      ["Adverteren", "#"],
      ["Contact", "#"],
      ["Privacy", "#"],
      ["Cookies", "#"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["info@kaise.nl", "mailto:info@kaise.nl"],
      ["WhatsApp", "https://api.whatsapp.com/send?phone=31683831717&text=Hallo%2C%20ik%20had%20een%20vraagje..."],
      ["@kaise.nl", "#"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-2 py-14">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="https://www.kaise.nl/images/Kaisenllogo.gif"
              alt="Kaise.nl"
              width={144}
              height={48}
              className="mb-5 h-12 w-auto"
              unoptimized
            />
            <p className="mb-5 max-w-sm text-sm text-gray-1">
              Dé plek voor multicultureel Nederland. Snapshots van events, de beste uitgaansagenda, nieuws en een actief forum.
            </p>
            <div className="flex gap-3">
              <a className="btn-icon" href="https://www.instagram.com/kaisepuntnl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn-icon" href="https://www.tiktok.com/@shaileshgajadien?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a className="btn-icon" href="https://api.whatsapp.com/send?phone=31683831717&text=Hallo%2C%20ik%20had%20een%20vraagje..." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a className="btn-icon" href="https://www.facebook.com/web.kaise.nl" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-lg font-bold uppercase">{group.title}</h4>
              <ul className="space-y-2 text-sm text-gray-1">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="inline-flex items-center gap-2 transition-colors hover:text-yellow">
                      <i className="fa fa-angle-right text-xs"></i>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-1 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Kaise.nl - Multicultureel Nederland. Alle rechten voorbehouden.</span>
          <span>Made with heart for the culture</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
