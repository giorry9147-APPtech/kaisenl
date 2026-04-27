import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Tickets - Kaise.nl",
  description: "Koop tickets voor de beste multiculturele events in Nederland via Kaise.nl.",
};

const events = [
  {
    id: "welkomst-party",
    image: "/images/upcomingevent.jpeg",
    title: "Welkomst Party Starzz from Surinam",
    subtitle: "In 2 zalen: No Merxi · SU · Rasika Dindial Trinidad · The Starzz",
    date: "Woensdag 13 Mei 2026",
    time: "22:00",
    venue: "Zichtenburg",
    address: "Zichtenburglaan, Den Haag",
    age: "18+",
    status: "Hot",
    tiers: [
      { name: "Fase 1 – Solo",  price: "€15,-",  description: "1 persoon",    paylink: null },
      { name: "Fase 1 – Duo",   price: "€25,-",  description: "2 personen",   paylink: null },
      { name: "Groep",          price: "€40,-",  description: "Groepsticket", paylink: null },
      { name: "VIP",            price: "€40,-",  description: "VIP toegang",  paylink: null },
    ],
  },
  {
    id: "voetbaltournooi",
    image: "https://picsum.photos/seed/voetbal/800/400",
    title: "Hemelvaarts Voetbaltournooi",
    subtitle: "The Starzz from Surinam",
    date: "Donderdag 14 Mei 2026",
    time: "15:00",
    venue: "SVH Den Haag",
    address: "Noordweg 74, Den Haag",
    age: "All ages",
    status: null,
    tiers: [
      { name: "Toegang", price: "Nader bekend", description: "Prijs volgt binnenkort", paylink: null },
    ],
  },
];

export default function TicketsPage() {
  return (
    <div className="bg-black text-white">
      <PageHero
        icon="fa-ticket"
        label="Tickets"
        title="Koop Tickets"
        description="Bestel hier jouw tickets voor de beste events. Veilig en snel geregeld via Kaise.nl."
      />

      <section className="section">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {events.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-lg border border-white/10 bg-dark-2"
              >
                {/* Event header */}
                <div className="relative h-56 w-full md:h-72">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-2 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    {event.status && (
                      <span className="mb-3 inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase text-black">
                        {event.status}
                      </span>
                    )}
                    <h2 className="text-2xl font-bold md:text-3xl">{event.title}</h2>
                    <p className="mt-1 text-sm text-gray-1">{event.subtitle}</p>
                  </div>
                </div>

                {/* Event info */}
                <div className="border-b border-white/10 px-6 py-4">
                  <div className="flex flex-wrap gap-5 text-sm text-gray-1">
                    <span><i className="fa fa-calendar mr-2 text-yellow"></i>{event.date}</span>
                    <span><i className="fa fa-clock mr-2 text-yellow"></i>{event.time}</span>
                    <span><i className="fa fa-location-dot mr-2 text-yellow"></i>{event.venue} — {event.address}</span>
                    <span><i className="fa fa-user mr-2 text-yellow"></i>{event.age}</span>
                  </div>
                </div>

                {/* Ticket tiers */}
                <div className="p-6">
                  <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-[.12em] text-gray-1">
                    Ticket categorieën
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {event.tiers.map((tier) => (
                      <div
                        key={tier.name}
                        className="flex items-center justify-between gap-4 rounded-sm border border-white/10 bg-dark-3 p-4 transition-colors hover:border-yellow/30"
                      >
                        <div>
                          <div className="font-semibold">{tier.name}</div>
                          <div className="text-xs text-gray-1">{tier.description}</div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="font-heading text-xl font-bold text-yellow">{tier.price}</div>
                          {tier.paylink ? (
                            <a
                              href={tier.paylink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-xs bg-yellow px-4 py-2 text-sm font-bold text-black transition-all hover:brightness-110"
                            >
                              <i className="fa fa-ticket"></i> Kopen
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-xs border border-white/10 px-4 py-2 text-sm font-semibold text-gray-2 cursor-not-allowed">
                              <i className="fa fa-clock"></i> Binnenkort
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 flex items-start gap-2 rounded-sm border border-yellow/20 bg-yellow/5 p-4 text-sm text-gray-1">
                    <i className="fa fa-circle-info mt-0.5 text-yellow"></i>
                    Betaallinks worden binnenkort toegevoegd. Houd onze social media in de gaten of schrijf je in voor de nieuwsbrief.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
