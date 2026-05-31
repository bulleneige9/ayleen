import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Leaf, Package, ArrowLeft } from "lucide-react";
import { getProduct, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/produit/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Ayleen` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Ayleen` },
          { property: "og:description", content: loaderData.product.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl py-32 text-center px-6">
      <h1 className="text-2xl font-light">Produit introuvable</h1>
      <Link to="/boutique" className="mt-6 inline-block text-xs uppercase tracking-wide-2 underline underline-offset-4">
        Retour à la boutique
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-xl py-32 text-center px-6">
      <p className="text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const { add } = useCart();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-8">
        <Link
          to="/boutique"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wide-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" /> Boutique
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div
          className="relative aspect-square rounded-[2rem] overflow-hidden flex items-center justify-center shadow-soft"
          style={{ backgroundColor: product.softVar }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute left-6 top-6 text-[10px] uppercase tracking-brand"
            style={{ color: product.accentVar, writingMode: "vertical-rl" }}
          >
            A · Y · L · E · E · N
          </div>
        </div>

        <div
          className="rounded-[2rem] p-8 md:p-10"
          style={{
            background: "rgba(255,255,255,0.35)",
            backdropFilter: "blur(30px) saturate(180%)",
            WebkitBackdropFilter: "blur(30px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          <span
            className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-wide-2"
            style={{ backgroundColor: product.softVar, color: product.accentVar }}
          >
            {product.tagline}
          </span>

          <h1 className="mt-4 font-display text-5xl md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Badge accent={product.accentVar} soft={product.softVar}>
              <Leaf className="h-3.5 w-3.5" strokeWidth={1.4} /> Naturel
            </Badge>
            <Badge accent={product.accentVar} soft={product.softVar}>
              <Package className="h-3.5 w-3.5" strokeWidth={1.4} /> {product.capsules} Capsules
            </Badge>
            <Badge accent={product.accentVar} soft={product.softVar}>
              {product.weight} Poids net
            </Badge>
          </div>

          <div className="mt-10">
            <h3 className="text-xs uppercase tracking-wide-2 text-muted-foreground">
              Bénéfices
            </h3>
            <ul className="mt-4 space-y-2">
              {product.benefits.map((b) => (
                <li
                  key={b.fr}
                  className="flex items-center border-b pb-2 text-sm"
                  style={{ borderColor: "rgba(0,0,0,0.08)" }}
                >
                  <span>{b.fr}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-xs uppercase tracking-wide-2 text-muted-foreground">
              Composition
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {product.ingredients.join(" · ")}
            </p>
          </div>

          <div
            className="mt-12 flex items-center justify-between border-t pt-8"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div>
              <div className="text-2xl font-light">{product.price} DZD</div>
              <div className="text-xs text-muted-foreground">TVA incluse</div>
            </div>

            {product.shopifyUrl ? (
              <a
                href={product.shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-full px-10 py-4 text-xs uppercase tracking-wide-2 text-background shadow-pop"
                style={{ backgroundColor: product.accentVar }}
              >
                Commander →
              </a>
            ) : (
              <button
                onClick={() => add(product)}
                className="btn rounded-full px-10 py-4 text-xs uppercase tracking-wide-2 text-background shadow-pop"
                style={{ backgroundColor: product.accentVar }}
              >
                Ajouter au panier
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({
  children,
  accent,
  soft,
}: {
  children: React.ReactNode;
  accent: string;
  soft: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-wide-2"
      style={{ backgroundColor: soft, color: accent }}
    >
      {children}
    </span>
  );
}