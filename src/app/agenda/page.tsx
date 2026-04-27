import FeaturedEvent from "@/components/FeaturedEvent";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { agendaFilters, agendaMonths } from "@/lib/site-data";
import Image from "next/image";

export const metadata = {
  title: "Agenda - Kaise.nl",
  description: "De complete uitgaansagenda voor multicultureel Nederland. Alle events op een plek.",
};

export default function AgendaPage() {
  return (
    <div className="bg-black text-white">
      <PageHero
        icon="fa-calendar"
        label="Events"
        title="Uitgaansagenda"
        description="De complete agenda met alle multiculturele events in Nederland. Vind je volgende event hier."
      />

      <section className="section">
        <div className="container">
          <SectionHeader title="Featured" highlight="Event" />
          <FeaturedEvent
            image="/images/upcomingevent.jpeg"
            title="Welkomst Party Starzz from Surinam"
            date="Woensdag 13 Mei 2026"
            venue="Zichtenburg, Zichtenburglaan, Den Haag"
            time="22:00"
            price="Vanaf €15 · VIP €40"
            ageRestriction="18+"
            artists="No Merxi · SU · Rasika Dindial Trinidad · The Starzz"
            badges={["Hot", "13 Mei 2026"]}
          />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <SectionHeader title="Alle" highlight="Events" />
          <div className="mb-10 flex gap-3 overflow-x-auto pb-2 fade-up">
            {agendaFilters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  index === 0 ? "border-yellow bg-yellow text-black" : "border-white/10 text-gray-1 hover:border-yellow hover:text-yellow"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {agendaMonths.map((group) => (
              <div key={group.month}>
                <div className="mb-5 inline-flex items-center gap-3 border-y border-yellow/30 bg-yellow/10 px-4 py-2 font-heading text-sm font-bold uppercase tracking-[.16em] text-yellow">
                  <i className="fa fa-calendar"></i> {group.month}
                </div>
                <div className="space-y-4">
                  {group.events.map((event) => (
                    <article
                      key={`${event.month}-${event.day}-${event.title}`}
                      className="grid gap-4 rounded-md border border-white/10 bg-dark-2 p-4 transition-colors hover:border-yellow/35 md:grid-cols-[74px_96px_1fr_auto] md:items-center"
                    >
                      <div className="flex h-[74px] w-[74px] flex-col items-center justify-center rounded-sm border border-yellow/30 bg-yellow/10">
                        <span className="font-heading text-3xl font-bold leading-none text-yellow">{event.day}</span>
                        <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[.14em] text-gray-1">{event.month}</span>
                      </div>
                      <div className="relative h-24 w-full overflow-hidden rounded-sm bg-dark-3 md:w-24">
                        <Image src={event.image} alt={event.title} fill sizes="96px" className="object-cover" />
                      </div>
                      <div>
                        <h2 className="mb-2 text-2xl font-bold">{event.title}</h2>
                        <div className="mb-3 flex flex-wrap gap-3 text-sm text-gray-1">
                          <span><i className="fa fa-location-dot mr-2 text-yellow"></i>{event.venue}</span>
                          <span><i className="fa fa-clock mr-2 text-yellow"></i>{event.time}</span>
                          <span><i className="fa fa-user mr-2 text-yellow"></i>{event.age}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.genres.map((genre) => (
                            <span key={genre} className="rounded-full bg-dark-4 px-2.5 py-1 text-xs text-gray-1">
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-end">
                        <div className="font-heading text-lg font-bold text-white">{event.price}</div>
                        {event.status && <span className="rounded-full border border-white/10 bg-dark-4 px-3 py-1 text-xs font-bold uppercase text-gray-1">{event.status}</span>}
                        <Button variant="sm" href="/tickets">
                          <i className="fa fa-ticket"></i> Tickets
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
