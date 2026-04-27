"use client";

import React from "react";
import { tickerItems } from "@/lib/site-data";

interface TickerProps {
  items?: string[];
}

export function Ticker({ items = tickerItems }: TickerProps) {
  const displayItems = [...items, ...items];

  return (
    <div className="overflow-hidden bg-yellow py-4">
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-inner {
          animation: ticker 30s linear infinite;
        }
        .ticker-inner:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="ticker-inner flex w-max gap-8 whitespace-nowrap">
        {displayItems.map((item, idx) => (
          <span key={`${item}-${idx}`} className="flex-shrink-0 font-heading text-lg font-bold uppercase tracking-[.08em] text-black">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
