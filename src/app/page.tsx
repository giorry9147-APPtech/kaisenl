import EventCard from "@/components/EventCard";
import FeaturedEvent from "@/components/FeaturedEvent";
import Hero from "@/components/Hero";
import { Button } from "@/components/Button";
import { Newsletter } from "@/components/Newsletter";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SnapshotGrid } from "@/components/SnapshotGrid";
import StoriesBar from "@/components/StoriesBar";
import Ticker from "@/components/Ticker";
import { forumTopics, homeEvents, latestSnapshots, newsCards } from "@/lib/site-data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Ticker />
      <StoriesBar />

      <section className="section">
        <div className="container">
          <SectionHeader title="Uitgelicht" highlight="Event" href="/agenda" linkLabel="Alle events" />
          <FeaturedEvent
            image="/images/upcomingevent.jpeg"
            title="The Biggest Party of the Year"
            date="Woensdag 13 Mei 2026"
            venue="Zichtenburg, Den Haag"
            time="21:00 - 05:00"
            price="Vanaf €15 · VIP €40"
            ageRestriction="18+"
            badges={["Hot", "13 Mei 2026"]}
            artists="Rasika Dindial · The Starzz · DJ Jerrel · Junior Flex · DJ Dolly · MC Wicked"
          />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <SectionHeader title="Komende" highlight="Events" href="/agenda" linkLabel="Volledige agenda" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homeEvents.map((event, idx) => (
              <EventCard key={event.title} {...event} delay={idx % 4} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      <section className="section border-y border-white/10 bg-dark-1">
        <div className="container">
          <SectionHeader
            eyebrow="Foto's rechtstreeks van de events"
            title="Laatste"
            highlight="Snapshots"
            href="/snapshots"
            linkLabel="Alle foto's"
          />
          <SnapshotGrid items={latestSnapshots} showLightbox={false} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Laatste" highlight="Nieuws" href="/nieuws" linkLabel="Meer nieuws" />
          <div className="grid gap-6 md:grid-cols-3">
            {newsCards.slice(0, 3).map((article, idx) => (
              <div key={article.title} className={idx > 0 ? `delay-${idx}` : ""}>
                <NewsCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-white/10 bg-dark-1">
        <div className="container">
          <SectionHeader title="Community" highlight="Forum" href="/forum" linkLabel="Naar forum" />
          <div className="space-y-3 fade-up">
            {forumTopics.slice(0, 4).map((topic) => (
              <article key={topic.title} className="grid gap-4 rounded-md border border-white/10 bg-dark-2 p-4 transition-colors hover:border-yellow/40 md:grid-cols-[56px_1fr_auto] md:items-center">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={topic.avatar} alt="" fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold transition-colors hover:text-yellow">{topic.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-1">
                    <span>door <strong className="text-white">{topic.author}</strong></span>
                    <span>- {topic.category}</span>
                    <span>- {topic.age}</span>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-gray-1">
                  <span><i className="fa fa-comment mr-2"></i>{topic.replies}</span>
                  <span><i className="fa fa-eye mr-2"></i>{topic.views}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center fade-up">
            <Button variant="outline" href="/forum">
              <i className="fa fa-comments"></i> Praat mee op het forum
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
