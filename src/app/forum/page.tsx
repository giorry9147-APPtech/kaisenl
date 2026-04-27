import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Forum - Kaise.nl",
  description: "Praat mee op het Kaise.nl forum. Discussies over events, tips en meer.",
};

export default function ForumPage() {
  return (
    <div className="bg-black text-white">
      <PageHero
        icon="fa-comments"
        label="Community"
        title="Forum"
        description="Praat mee met de multiculturele events community. Deel tips, vragen en ervaringen."
      />

      <section className="section">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow/20 bg-yellow/5">
              <i className="fa fa-comments text-3xl text-yellow"></i>
            </div>
            <h2 className="text-2xl font-bold uppercase">Binnenkort beschikbaar</h2>
            <p className="max-w-md text-gray-1">
              Het forum is momenteel in opbouw. Binnenkort kun je hier discussiëren over events, artiesten, tips en meer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
