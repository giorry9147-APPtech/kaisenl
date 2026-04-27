import React from "react";

interface PageHeroProps {
  icon: string;
  label: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({ icon, label, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,#161616_0%,#080808_100%)] pt-32">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,229,0,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="container relative z-10 py-16">
        <div className="mb-6 flex items-center gap-3">
          <i className={`fa ${icon} text-2xl text-yellow`}></i>
          <span className="text-sm font-semibold uppercase tracking-[.16em] text-yellow">{label}</span>
        </div>
        <h1 className="mb-4 text-5xl font-bold uppercase md:text-7xl">{title}</h1>
        <p className="max-w-2xl text-lg text-gray-1">{description}</p>
        {children}
      </div>
    </section>
  );
}
