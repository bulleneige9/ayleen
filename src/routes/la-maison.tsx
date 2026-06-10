import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";
import { Microscope, Sprout, ShieldCheck, BookOpen, Leaf, FlaskConical, Heart, ArrowRight, Zap } from "lucide-react";
import serenite from "@/assets/ayleen-serenite.jpg";

export const Route = createFileRoute("/la-maison")({
  head: () => ({
    meta: [
      { title: "La Maison Ayleen — Notre histoire & notre science" },
      { name: "description", content: "Découvrez la maison Ayleen : notre histoire, nos valeurs et la science derrière chaque formulation naturelle. Compléments alimentaires premium en Algérie." },
      { property: "og:title", content: "La Maison Ayleen" },
      { property: "og:description", content: "Notre histoire, nos valeurs, notre science." },
    ],
  }),
  component: LaMaison,
});

function LaMaison() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">La Maison Ayleen</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl leading-tight">
            Née en Algérie,<br />
            <span className="italic text-aurora">pensée pour vous.</span>
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Ayleen est née d'une frustration partagée : trouver en Algérie des compléments alimentaires de qualité, transparents sur leur composition, efficaces sur le long terme — c'était presque impossible.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Nous avons changé ça. Avec une vision claire : des formules naturelles, rigoureusement dosées, accessibles à tous les Algériens, sans compromis sur la qualité.
          </p>
          <Link to="/boutique" className="btn mt-8 inline-flex items-center gap-3 rounded-full glass px-6 py-3 text-xs uppercase tracking-wide-2">
            Découvrir nos produits <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted shadow-soft">
            <img src={serenite} alt="Ayleen" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* CHIFFRES */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <Reveal>
          <div className="grid grid-cols-3 divide-x" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            {[
              { value: "3", unit: "", label: "Produits", sub: "Formulés avec soin" },
              { value: "100", unit: "%", label: "Naturel", sub: "Actifs d'origine végétale" },
              { value: "48", unit: "h", label: "Livraison", sub: "Partout en Algérie" },
            ].map(({ value, unit, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center px-4 py-10 gap-1">
                <span className="text-aurora font-display text-5xl md:text-7xl leading-none tracking-tight">
                  {value}<span className="text-2xl md:text-4xl">{unit}</span>
                </span>
                <span className="mt-2 text-[10px] uppercase tracking-wide-2 text-foreground/70">{label}</span>
                <span className="text-[11px] text-muted-foreground">{sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* NOS VALEURS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">Nos valeurs</span>
          <h2 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">
            Ce qui nous <span className="italic text-aurora">guide.</span>
          </h2>
        </Reveal>
        <div className="mt-16">
          {[
            { icon: Leaf, num: "01", title: "Naturalité", desc: "Nous ne sélectionnons que des actifs d'origine végétale, traçables et éprouvés. Zéro additif artificiel, zéro compromis.", color: "var(--serenite)" },
            { icon: FlaskConical, num: "02", title: "Rigueur scientifique", desc: "Chaque formulation est validée par des experts. Nos dosages sont alignés sur la recherche clinique internationale.", color: "var(--prosta)" },
            { icon: Heart, num: "03", title: "Accessibilité", desc: "Le bien-être de qualité doit être accessible à tous les Algériens. C'est notre engagement quotidien.", color: "var(--sommeil)" },
          ].map((v, i) => (
            <Reveal key={v.num} delay={i * 100}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start gap-6 md:gap-8 py-10 border-b"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground w-8 pt-1 shrink-0">{v.num}</span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: v.color }}>
                  <v.icon className="h-5 w-5 text-background" strokeWidth={1.4} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-3xl md:text-4xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-xl">{v.desc}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 mt-2 hidden md:block" strokeWidth={1.4} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NOTRE SCIENCE */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">Notre science</span>
          <h2 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">
            La rigueur scientifique<br />
            <span className="italic text-aurora">au service du naturel.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Chaque formulation est pensée comme un protocole : ingrédients sélectionnés pour leur efficacité prouvée, dosages alignés sur la recherche clinique, transparence totale.
          </p>
        </Reveal>
        <div className="mt-16">
          {[
            { icon: Microscope, num: "01", title: "Recherche clinique", desc: "Chaque actif est sélectionné sur la base d'études cliniques publiées dans des revues scientifiques reconnues.", color: "var(--prosta)" },
            { icon: Sprout, num: "02", title: "Origine naturelle", desc: "Extraits de plantes standardisés, garantissant une concentration précise en principes actifs. Chaque matière première est traçable.", color: "var(--serenite)" },
            { icon: ShieldCheck, num: "03", title: "Sécurité testée", desc: "Contrôles qualité rigoureux et analyses indépendantes sur chaque lot. Absence de contaminants garantie.", color: "var(--sommeil)" },
            { icon: BookOpen, num: "04", title: "Transparence totale", desc: "Liste complète des ingrédients, dosages précis et sources scientifiques disponibles sur demande.", color: "var(--prosta)" },
          ].map((v, i) => (
            <Reveal key={v.num} delay={i * 100}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start gap-6 md:gap-8 py-10 border-b"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground w-8 pt-1 shrink-0">{v.num}</span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: v.color }}>
                  <v.icon className="h-5 w-5 text-background" strokeWidth={1.4} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-3xl md:text-4xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-xl">{v.desc}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 mt-2 hidden md:block" strokeWidth={1.4} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INGRÉDIENTS CLÉS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">Ingrédients phares</span>
          <h2 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">
            Des actifs <span className="italic text-aurora">prouvés.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            { name: "Ashwagandha", benefit: "Adaptogène puissant — réduit le cortisol et améliore la résistance au stress", product: "SÉRÉNITÉ+", color: "var(--serenite)" },
            { name: "Mélatonine", benefit: "Hormone naturelle du sommeil — réduit le temps d'endormissement", product: "SOMMEIL+", color: "var(--sommeil)" },
            { name: "Extrait de palmier nain", benefit: "Soutien prostatique cliniquement validé — réduit les symptômes urinaires", product: "PROSTA+", color: "var(--prosta)" },
            { name: "Magnésium", benefit: "Cofacteur essentiel — contribue au fonctionnement normal du système nerveux", product: "SÉRÉNITÉ+", color: "var(--serenite)" },
            { name: "Valériane", benefit: "Plante sédative traditionnelle — favorise un sommeil de qualité sans accoutumance", product: "SOMMEIL+", color: "var(--sommeil)" },
            { name: "Zinc", benefit: "Oligo-élément essentiel — soutient la santé reproductive et immunitaire", product: "PROSTA+", color: "var(--prosta)" },
          ].map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <div
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)", border: "1px solid rgba(255,255,255,0.5)" }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: item.color }}>
                  <Leaf className="h-4 w-4 text-background" strokeWidth={1.4} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <span className="text-[10px] uppercase tracking-wide-2 rounded-full px-2 py-0.5 text-white" style={{ backgroundColor: item.color }}>{item.product}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.benefit}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-4xl px-6 md:px-10 py-24 text-center">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl font-light leading-relaxed">
            "Prendre soin de soi est un acte d'élégance.<br />
            <span className="italic text-aurora">Nous le rendons simple, naturel, durable.</span>"
          </p>
          <p className="mt-8 text-[11px] uppercase tracking-wide-2 text-muted-foreground">— La maison Ayleen</p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] glass p-12 md:p-20 text-center shadow-pop">
            <h2 className="relative font-display text-5xl md:text-7xl">Rejoignez Ayleen.</h2>
            <p className="relative mx-auto mt-6 max-w-lg text-base md:text-lg text-foreground/70">
              Découvrez nos formulations naturelles et commencez votre rituel bien-être dès aujourd'hui.
            </p>
            <Link to="/boutique" className="btn mt-10 inline-flex items-center gap-3 rounded-full glass px-8 py-4 text-xs uppercase tracking-wide-2 shadow-pop">
              Voir la boutique <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
          </div>
        </Reveal>
      </section>

    </div>
  );
}