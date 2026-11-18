import Image from "next/image";
import Link from "next/link";
import logoLight from "@/assets/brand/dockter-logo-light.svg";
import zarysSimbolo from "@/assets/brand/zarys-simbolo.svg";
import { INSTAGRAM_URL, YOUTUBE_URL } from "@/components/dockter/data";
import {
  InstagramGlyph,
  YoutubeGlyph,
} from "@/components/dockter/SocialGlyphs";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cloud">
      <div className="border-t border-[#2c3d63]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 pb-8 pt-10">
          <div className="flex flex-col gap-4">
            <Image
              src={logoLight}
              alt="Dockter"
              width={190}
              height={64}
              className="h-16 w-auto"
            />
            <div className="flex flex-col gap-2.5">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ice">
                Acompanhe o Dockter
              </span>
              <div className="flex gap-2.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dockter no Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-brand text-cloud transition-colors hover:bg-brand"
                >
                  <InstagramGlyph />
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dockter no YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-brand text-cloud transition-colors hover:bg-brand"
                >
                  <YoutubeGlyph />
                </a>
              </div>
            </div>
          </div>
          <nav
            aria-label="Rodapé"
            className="flex flex-wrap gap-x-7 gap-y-2 text-[15px] font-medium"
          >
            <Link href="/#solucoes" className="text-ice hover:text-cloud">
              Soluções
            </Link>
            <Link
              href="/#funcionalidades"
              className="text-ice hover:text-cloud"
            >
              Funcionalidades
            </Link>
            <Link href="/planos" className="text-ice hover:text-cloud">
              Planos
            </Link>
            <Link href="/#duvidas" className="text-ice hover:text-cloud">
              Dúvidas
            </Link>
            <Link href="/#contato" className="text-ice hover:text-cloud">
              Fale conosco
            </Link>
          </nav>
          <a
            href="https://zarysconsultoria.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-ice transition-colors hover:text-cloud"
          >
            <span className="text-[13px]">Um produto</span>
            <Image
              src={zarysSimbolo}
              alt="Zarys Consultoria"
              width={31}
              height={31}
              className="h-[31px] w-[31px]"
            />
            <span className="text-[13px] font-semibold">
              Zarys Consultoria
            </span>
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-[#2c3d63] px-6 pb-10 pt-6 text-sm text-ice">
        <p className="max-w-[720px] leading-relaxed">
          © 2026 Zarys Consultoria Ltda · CNPJ 64.817.120/0001-69
          <br />
          R. Pais Leme, 215, conj. 1713, Pinheiros, São Paulo/SP, CEP 05424-150
        </p>
        <nav
          aria-label="Documentos legais"
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          <a href="#" className="text-ice hover:text-cloud">
            Política de Privacidade
          </a>
          <a href="#" className="text-ice hover:text-cloud">
            Termos de Uso
          </a>
        </nav>
      </div>
    </footer>
  );
}
