import Link from "next/link";
import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeader({ eyebrow, title, highlight, href, linkLabel }: SectionHeaderProps) {
  return (
    <div className="section-header fade-up">
      <div>
        {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-[.16em] text-gray-1">{eyebrow}</p>}
        <h2 className="section-title">
          {title} {highlight && <span>{highlight}</span>}
        </h2>
      </div>
      {href && linkLabel && (
        <Link href={href} className="see-all">
          {linkLabel} <i className="fa fa-arrow-right"></i>
        </Link>
      )}
    </div>
  );
}
