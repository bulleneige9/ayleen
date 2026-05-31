import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Boutique — Ayleen" },
      { name: "description", content: "Découvrez la collection Ayleen : Prosta+, Sérénité+ et Sommeil+." },
      { property: "og:title", content: "Boutique Ayleen" },
      { property: "og:description", content: "La collection complète de compléments alimentaires Ayleen." },
    ],
  }),
  component: Boutique,
});

function Boutique() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <span className="text-[11px] uppercase tracking-wide-2 text-muted-foreground">La collection</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">
            Boutique <span className="italic text-aurora">éclat.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Trois formulations naturelles, pensées pour accompagner les rituels essentiels du quotidien.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}