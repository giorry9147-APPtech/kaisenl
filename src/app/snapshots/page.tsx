import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { SnapshotGrid } from "@/components/SnapshotGrid";
import StoriesBar from "@/components/StoriesBar";
import { snapshotItems } from "@/lib/site-data";

export const metadata = {
  title: "Snapshots - Kaise.nl",
  description: "Foto's rechtstreeks van de events. Multicultureel Nederland in beeld.",
};

const tabs = [
  ["fa-th", "Alle foto's"],
  ["fa-music", "Clubs"],
  ["fa-star", "Festivals"],
  ["fa-microphone", "Concerten"],
  ["fa-champagne-glasses", "Parties"],
];

export default function SnapshotsPage() {
  return (
    <div className="bg-black text-white">
      <PageHero
        icon="fa-camera"
        label="Fotogalerij"
        title="Snapshots"
        description="Foto's rechtstreeks van de beste multiculturele events in Nederland. Duizenden momenten vastgelegd."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#snapshots" variant="primary">
            <i className="fa fa-images"></i> Bekijk foto&apos;s
          </Button>
          <Button href="/agenda" variant="outline">
            <i className="fa fa-calendar"></i> Events
          </Button>
        </div>
      </PageHero>

      <StoriesBar />

      <section id="snapshots" className="border-b border-white/10 bg-dark-1 py-8">
        <div className="container">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {tabs.map(([icon, label], index) => (
              <button
                key={label}
                type="button"
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  index === 0 ? "border-yellow bg-yellow text-black" : "border-white/10 text-gray-1 hover:border-yellow hover:text-yellow"
                }`}
              >
                <i className={`fa ${icon}`}></i> {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-1 pb-20 pt-1">
        <div className="container px-0">
          <SnapshotGrid items={snapshotItems} />
        </div>
      </section>
    </div>
  );
}
