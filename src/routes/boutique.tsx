import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, FlaskConical, Shield } from "lucide-react";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Boutique — Ayleen" },
      { name: "description", content: "Découvrez la gamme Ayleen : PROSTA+, SÉRÉNITÉ+ et SOMMEIL+. Compléments alimentaires naturels formulés pour votre équilibre. Livraison partout en Algérie." },
      { property: "og:title", content: "Boutique Ayleen" },
      { property: "og:description", content: "La collection complète de compléments alimentaires Ayleen." },
    ],
  }),
  component: Boutique,
});

function Boutique() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 pt-20 md:pt-28 pb-12">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">La collection 2026</span>
          <h1 className="mt-3 font-display text-6xl md:text-8xl leading-[0.9] tracking-tight">
            Trois rituels,<br />
            <span className="italic text-aurora">un seul objectif.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
            Des formulations naturelles, rigoureusement dosées, pensées pour accompagner les rituels essentiels de votre quotidien.
          </p>
        </Reveal>

        {/* Badges flottants */}
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { icon: Leaf, label: "100% Naturel" },
            { icon: FlaskConical, label: "Validé scientifiquement" },
            { icon: Shield, label: "Livraison Algérie" },
            { icon: Sparkles, label: "Nouvelle collection" },
          ].map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[10px] uppercase tracking-wide-2"
            >
              <badge.icon className="h-3 w-3" strokeWidth={1.6} />
              {badge.label}
            </motion.span>
          ))}
        </div>
      </section>

      {/* PRODUITS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* COMPARATIF */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">Choisir le bon produit</span>
          <h2 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">
            Lequel est fait <span className="italic text-aurora">pour vous ?</span>
          </h2>
        </Reveal>
        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <th className="text-left py-4 pr-8 text-[11px] uppercase tracking-wide-2 text-muted-foreground font-normal w-1/4">Besoin</th>
                {products.map(p => (
                  <th key={p.slug} className="text-left py-4 px-4 font-display text-xl" style={{ color: p.accentVar }}>{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { need: "Confort urinaire", prosta: true, serenite: false, sommeil: false },
                { need: "Réduction du stress", prosta: false, serenite: true, sommeil: false },
                { need: "Améliorer le sommeil", prosta: false, serenite: true, sommeil: true },
                { need: "Équilibre hormonal", prosta: true, serenite: false, sommeil: false },
                { need: "Détente mentale", prosta: false, serenite: true, sommeil: true },
                { need: "Santé prostatique", prosta: true, serenite: false, sommeil: false },
              ].map((row, i) => (
                <tr key={row.need} className="border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  <td className="py-4 pr-8 text-muted-foreground">{row.need}</td>
                  <td className="py-4 px-4 text-center">{row.prosta ? <span style={{ color: "var(--prosta)" }}>✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                  <td className="py-4 px-4 text-center">{row.serenite ? <span style={{ color: "var(--serenite)" }}>✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                  <td className="py-4 px-4 text-center">{row.sommeil ? <span style={{ color: "var(--sommeil)" }}>✓</span> : <span className="text-muted-foreground/30">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-12 pb-24">
        <Reveal>
          <div
            className="rounded-[2.5rem] p-12 md:p-16 text-center"
            style={{
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            <h2 className="font-display text-4xl md:text-5xl">
              Satisfait ou <span className="italic text-aurora">remboursé.</span>
            </h2>
            <p className="mt-4 mx-auto max-w-lg text-base text-muted-foreground leading-relaxed">
              Nous croyons en nos produits. Si vous n'êtes pas satisfait dans les 30 jours suivant votre achat, nous vous remboursons intégralement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/la-maison" className="btn inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-xs uppercase tracking-wide-2">
  La Maison Ayleen <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
</Link>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}