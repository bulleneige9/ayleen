import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";

const LANGS = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
] as const;

type Code = (typeof LANGS)[number]["code"];

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Code>("fr");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-full p-2 text-foreground transition-colors hover:bg-muted"
        aria-label="Changer la langue"
      >
        <Globe className="h-4 w-4" strokeWidth={1.4} />
        <span className="text-[10px] uppercase tracking-wide-2">{lang}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-sm border border-border bg-background/95 backdrop-blur-xl shadow-lg">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-4 py-2.5 text-xs text-foreground transition-colors hover:bg-muted"
              dir={l.code === "ar" ? "rtl" : "ltr"}
            >
              <span>{l.label}</span>
              {lang === l.code && <Check className="h-3 w-3" strokeWidth={1.6} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
