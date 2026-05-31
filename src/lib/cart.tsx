import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Product } from "@/lib/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartCtx {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (p: Product) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, q: number) => void;
  total: number;
  count: number;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add = useCallback((p: Product) => {
    setItems((prev) => {
      const found = prev.find((i) => i.product.slug === p.slug);
      if (found) {
        return prev.map((i) =>
          i.product.slug === p.slug ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { product: p, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, q: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.product.slug === slug ? { ...i, quantity: Math.max(0, q) } : i))
        .filter((i) => i.quantity > 0),
    );
  }, []);

  const total = items.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <Ctx.Provider
      value={{
        items,
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        add,
        remove,
        setQty,
        total,
        count,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
