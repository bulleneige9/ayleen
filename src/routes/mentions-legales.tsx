import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Ayleen" },
      { name: "description", content: "Mentions légales du site Ayleen." },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <div className="min-h-screen mx-auto max-w-3xl px-6 md:px-10 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wide-2 text-muted-foreground hover:text-foreground mb-12">
        <ArrowLeft className="h-3 w-3" /> Accueil
      </Link>
      <Reveal>
        <h1 className="font-display text-5xl md:text-6xl">Mentions <span className="italic text-aurora">légales.</span></h1>
      </Reveal>

      <div className="mt-16 space-y-12 text-sm text-muted-foreground leading-relaxed">
        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">Éditeur du site</h2>
          <p>Ayleen — Vente en ligne de compléments alimentaires</p>
          <p>Registre de commerce : en cours d'enregistrement</p>
          <p>Email : contact@ayleen.com</p>
          <p>Téléphone : +213 55 214 13 43</p>
          <p>Pays : Algérie</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">Hébergement</h2>
          <p>Ce site est hébergé par Cloudflare Workers</p>
          <p>Cloudflare, Inc. — 101 Townsend St, San Francisco, CA 94107, USA</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">Propriété intellectuelle</h2>
          <p>L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive d'Ayleen. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">Données personnelles</h2>
          <p>Les informations collectées lors de vos commandes sont utilisées uniquement dans le cadre du traitement de celles-ci. Elles ne sont jamais transmises à des tiers. Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de modification et de suppression de vos données en contactant contact@ayleen.com.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">Cookies</h2>
          <p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking n'est utilisé.</p>
        </Reveal>
      </div>
    </div>
  );
}