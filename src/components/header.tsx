import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/boutique", label: "Boutique" },
    { to: "/la-maison", label: "La Maison" },
  ] as const;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          scrolled ? "glass border-b border-white/30" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Ayleen"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs uppercase tracking-wide-2 text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-aurora font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <LanguageSwitcher />

            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              className="btn inline-flex items-center justify-center rounded-full p-2 text-foreground"
              aria-label="Changer le thème"
            >
              {dark ? <Sun className="h-5 w-5" strokeWidth={1.4} /> : <Moon className="h-5 w-5" strokeWidth={1.4} />}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn md:hidden inline-flex items-center justify-center rounded-full p-2 text-foreground"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" strokeWidth={1.4} /> : <Menu className="h-5 w-5" strokeWidth={1.4} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-500 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-aurora font-display text-4xl font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}