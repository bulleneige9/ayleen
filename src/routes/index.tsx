import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Leaf, FlaskConical, Heart, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const MARQUEE = [
  "100% NATUREL",
  "RITUEL QUOTIDIEN",
  "ÉQUILIBRE & VITALITÉ",
  "TESTÉ EN LABORATOIRE",
];

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="overflow-x-hidden page-wrapper">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen">
        <div className="grain" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-24 pb-32 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-wide-2 text-foreground glass"
            >
              <Sparkles className="h-3 w-3" strokeWidth={2} /> Nouvelle collection 2026
            </motion.span>

            <h1 className="mt-8 font-display text-[15vw] md:text-[10vw] lg:text-[9rem] leading-[0.9] tracking-tight">
              <span className="block">L'équilibre</span>
              <span className="block italic text-aurora">éclatant.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed">
              Trois rituels vibrants pour votre vitalité. Des actifs purs, des couleurs pleines de vie,
              une formulation pensée pour briller au quotidien.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/boutique"
                className="btn group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs uppercase tracking-wide-2 text-foreground shadow-pop glass"
              >
                <span className="relative z-10">Découvrir la gamme</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
              </Link>
              <Link
                to="/notre-science"
                className="btn inline-flex items-center gap-2 rounded-full glass px-6 py-4 text-xs uppercase tracking-wide-2"
              >
                Notre science
              </Link>
            </div>

            {/* Floating rotating badge */}
            <motion.div
              style={{ rotate: rotateBadge }}
              className="absolute right-6 top-32 md:right-20 md:top-40 hidden sm:flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full glass"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 spin-slow">
                <defs>
                  <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="9" letterSpacing="3" fill="currentColor">
                  <textPath href="#circle">AYLEEN · PURE · VIBRANT · 2026 ·</textPath>
                </text>
              </svg>
              <Star className="h-5 w-5" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-white/30 py-4 overflow-hidden" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
          <div className="marquee whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="mx-8 inline-flex items-center gap-8 text-sm font-medium uppercase tracking-wide-2">
                {t}
                <Sparkles className="h-4 w-4" style={{ color: "var(--sommeil)" }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">La collection</span>
              <h2 className="mt-3 font-display text-5xl md:text-7xl">
                Trois rituels,<br />
                <span className="italic text-aurora">infinies sensations.</span>
              </h2>
            </div>
            <Link to="/boutique" className="text-xs uppercase tracking-wide-2 underline underline-offset-4 hover:opacity-70">
              Voir la boutique →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl max-w-3xl text-foreground">
              Pourquoi <span className="italic text-aurora">Ayleen</span> ?
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              { icon: Leaf, title: "100% Naturel", desc: "Des actifs d'origine végétale, choisis pour leur pureté.", color: "var(--serenite)" },
              { icon: FlaskConical, title: "Formulation experte", desc: "Synergies validées par notre comité scientifique.", color: "var(--prosta)" },
              { icon: Heart, title: "Bien-être global", desc: "Pensé pour soutenir corps et esprit en équilibre.", color: "var(--pink-bright)" },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative rounded-3xl p-8 transition-colors"
style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)", border: "1px solid rgba(255,255,255,0.5)" }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: v.color }}
                  >
                    <v.icon className="h-6 w-6 text-background" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
          <Reveal>
            <Sparkles className="mx-auto h-8 w-8" style={{ color: "var(--sommeil)" }} strokeWidth={1.4} />
            <p className="mt-6 font-display text-3xl md:text-5xl leading-tight">
              "L'équilibre n'est pas une destination,<br />
              c'est un <span className="italic text-aurora">rituel quotidien</span>."
            </p>
            <div className="mt-8 text-[11px] uppercase tracking-wide-2 text-muted-foreground">
              — La maison Ayleen
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] glass p-12 md:p-20 text-center shadow-pop">
            <div className="grain" />
            <h2 className="relative font-display text-5xl md:text-7xl">
              Prêt à briller ?
            </h2>
            <p className="relative mx-auto mt-6 max-w-lg text-base md:text-lg text-foreground/70">
              Commencez votre rituel Ayleen aujourd'hui et redécouvrez votre éclat intérieur.
            </p>
            <Link
              to="/boutique"
              className="btn mt-10 inline-flex items-center gap-3 rounded-full glass px-8 py-4 text-xs uppercase tracking-wide-2 shadow-pop"
            >
              Explorer la boutique <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}