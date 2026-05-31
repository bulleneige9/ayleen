import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import serenite from "@/assets/ayleen-serenite.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos — Ayleen" },
      { name: "description", content: "Ayleen, une maison dédiée au bien-être, fondée sur la naturalité, la rigueur et l'élégance." },
      { property: "og:title", content: "À Propos — Ayleen" },
      { property: "og:description", content: "Notre vision, notre engagement, notre maison." },
    ],
  }),
  component: APropos,
});

function APropos() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">À Propos</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-light leading-tight">
            Une maison<br />du bien-être.
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Ayleen est née d'une conviction simple : le bien-être ne devrait jamais être un compromis. Ni entre nature et efficacité. Ni entre simplicité et exigence.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Chaque formule est conçue avec la même attention : actifs naturels sélectionnés, dosages mesurés, packaging épuré. Une maison où chaque détail compte.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            <img src={serenite} alt="Ayleen Sérénité+" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-24 text-center">
          <Reveal>
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              "Prendre soin de soi est un acte d'élégance.<br />Nous le rendons simple, naturel, durable."
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}