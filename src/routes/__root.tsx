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
      { title: "Ayleen — L'équilibre intérieur, redéfini." },
      { name: "description", content: "Compléments alimentaires naturels Ayleen : Prosta+, Sérénité+, Sommeil+. Une formulation premium pour votre équilibre." },
      { property: "og:title", content: "Ayleen — Compléments alimentaires premium" },
      { property: "og:description", content: "Une formulation naturelle pour votre équilibre intérieur." },
      { property: "og:type", content: "website" },
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
            <Outlet />
          </main>
          <Footer />
        </div>
        <CartDrawer />
      </CartProvider>
    </QueryClientProvider>
  );
}