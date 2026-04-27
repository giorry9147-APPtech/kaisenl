"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";

const sponsors = [
  { src: "/images/shaicatering.jpg",  alt: "Shai's Catering" },
  { src: "/images/braamshoop.jpeg",   alt: "Grand Village Braamshoop Fase 2" },
  { src: "/images/aanbetaling.jpeg",  alt: "5% Aanbetaling – Royal Wonen" },
  { src: "https://kitchensusan.nl/images/88719621-5bcc-4d39-a1c3-78ea4af23296.jpeg?rand=6b38", alt: "Kitchen Susan – Surinaams Restaurant" },
];

export function Newsletter() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % sponsors.length), 4000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setActive((active - 1 + sponsors.length) % sponsors.length);
  const next = () => setActive((active + 1) % sponsors.length);

  return (
    <section className="section border-t border-white/10 bg-dark-1">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Newsletter */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-px w-8 bg-yellow" />
              <span className="text-xs font-semibold uppercase tracking-[.14em] text-yellow">Nieuwsbrief</span>
            </div>
            <h2 className="mb-3 text-4xl font-bold uppercase leading-tight md:text-5xl">
              Nooit een <span className="text-yellow">event</span> missen
            </h2>
            <p className="mb-8 max-w-md text-gray-1">
              Schrijf je in voor de nieuwsbrief. We houden je op de hoogte van alle updates, kortingen en gratis entree.
            </p>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-white">
                  Naam <span className="text-yellow">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jouw naam"
                  required
                  className="min-h-12 rounded-sm border border-white/10 bg-black px-4 text-white outline-none transition-colors placeholder:text-gray-3 focus:border-yellow"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-white">
                  E-mailadres <span className="text-yellow">*</span>
                </label>
                <input
                  type="email"
                  placeholder="jouw@email.nl"
                  required
                  className="min-h-12 rounded-sm border border-white/10 bg-black px-4 text-white outline-none transition-colors placeholder:text-gray-3 focus:border-yellow"
                />
              </div>
              <div className="pt-1">
                <Button type="submit" variant="primary">
                  <i className="fa fa-paper-plane"></i> Aanmelden
                </Button>
              </div>
            </form>
          </div>

          {/* Sponsors carousel */}
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-px w-8 bg-yellow" />
              <span className="text-xs font-semibold uppercase tracking-[.14em] text-yellow">Advertenties & Sponsors</span>
            </div>

            <div className="relative w-full max-w-sm">
              {/* Slide */}
              <div className="overflow-hidden rounded-md border border-white/10 bg-dark-3">
                <div className="relative aspect-[3/4]">
                  {sponsors.map((sponsor, idx) => (
                    <div
                      key={sponsor.src}
                      className={`absolute inset-0 transition-opacity duration-500 ${idx === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    >
                      <Image
                        src={sponsor.src}
                        alt={sponsor.alt}
                        fill
                        sizes="384px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="btn-icon absolute -left-5 top-1/2 -translate-y-1/2 shadow-lg"
                aria-label="Vorige sponsor"
              >
                <i className="fa fa-chevron-left text-sm"></i>
              </button>
              <button
                onClick={next}
                className="btn-icon absolute -right-5 top-1/2 -translate-y-1/2 shadow-lg"
                aria-label="Volgende sponsor"
              >
                <i className="fa fa-chevron-right text-sm"></i>
              </button>
            </div>

            {/* Dots */}
            <div className="mt-5 flex gap-2">
              {sponsors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === active ? "w-6 bg-yellow" : "w-2 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Sponsor ${idx + 1}`}
                />
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-gray-2">
              Wil jij ook adverteren? <a href="#" className="text-yellow transition-colors hover:underline">Neem contact op</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
