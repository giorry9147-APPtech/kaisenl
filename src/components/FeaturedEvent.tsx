import Image from "next/image";
import React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface FeaturedEventProps {
  image: string;
  title: string;
  date: string;
  venue: string;
  time: string;
  price: string;
  ageRestriction: string;
  badges?: string[];
  artists?: string;
}

export function FeaturedEvent({
  image,
  title,
  date,
  venue,
  time,
  price,
  ageRestriction,
  artists,
  badges = ["Hot", "Uitverkocht"],
}: FeaturedEventProps) {
  return (
    <article className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-dark-2 fade-up">
      <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 1600px" className="object-cover object-top" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-end">
        <div className="w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6 md:p-9">
          <div className="mb-4 flex flex-wrap gap-2">
            {badges.map((badge, idx) => (
              <Badge key={badge} variant={idx === 0 ? "yellow" : "dark"}>
                {badge}
              </Badge>
            ))}
          </div>
          <div className="mb-3 text-sm text-gray-1">
            <i className="fa fa-calendar mr-2 text-yellow"></i>
            {date}
          </div>
          <h2 className="mb-5 text-4xl font-bold md:text-6xl">{title}</h2>
          <div className="mb-7 grid gap-3 text-sm text-gray-1 sm:grid-cols-2 lg:grid-cols-4">
            <span>
              <i className="fa fa-location-dot mr-2 text-yellow"></i>
              {venue}
            </span>
            <span>
              <i className="fa fa-clock mr-2 text-yellow"></i>
              {time}
            </span>
            <span>
              <i className="fa fa-ticket mr-2 text-yellow"></i>
              {price}
            </span>
            <span>
              <i className="fa fa-user mr-2 text-yellow"></i>
              {ageRestriction}
            </span>
            {artists && (
              <span className="sm:col-span-2 lg:col-span-4">
                <i className="fa fa-users mr-2 text-yellow"></i>
                {artists}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" href="/agenda">
              <i className="fa fa-ticket"></i> Tickets Kopen
            </Button>
            <Button variant="outline" href="/agenda">
              <i className="fa fa-info-circle"></i> Meer Info
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeaturedEvent;
