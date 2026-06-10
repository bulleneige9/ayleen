import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "CGV — Ayleen" },
      { name: "description", content: "Conditions générales de vente Ayleen." },
    ],
  }),
  component: CGV,
});

function CGV() {
  return (
    <div className="min-h-screen mx-auto max-w-3xl px-6 md:px-10 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wide-2 text-muted-foreground hover:text-foreground mb-12">
        <ArrowLeft className="h-3 w-3" /> Accueil
      </Link>
      <Reveal>
        <h1 className="font-display text-5xl md:text-6xl">Conditions <span className="italic text-aurora">de vente.</span></h1>
      </Reveal>

      <div className="mt-16 space-y-12 text-sm text-muted-foreground leading-relaxed">
        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">1. Objet</h2>
          <p>Les présentes conditions générales de vente régissent les relations contractuelles entre Ayleen et ses clients dans le cadre de la vente en ligne de compléments alimentaires sur le territoire algérien.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">2. Produits</h2>
          <p>Les produits proposés sont des compléments alimentaires naturels. Ils ne se substituent pas à une alimentation variée et équilibrée ni à un mode de vie sain. Tenir hors de portée des enfants. Consulter un médecin avant utilisation en cas de grossesse ou de traitement médical en cours.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">3. Prix</h2>
          <p>Les prix sont indiqués en Dinars Algériens (DZD), toutes taxes comprises. Ayleen se réserve le droit de modifier ses prix à tout moment, les produits étant facturés sur la base des tarifs en vigueur au moment de la validation de la commande.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">4. Commande</h2>
          <p>Toute commande passée sur notre site vaut acceptation des présentes CGV. La commande est confirmée après validation du paiement. Un email de confirmation vous sera envoyé.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">5. Paiement</h2>
          <p>Le paiement s'effectue à la livraison (cash on delivery). Aucune information bancaire n'est collectée sur notre site.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">6. Livraison</h2>
          <p>La livraison est assurée partout en Algérie dans un délai de 24 à 72 heures ouvrables. Les frais de livraison sont indiqués au moment de la commande.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">7. Retours et remboursements</h2>
          <p>En cas de produit défectueux ou non conforme, vous disposez de 30 jours à compter de la réception pour nous contacter à contact@ayleen.com. Nous procéderons au remplacement ou au remboursement selon votre préférence.</p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-foreground mb-4">8. Contact</h2>
          <p>Pour toute question relative à vos commandes : contact@ayleen.com — +213 55 214 13 43</p>
        </Reveal>
      </div>
    </div>
  );
}