import Image from "next/image";
import React from "react";
import { Button } from "./Button";

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  venue: string;
  tags?: string[];
  delay?: number;
}

export function EventCard({ image, date, title, venue, tags = [], delay = 0 }: EventCardProps) {
  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <article className={`group relative min-h-[420px] overflow-hidden rounded-md border border-white/10 bg-dark-2 fade-up ${delayClass}`}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20" />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/35 to-transparent p-6">
        <div className="text-sm text-gray-1">
          <i className="fa fa-calendar mr-2"></i>
          {date}
        </div>
        <h3 className="mb-1 mt-2 text-xl font-bold">{title}</h3>
        <div className="mb-3 text-sm text-gray-1">
          <i className="fa fa-location-dot mr-2"></i>
          {venue}
        </div>
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-dark-4 px-2.5 py-1 text-xs text-gray-1">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="opacity-0 transition-opacity group-hover:opacity-100">
          <Button variant="sm" href="/agenda">
            <i className="fa fa-ticket"></i> Tickets
          </Button>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
