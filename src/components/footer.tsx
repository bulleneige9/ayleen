import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        background: "rgba(255,255,255,0.3)",
        backdropFilter: "blur(30px) saturate(180%)",
        WebkitBackdropFilter: "blur(30px) saturate(180%)",
        borderTop: "1px solid rgba(255,255,255,0.5)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-sm font-semibold tracking-brand">A Y L E E N</div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Compléments alimentaires naturels, formulés pour soutenir un équilibre intérieur durable.
          </p>
          <form
            className="mt-8 flex max-w-sm items-center gap-2 pb-2"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.15)" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Votre email"
              className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button className="text-xs uppercase tracking-wide-2 text-foreground hover:opacity-70">
              S'inscrire
            </button>
          </form>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide-2 text-muted-foreground">Boutique</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/produit/$slug" params={{ slug: "prosta" }} className="hover:opacity-60">Prosta+</Link></li>
            <li><Link to="/produit/$slug" params={{ slug: "serenite" }} className="hover:opacity-60">Sérénité+</Link></li>
            <li><Link to="/produit/$slug" params={{ slug: "sommeil" }} className="hover:opacity-60">Sommeil+</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide-2 text-muted-foreground">Maison</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/notre-science" className="hover:opacity-60">Notre Science</Link></li>
            <li><Link to="/a-propos" className="hover:opacity-60">À Propos</Link></li>
            <li><a href="#" className="hover:opacity-60">Mentions légales</a></li>
            <li><a href="#" className="hover:opacity-60">CGV</a></li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.4)" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ayleen. Tous droits réservés.</div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="h-4 w-4" strokeWidth={1.4} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook className="h-4 w-4" strokeWidth={1.4} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}