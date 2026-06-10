import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { LoadingScreen } from "@/components/loading-screen";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-light tracking-tight">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">Cette page est introuvable.</p>
        <Link to="/" className="mt-6 inline-block text-xs uppercase tracking-wide-2 underline underline-offset-4">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 text-xs uppercase tracking-wide-2 underline underline-offset-4"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ayleen — Compléments alimentaires naturels | Livraison Algérie" },
      { name: "description", content: "Compléments alimentaires naturels Ayleen : Prosta+, Sérénité+, Sommeil+. Une formulation premium pour votre équilibre." },
      { property: "og:title", content: "Ayleen — Compléments alimentaires premium" },
      { property: "og:description", content: "Une formulation naturelle pour votre équilibre intérieur." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://ayleen.bulleneige9.workers.dev/images/serenite.webp" },
{ property: "og:url", content: "https://ayleen.bulleneige9.workers.dev" },
{ property: "og:locale", content: "fr_FR" },
{ name: "twitter:card", content: "summary_large_image" },
{ name: "twitter:image", content: "https://ayleen.bulleneige9.workers.dev/images/serenite.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" },
      
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "@tanstack/react-router";

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <div
      className="fixed bottom-8 right-8 z-[999]"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn flex h-12 w-12 items-center justify-center rounded-full shadow-pop"
        style={{
          background: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.5)",
        }}
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-5 w-5" strokeWidth={1.4} />
      </button>
    </div>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <LoadingScreen />
        <div className="relative flex min-h-screen flex-col">

          {/* Background fixe global */}
          <div className="pointer-events-none fixed inset-0 z-0" style={{ background: "var(--background)", transition: "background 0.5s ease" }}>
            <div className="blob" style={{ position: "absolute", top: "5%", left: "5%", width: "20vw", height: "20vw", background: "oklch(0.65 0.18 235)", opacity: 0.35 }} />
            <div className="blob" style={{ position: "absolute", top: "8%", right: "10%", width: "15vw", height: "15vw", background: "oklch(0.68 0.18 155)", opacity: 0.35 }} />
            <div className="blob" style={{ position: "absolute", top: "20%", left: "30%", width: "18vw", height: "18vw", background: "oklch(0.55 0.22 295)", opacity: 0.3 }} />
            <div className="blob" style={{ position: "absolute", top: "35%", left: "2%", width: "16vw", height: "16vw", background: "oklch(0.68 0.18 155)", opacity: 0.3 }} />
            <div className="blob" style={{ position: "absolute", top: "38%", right: "5%", width: "20vw", height: "20vw", background: "oklch(0.65 0.18 235)", opacity: 0.35 }} />
            <div className="blob" style={{ position: "absolute", top: "52%", left: "20%", width: "15vw", height: "15vw", background: "oklch(0.55 0.22 295)", opacity: 0.3 }} />
            <div className="blob" style={{ position: "absolute", top: "55%", right: "20%", width: "18vw", height: "18vw", background: "oklch(0.68 0.18 155)", opacity: 0.3 }} />
            <div className="blob" style={{ position: "absolute", top: "68%", left: "5%", width: "20vw", height: "20vw", background: "oklch(0.65 0.18 235)", opacity: 0.35 }} />
            <div className="blob" style={{ position: "absolute", top: "70%", right: "8%", width: "16vw", height: "16vw", background: "oklch(0.55 0.22 295)", opacity: 0.3 }} />
            <div className="blob" style={{ position: "absolute", bottom: "5%", left: "35%", width: "18vw", height: "18vw", background: "oklch(0.68 0.18 155)", opacity: 0.35 }} />
          </div>

          <Header />
          <main className="relative z-10 flex-1">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <CartDrawer />
      </CartProvider>
    </QueryClientProvider>
  );
}