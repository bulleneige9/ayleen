import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import {
  ArrowRight, Sparkles, Leaf, FlaskConical, Heart,
  Star, Search, Beaker, Package, Truck,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

// ─── Data ────────────────────────────────────────────────────────────────────

const MARQUEE_ITEMS = ["100% NATUREL", "RITUEL QUOTIDIEN", "ÉQUILIBRE & VITALITÉ", "TESTÉ EN LABORATOIRE"];

const STATS = [
  { value: "48",  unit: "h",  label: "Livraison rapide",  sub: "Partout en Algérie" },
  { value: "0",   unit: "DA", label: "Paiement sécurisé", sub: "À la livraison" },
  { value: "100", unit: "%",  label: "Qualité certifiée", sub: "Testé en laboratoire" },
] as const;

const STEPS = [
  { icon: Search,  step: "01", title: "Recherche",   desc: "Sélection d'actifs sur la base d'études cliniques rigoureuses.", color: "var(--prosta)" },
  { icon: Beaker,  step: "02", title: "Formulation", desc: "Combinaison des actifs en synergie pour une efficacité maximale.", color: "var(--serenite)" },
  { icon: Package, step: "03", title: "Fabrication", desc: "Production en laboratoire certifié avec contrôles qualité.", color: "var(--sommeil)" },
  { icon: Truck,   step: "04", title: "Livraison",   desc: "Expédition rapide et sécurisée partout en Algérie.", color: "var(--prosta)" },
] as const;

const VALUES = [
  { icon: Leaf,         num: "01", title: "100% Naturel",        desc: "Des actifs d'origine végétale, choisis pour leur pureté et leur efficacité prouvée.", color: "var(--serenite)" },
  { icon: FlaskConical, num: "02", title: "Formulation experte", desc: "Synergies validées par notre comité scientifique pour des résultats mesurables.", color: "var(--prosta)" },
  { icon: Heart,        num: "03", title: "Bien-être global",    desc: "Pensé pour soutenir corps et esprit en équilibre durable au quotidien.", color: "var(--sommeil)" },
] as const;

const REVIEWS = [
  { name: "Karim B.",  location: "Alger",       product: "PROSTA+",   rating: 5, text: "Résultats visibles dès la 3ème semaine. Je recommande vivement ce produit à tous ceux qui cherchent une solution naturelle." },
  { name: "Samira M.", location: "Oran",        product: "SÉRÉNITÉ+", rating: 5, text: "Je me sens beaucoup plus calme et sereine depuis que j'utilise Sérénité+. Mon sommeil s'est aussi amélioré considérablement." },
  { name: "Yacine T.", location: "Constantine", product: "SOMMEIL+",  rating: 5, text: "Enfin un produit qui fonctionne vraiment ! Je m'endors en moins de 20 minutes et je me réveille reposé chaque matin." },
] as const;

const FAQS = [
  { q: "Les produits Ayleen sont-ils naturels ?",         a: "Oui, tous nos compléments sont formulés à base d'actifs d'origine végétale, sans additifs artificiels ni conservateurs." },
  { q: "Combien de temps avant de voir des résultats ?",  a: "Les premiers effets se ressentent généralement après 2 à 4 semaines d'utilisation régulière. Pour des résultats optimaux, une cure de 3 mois est recommandée." },
  { q: "Comment commander ?",                             a: "Rendez-vous sur notre boutique, sélectionnez votre produit et vous serez redirigé vers notre plateforme de commande sécurisée. Livraison partout en Algérie." },
  { q: "Y a-t-il des effets secondaires ?",              a: "Nos produits sont formulés pour être bien tolérés. En cas de doute, consultez votre médecin avant utilisation, notamment si vous prenez des médicaments." },
  { q: "Quelle est votre politique de retour ?",         a: "Nous offrons une garantie satisfaction. Si vous n'êtes pas satisfait, contactez-nous à contact@ayleen.com dans les 30 jours suivant votre achat." },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl ${className}`}
      style={{
        background: "rgba(255,255,255,0.35)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.5)",
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <Reveal>
      {label && <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">{label}</span>}
      <h2 className="mt-3 font-display text-5xl md:text-6xl">{children}</h2>
    </Reveal>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="overflow-x-hidden page-wrapper">

      {/* ── HERO ── */}
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
                Découvrir la gamme
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
              </Link>
              <Link to="/notre-science" className="btn inline-flex items-center gap-2 rounded-full glass px-6 py-4 text-xs uppercase tracking-wide-2">
                Notre science
              </Link>
            </div>

            <motion.div
              style={{ rotate: rotateBadge, willChange: "transform" }}
              aria-hidden
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
        <div
          className="relative border-y border-white/30 py-4 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
        >
          <div className="marquee whitespace-nowrap" aria-hidden>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
              <span key={i} className="mx-8 inline-flex items-center gap-8 text-sm font-medium uppercase tracking-wide-2">
                {t}
                <Sparkles className="h-4 w-4" style={{ color: "var(--sommeil)" }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <SectionHeading label="La collection">
            Trois rituels,<br />
            <span className="italic text-aurora">infinies sensations.</span>
          </SectionHeading>
          <Link
            to="/boutique"
            className="text-xs uppercase tracking-wide-2 underline underline-offset-4 hover:opacity-70 self-end"
          >
            Voir la boutique →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 py-4">
        <Reveal>
          <div
            className="grid grid-cols-3 divide-x"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            {STATS.map(({ value, unit, label, sub }) => (
              <div key={label} className="flex flex-col items-center text-center px-4 py-10 gap-1">
                <span className="text-aurora font-display text-5xl md:text-7xl leading-none tracking-tight">
  {value}
  <span className="text-2xl md:text-4xl">{unit}</span>
</span>
                <span className="mt-2 text-[10px] uppercase tracking-wide-2 text-foreground/70 leading-snug">
                  {label}
                </span>
                <span className="text-[11px] text-muted-foreground">{sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading label="Le processus">
            Comment ça <span className="italic text-aurora">marche ?</span>
          </SectionHeading>
          <div className="mt-20 relative">
            <div
              className="absolute top-8 left-16 right-16 h-px hidden md:block pointer-events-none"
              style={{
                background: "linear-gradient(to right, var(--prosta), var(--serenite), var(--sommeil), var(--prosta))",
                opacity: 0.3,
              }}
              aria-hidden
            />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
              {STEPS.map(({ icon: Icon, step, title, desc, color }, i) => (
                <Reveal key={step} delay={i * 120}>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                    <div
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-background"
                      style={{ border: `2px solid ${color}` }}
                    >
                      <Icon className="h-6 w-6" style={{ color }} strokeWidth={1.4} />
                      <span
                        className="absolute -top-2 -right-2 text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center text-background"
                        style={{ backgroundColor: color }}
                        aria-hidden
                      >
                        {step}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl">{title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading>
            Pourquoi <span className="italic text-aurora">Ayleen</span> ?
          </SectionHeading>
          <div className="mt-16">
            {VALUES.map(({ icon: Icon, num, title, desc, color }, i) => (
              <Reveal key={num} delay={i * 100}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start gap-6 md:gap-8 py-10 border-b"
                  style={{ borderColor: "rgba(0,0,0,0.08)" }}
                >
                  <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground w-8 pt-1 shrink-0">{num}</span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: color }}>
                    <Icon className="h-5 w-5 text-background" strokeWidth={1.4} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-3xl md:text-4xl">{title}</h3>
                    <p className="mt-2 text-sm text-foreground/60 leading-relaxed max-w-xl">{desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 mt-2 hidden md:block" strokeWidth={1.4} />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
          <Reveal>
            <Sparkles className="mx-auto h-8 w-8" style={{ color: "var(--sommeil)" }} strokeWidth={1.4} />
            <blockquote className="mt-6 font-display text-3xl md:text-5xl leading-tight">
              "L'équilibre n'est pas une destination,<br />
              c'est un <span className="italic text-aurora">rituel quotidien</span>."
            </blockquote>
            <p className="mt-8 text-[11px] uppercase tracking-wide-2 text-muted-foreground">— La maison Ayleen</p>
          </Reveal>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <SectionHeading label="Témoignages">
          Ils nous font <span className="italic text-aurora">confiance.</span>
        </SectionHeading>
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {REVIEWS.map(({ name, location, product, rating, text }, i) => (
            <Reveal key={name} delay={i * 120}>
              <GlassCard className="p-8 flex flex-col gap-4 h-full">
                <div className="flex gap-1" aria-label={`${rating} étoiles`}>
                  {Array.from({ length: rating }, (_, j) => (
                    <span key={j} style={{ color: "var(--citrus)" }} aria-hidden>★</span>
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed italic flex-1">"{text}"</p>
                <div className="pt-4 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                  <div className="font-medium text-sm">{name}</div>
                  <div className="text-xs text-muted-foreground">{location} · {product}</div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative mx-auto max-w-4xl px-6 md:px-10 py-24 md:py-32">
        <SectionHeading label="Questions fréquentes">
          Vous avez des <span className="italic text-aurora">questions ?</span>
        </SectionHeading>
        <div className="mt-16 space-y-4">
          {FAQS.map(({ q, a }, i) => (
            <Reveal key={i} delay={i * 80}>
              <GlassCard>
                <details className="group p-6 cursor-pointer">
                  <summary className="flex items-center justify-between text-sm font-medium uppercase tracking-wide-2 list-none">
                    {q}
                    <span className="ml-4 text-lg transition-transform duration-200 group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
                </details>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] glass p-12 md:p-20 text-center shadow-pop">
            <div className="grain" aria-hidden />
            <h2 className="relative font-display text-5xl md:text-7xl">Prêt à briller ?</h2>
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
