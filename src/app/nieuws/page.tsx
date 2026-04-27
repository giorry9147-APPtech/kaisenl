import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Nieuws - Kaise.nl",
  description: "Het laatste nieuws uit de multiculturele events scene van Nederland.",
};

export default function NieuwsPage() {
  return (
    <div className="bg-black text-white">
      <PageHero
        icon="fa-newspaper"
        label="Actueel"
        title="Nieuws"
        description="Het laatste nieuws, reviews en interviews uit de multiculturele events scene van Nederland."
      />

      <section className="section">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow/20 bg-yellow/5">
              <i className="fa fa-newspaper text-3xl text-yellow"></i>
            </div>
            <h2 className="text-2xl font-bold uppercase">Binnenkort beschikbaar</h2>
            <p className="max-w-md text-gray-1">
              De nieuwspagina is momenteel in opbouw. Binnenkort vind je hier het laatste nieuws, reviews en interviews uit de multiculturele events scene.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
