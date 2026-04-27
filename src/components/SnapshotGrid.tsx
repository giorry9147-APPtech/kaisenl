"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";

interface Snapshot {
  id: number;
  image: string;
  event: string;
  likes: string;
  comments: string;
  layout?: "normal" | "wide" | "tall";
  href?: string;
}

interface SnapshotGridProps {
  items: Snapshot[];
  showLightbox?: boolean;
}

export function SnapshotGrid({ items, showLightbox = true }: SnapshotGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") setActiveIndex((activeIndex - 1 + items.length) % items.length);
      if (event.key === "ArrowRight") setActiveIndex((activeIndex + 1) % items.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items.length]);

  return (
    <>
      <div className="grid auto-rows-[minmax(170px,1fr)] grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`group relative min-h-[210px] overflow-hidden bg-dark-3 text-left ${
              item.layout === "wide" ? "col-span-2" : ""
            } ${item.layout === "tall" ? "row-span-2 min-h-[420px]" : ""}`}
            onClick={() => showLightbox && setActiveIndex(index)}
          >
            <Image
              src={item.image}
              alt={item.event}
              fill
              sizes="(max-width: 768px) 50vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end justify-center gap-5 bg-black/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
              <span className="font-semibold">
                <i className="fa fa-heart mr-2"></i>
                {item.likes}
              </span>
              <span className="font-semibold">
                <i className="fa fa-comment mr-2"></i>
                {item.comments}
              </span>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4" onClick={() => setActiveIndex(null)}>
          <div className="grid max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-md border border-white/10 bg-dark-2 md:grid-cols-[1fr_340px]" onClick={(event) => event.stopPropagation()}>
            <div className="relative min-h-[55vh] bg-black">
              <Image src={active.image} alt={active.event} fill sizes="(max-width: 768px) 100vw, 70vw" className="object-contain" />
              <button className="absolute right-4 top-4 btn-icon" type="button" onClick={() => setActiveIndex(null)} aria-label="Sluit lightbox">
                <i className="fa fa-times"></i>
              </button>
              <button
                className="absolute left-4 top-1/2 btn-icon -translate-y-1/2"
                type="button"
                onClick={() => setActiveIndex((activeIndex! - 1 + items.length) % items.length)}
                aria-label="Vorige foto"
              >
                <i className="fa fa-chevron-left"></i>
              </button>
              <button
                className="absolute right-4 top-1/2 btn-icon -translate-y-1/2"
                type="button"
                onClick={() => setActiveIndex((activeIndex! + 1) % items.length)}
                aria-label="Volgende foto"
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
            <aside className="flex flex-col">
              <div className="flex items-center gap-3 border-b border-white/10 p-5">
                <Image src="https://www.kaise.nl/images/Kaisenllogo.gif" alt="Kaise.nl" width={42} height={42} unoptimized />
                <div>
                  <div className="font-semibold">kaise.nl</div>
                  <div className="text-xs text-gray-1">{active.event}</div>
                </div>
              </div>
              <div className="flex-1 space-y-4 p-5 text-sm text-gray-1">
                <p>
                  <strong className="text-white">DenHaagFan</strong> Waanzinnige avond.
                </p>
                <p>
                  <strong className="text-white">AmsUser</strong> Top foto&apos;s zoals altijd.
                </p>
                <p>
                  <strong className="text-white">MusicHead_NL</strong> Was er ook bij, sterke avond.
                </p>
              </div>
              <div className="border-t border-white/10 p-5">
                <div className="mb-3 flex gap-3">
                  <button className="btn-icon" type="button" aria-label="Like">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button className="btn-icon" type="button" aria-label="Reageer">
                    <i className="fa-regular fa-comment"></i>
                  </button>
                  <button className="btn-icon" type="button" aria-label="Delen">
                    <i className="fa fa-share-from-square"></i>
                  </button>
                </div>
                <div className="font-semibold">{active.likes} likes</div>
                <div className="text-sm text-gray-1">Event foto via Kaise.nl</div>
                {active.href && (
                  <a
                    href={active.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-xs bg-yellow px-4 py-2 text-sm font-bold text-black transition-all hover:brightness-110"
                  >
                    <i className="fa fa-images"></i> Bekijk alle foto&apos;s
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <Button variant="outline" href="/snapshots">
          <i className="fa fa-images"></i> Meer foto&apos;s laden
        </Button>
      </div>
    </>
  );
}
