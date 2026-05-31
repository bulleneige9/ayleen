import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Microscope, Sprout, ShieldCheck, BookOpen } from "lucide-react";

export const Route = createFileRoute("/notre-science")({
  head: () => ({
    meta: [
      { title: "Notre Science — Ayleen" },
      { name: "description", content: "La science derrière chaque formulation Ayleen : ingrédients d'origine naturelle, dosages cliniques, transparence totale." },
      { property: "og:title", content: "Notre Science — Ayleen" },
      { property: "og:description", content: "Transparence, rigueur scientifique et naturalité." },
    ],
  }),
  component: Science,
});

function Science() {
  const pillars = [
    { icon: Microscope, title: "Recherche clinique", desc: "Chaque actif est sélectionné sur la base d'études cliniques publiées." },
    { icon: Sprout, title: "Origine naturelle", desc: "Extraits de plantes standardisés, traçabilité complète des matières premières." },
    { icon: ShieldCheck, title: "Sécurité testée", desc: "Contrôles qualité et analyses indépendantes sur chaque lot." },
    { icon: BookOpen, title: "Transparence", desc: "Liste complète des ingrédients, dosages et sources, sans zone d'ombre." },
  ];

  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">Notre Science</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-light max-w-3xl">
            La rigueur scientifique au service du naturel.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Chez Ayleen, chaque formulation est pensée comme un protocole : ingrédients sélectionnés pour leur efficacité prouvée, dosages alignés sur la recherche clinique, et transparence totale sur ce que vous consommez.
          </p>
        </Reveal>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 grid md:grid-cols-2 gap-10">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex gap-6">
                <p.icon className="h-6 w-6 mt-1 shrink-0" strokeWidth={1.2} />
                <div>
                  <h3 className="text-sm uppercase tracking-wide-2">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}