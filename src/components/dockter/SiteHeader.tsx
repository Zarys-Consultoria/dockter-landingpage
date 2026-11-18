"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoDeep from "@/assets/brand/dockter-logo-deep.svg";
import { featureNav } from "@/components/dockter/data";

const anchorLinks = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#duvidas", label: "Dúvidas" },
  { href: "/#contato", label: "Fale conosco" },
];

function normalize(path: string) {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function SiteHeader() {
  const pathname = normalize(usePathname());
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ddOpen) return;
    function onDown(e: MouseEvent) {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) {
        setDdOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDdOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [ddOpen]);

  function onAnchor(e: ReactMouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute("href");
    setMenuOpen(false);
    if (!href || !href.startsWith("/#") || !isHome) return;
    const el = document.getElementById(href.slice(2));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  const navClass =
    "py-[10px] text-base font-medium text-ink transition-colors hover:text-brand";

  return (
    <header className="sticky top-0 z-40 border-b border-ice bg-cloud">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-3.5">
        <Link
          href={isHome ? "/#inicio" : "/"}
          onClick={onAnchor}
          aria-label="Dockter — início"
          className="flex items-center py-1.5"
        >
          <Image
            src={logoDeep}
            alt="Dockter"
            width={190}
            height={64}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-x-8 gap-y-1 lg:flex"
        >
          <Link href="/#solucoes" onClick={onAnchor} className={navClass}>
            Soluções
          </Link>

          <div className="relative" ref={ddRef}>
            <button
              type="button"
              aria-expanded={ddOpen}
              onClick={() => setDdOpen((v) => !v)}
              className={`flex items-center gap-1.5 ${navClass}`}
            >
              Funcionalidades
              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className={`transition-transform duration-200 ${ddOpen ? "rotate-180" : ""}`}
              />
            </button>
            {ddOpen && (
              <div className="absolute left-[-16px] top-[calc(100%+10px)] z-30 flex w-[360px] max-w-[calc(100vw-32px)] flex-col gap-0.5 rounded-[20px] border border-ice bg-white p-2 shadow-[0_18px_40px_rgba(24,39,69,0.14)]">
                {featureNav.map((f) => {
                  const active = pathname === f.href;
                  return (
                    <Link
                      key={f.href}
                      href={f.href}
                      onClick={() => setDdOpen(false)}
                      className={`flex items-start gap-3.5 rounded-[14px] px-3.5 py-3 transition-colors ${
                        active ? "bg-ice" : "hover:bg-cloud"
                      }`}
                    >
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand text-cloud">
                        <f.icon size={20} strokeWidth={2} />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="flex items-center gap-2 font-display text-[15px] font-bold text-ink">
                          {f.title}
                          {f.badge && (
                            <span className="rounded-full bg-ice px-2 py-0.5 text-[11px] font-semibold text-ink">
                              {f.badge}
                            </span>
                          )}
                        </span>
                        <span className="text-sm leading-snug text-muted">
                          {f.desc}
                        </span>
                      </span>
                    </Link>
                  );
                })}
                <Link
                  href="/#funcionalidades"
                  onClick={onAnchor}
                  className="mx-3.5 mb-2 mt-1.5 border-t border-ice pt-2.5 text-sm font-semibold text-brand"
                >
                  Ver todas as funcionalidades
                </Link>
              </div>
            )}
          </div>

          <Link href="/planos" className={navClass}>
            Planos
          </Link>
          <Link href="/#duvidas" onClick={onAnchor} className={navClass}>
            Dúvidas
          </Link>
          <Link href="/#contato" onClick={onAnchor} className={navClass}>
            Fale conosco
          </Link>
          <Link
            href="/#planos"
            onClick={onAnchor}
            className="rounded-full bg-brand px-[22px] py-3 font-semibold text-cloud transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink"
          >
            Teste grátis por 30 dias
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-ice lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Menu"
          className="animate-menu-open border-t border-ice bg-cloud px-6 pb-6 pt-2 lg:hidden"
        >
          <Link
            href="/#solucoes"
            onClick={onAnchor}
            className="block rounded-xl px-3 py-3 font-medium text-ink active:bg-ice"
          >
            Soluções
          </Link>
          <span className="block px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Funcionalidades
          </span>
          {featureNav.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-ink active:bg-ice"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] bg-brand text-cloud">
                <f.icon size={18} strokeWidth={2} />
              </span>
              <span className="flex items-center gap-2 font-medium">
                {f.title}
                {f.badge && (
                  <span className="rounded-full bg-ice px-2 py-0.5 text-[11px] font-semibold">
                    {f.badge}
                  </span>
                )}
              </span>
            </Link>
          ))}
          {anchorLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onAnchor}
              className="block rounded-xl px-3 py-3 font-medium text-ink active:bg-ice"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/planos"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-3 py-3 font-medium text-ink active:bg-ice"
          >
            Planos
          </Link>
          <Link
            href="/#planos"
            onClick={onAnchor}
            className="mt-3 block rounded-full bg-brand px-6 py-3.5 text-center font-semibold text-cloud active:bg-ink"
          >
            Teste grátis por 30 dias
          </Link>
        </nav>
      )}
    </header>
  );
}
