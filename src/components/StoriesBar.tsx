"use client";

import Image from "next/image";
import React, { useState } from "react";
import { stories as defaultStories } from "@/lib/site-data";

interface Story {
  id: string;
  name: string;
  image: string;
  seen?: boolean;
  href?: string;
}

interface StoriesBarProps {
  stories?: Story[];
}

export function StoriesBar({ stories = defaultStories }: StoriesBarProps) {
  const [seenIds, setSeenIds] = useState(() => new Set(stories.filter((story) => story.seen).map((story) => story.id)));

  return (
    <div className="overflow-x-auto border-b border-white/10 bg-dark-2 py-6">
      <div className="flex w-max gap-6 px-6">
        {stories.map((story) => {
          const isSeen = seenIds.has(story.id);

          return (
            <button
              key={story.id}
              type="button"
              className="flex w-20 flex-shrink-0 flex-col items-center gap-2 text-center"
              onClick={() => {
                const next = new Set(seenIds);
                next.add(story.id);
                setSeenIds(next);
                if (story.href) window.open(story.href, "_blank", "noopener,noreferrer");
              }}
            >
              <span
                className={`h-20 w-20 rounded-full p-0.5 transition-all ${
                  isSeen ? "bg-dark-4" : "bg-gradient-to-br from-yellow to-yellow/40"
                }`}
              >
                <span className="relative block h-full w-full overflow-hidden rounded-full bg-dark-3 p-1">
                  <Image src={story.image} alt={story.name} fill sizes="80px" className="rounded-full object-cover p-1" />
                </span>
              </span>
              <span className="max-w-20 truncate text-xs text-gray-1">{story.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StoriesBar;
