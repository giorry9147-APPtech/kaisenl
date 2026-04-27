import Image from "next/image";
import React from "react";
import { Badge } from "./Badge";

interface NewsCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  large?: boolean;
}

export function NewsCard({ image, category, date, title, excerpt, large = false }: NewsCardProps) {
  const badgeVariant = category === "Nieuws" || category === "Aankondiging" ? "yellow" : category === "Exclusief" ? "red" : "dark";

  return (
    <article className="group overflow-hidden rounded-md border border-white/10 bg-dark-2 fade-up">
      <div className={`relative ${large ? "h-[420px]" : "h-56"} overflow-hidden bg-dark-3`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <Badge variant={badgeVariant}>{category}</Badge>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 text-xs text-gray-1">
          <i className="fa fa-clock mr-2"></i>
          {date}
        </div>
        <h3 className={`${large ? "text-3xl" : "text-xl"} mb-3 font-bold transition-colors group-hover:text-yellow`}>
          {title}
        </h3>
        <p className="text-sm text-gray-1">{excerpt}</p>
      </div>
    </article>
  );
}
