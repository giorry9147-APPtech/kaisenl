import Image from "next/image";
import React from "react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden pt-[150px] md:pt-[170px]">
      <Image
        src="/images/hero.jpg"
        alt="Hero achtergrond"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,8,8,0.92)_0%,rgba(8,8,8,0.70)_60%,rgba(8,8,8,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,1)_0%,transparent_40%)]" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="fade-up mb-6 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-yellow" />
            <span className="text-sm font-semibold text-yellow">Live - Multicultureel Nederland</span>
          </div>

          <h1 className="fade-up mb-6 max-w-[780px] text-[clamp(2.4rem,5.5vw,5.5rem)] font-bold uppercase leading-[.95] tracking-[.025em]">
            <span className="text-yellow">Multicul&shy;tureel</span>
            <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.58)]">Nederland</span>
            <br />
            <span>Uitgaat</span>
          </h1>

          <p className="fade-up mb-8 max-w-2xl text-lg text-gray-1">
            Snapshots - Uitgaansagenda - Nieuws - Forum. De ultieme plek voor multiculturele events in Nederland.
          </p>

          <div className="fade-up mb-6 flex flex-wrap gap-4">
            <Button variant="primary" href="/agenda">
              <i className="fa fa-calendar"></i> Bekijk Agenda
            </Button>
            <Button variant="outline" href="/snapshots">
              <i className="fa fa-camera"></i> Snapshots
            </Button>
          </div>

          <div className="fade-up flex items-center justify-between rounded-md border border-white/10 bg-dark-2 p-3 md:hidden">
            <div>
              <div className="text-xs font-semibold text-yellow">13 Mei · Zichtenburg, Den Haag</div>
              <div className="text-sm font-bold">Welkomst Party Starzz from Surinam</div>
            </div>
            <Button variant="sm" href="/agenda">Tickets</Button>
          </div>

        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-6 hidden w-72 fade-up delay-3 md:block xl:right-[8vw]">
        <div className="pointer-events-auto overflow-hidden rounded-md border border-white/10 bg-dark-2 shadow-2xl">
          <div className="relative h-44">
            <Image
              src="/images/upcomingevent.jpeg"
              alt="Welkomst Party Starzz from Surinam"
              fill
              sizes="288px"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 text-xs font-semibold text-yellow">Hot - Aankomend</div>
            <h3 className="mb-2 text-lg font-bold">Welkomst Party Starzz from Surinam</h3>
            <div className="mb-4 text-xs text-gray-1">
              <i className="fa fa-location-dot mr-1"></i> Zichtenburg, Den Haag
            </div>
            <div className="flex gap-2">
              <span className="rounded-full bg-yellow px-3 py-1 text-xs font-bold text-black">13 Mei</span>
              <Button variant="sm" href="/agenda">
                Tickets
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
