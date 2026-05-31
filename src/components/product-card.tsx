import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl shadow-soft"
    >
      <Link
        to="/produit/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-[4/5] overflow-hidden rounded-t-3xl"
        style={{ backgroundColor: product.softVar }}
      >
        {/* Color burst */}
        <motion.div
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-50 blur-3xl"
          style={{ backgroundColor: product.accentVar }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Vertical brand text */}
        <div
          className="absolute left-5 top-6 text-[10px] uppercase tracking-brand"
          style={{ color: product.accentVar, writingMode: "vertical-rl" }}
        >
          A · Y · L · E · E · N
        </div>

        {/* Badges */}
        <div className="absolute top-5 right-5 flex flex-col gap-2 items-end">
          <span
            className="rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wide-2"
            style={{ color: product.accentVar }}
          >
            Naturel
          </span>
          <span className="rounded-full bg-foreground/90 px-3 py-1 text-[10px] uppercase tracking-wide-2 text-background">
            {product.weight}
          </span>
        </div>

        {/* Product image */}
        <div className="relative h-full w-full flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-full w-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Benefits slide-in */}
        <div
          className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0"
          style={{
            background: "linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 100%)",
            backdropFilter: "blur(24px) saturate(200%)",
            WebkitBackdropFilter: "blur(24px) saturate(200%)",
            borderTop: "1px solid rgba(255,255,255,0.6)",
          }}
        >
          <ul className="space-y-2 text-xs text-foreground">
            {product.benefits.map((b) => (
              <li key={b.fr} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: product.accentVar }} />
                {b.fr}
              </li>
            ))}
          </ul>
        </div>
      </Link>

      <div className="glass p-6 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-2xl truncate">{product.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{product.tagline}</p>
          <div className="mt-3 text-base font-medium">{product.price} DZD</div>
        </div>
        {product.shopifyUrl ? (
          <a href={product.shopifyUrl} target="_blank" rel="noopener noreferrer" className="btn flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-background shadow-pop text-xs" style={{ backgroundColor: product.accentVar }}>→</a>
        ) : (
          <Link
            to="/produit/$slug"
            params={{ slug: product.slug }}
            className="btn flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-background shadow-pop text-xs"
            style={{ backgroundColor: product.accentVar }}
          >
            →
          </Link>
        )}
      </div>
    </motion.article>
  );
}