import { useEffect } from "react";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, total } = useCart();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          borderLeft: "1px solid rgba(255,255,255,0.5)",
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/30">
            <h2 className="text-xs uppercase tracking-wide-2">Votre panier</h2>
            <button onClick={close} aria-label="Fermer" className="p-1 hover:opacity-60">
              <X className="h-4 w-4" strokeWidth={1.4} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <p className="text-sm text-muted-foreground">Votre panier est vide.</p>
              <button
                onClick={close}
                className="mt-6 text-xs uppercase tracking-wide-2 underline underline-offset-4 hover:opacity-70"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <>
              <ul className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {items.map(({ product, quantity }) => (
                  <li key={product.slug} className="flex gap-4">
                    <div
                      className="h-20 w-20 shrink-0 rounded-2xl"
                      style={{ backgroundColor: product.softVar }}
                    >
                      <div
                        className="h-full w-full rounded-2xl flex items-center justify-center text-[10px] font-semibold tracking-wide-2"
                        style={{ color: product.accentVar }}
                      >
                        {product.name}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-medium">{product.name}</div>
                          <div className="text-xs text-muted-foreground">{product.capsules} capsules</div>
                        </div>
                        <div className="text-sm">{(product.price * quantity).toFixed(2)} DZD</div>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center glass rounded-full overflow-hidden">
                          <button onClick={() => setQty(product.slug, quantity - 1)} className="btn p-1.5"><Minus className="h-3 w-3" /></button>
                          <span className="w-8 text-center text-xs">{quantity}</span>
                          <button onClick={() => setQty(product.slug, quantity + 1)} className="btn p-1.5"><Plus className="h-3 w-3" /></button>
                        </div>
                        <button onClick={() => remove(product.slug)} className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground">Retirer</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/30 px-6 py-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-medium">{total.toFixed(2)} DZD</span>
                </div>
                <button className="btn w-full glass py-4 text-xs uppercase tracking-wide-2 rounded-full">
                  Passer commande
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}