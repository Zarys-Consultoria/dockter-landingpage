import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Variant =
  "primary" | "light" | "outline" | "outlineLight" | "ice" | "solid" | "dark";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-cloud hover:bg-ink",
  light: "bg-cloud text-ink hover:bg-white",
  dark: "bg-ink text-cloud hover:bg-brand-deep",
  solid:
    "border border-brand bg-brand text-cloud hover:bg-ink hover:border-ink",
  outline: "border border-ink bg-white text-ink hover:bg-ink hover:text-cloud",
  outlineLight: "border border-ice bg-transparent text-cloud hover:bg-cloud/10",
  ice: "bg-ice text-ink hover:bg-brand hover:text-cloud",
};

export function CTA({
  children,
  href,
  variant = "primary",
  icon: Icon,
  external = false,
  onClick,
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  icon?: LucideIcon;
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {Icon ? <Icon size={18} strokeWidth={2.5} /> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }
  if (href.startsWith("/#") || href.startsWith("#")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}

export function LearnMore({
  href,
  tone = "brand",
  external = false,
}: {
  href: string;
  tone?: "brand" | "ice";
  external?: boolean;
}) {
  const color = tone === "ice" ? "text-ice" : "text-brand";
  const classes = `group mt-auto inline-flex items-center gap-1.5 self-start text-[15px] font-semibold ${color}`;
  const content = (
    <>
      Saiba mais
      <ArrowRight
        size={16}
        strokeWidth={2.5}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }
  if (href.startsWith("/#") || href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "brand",
  className = "",
}: {
  children: ReactNode;
  tone?: "brand" | "onDark" | "onBlue";
  className?: string;
}) {
  const dot = tone === "onBlue" ? "bg-cloud" : "bg-brand";
  const text =
    tone === "onDark"
      ? "text-ice"
      : tone === "onBlue"
        ? "text-cloud"
        : "text-brand";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="flex gap-[5px]">
        <span className={`h-[9px] w-[9px] rounded-full ${dot}`} />
        <span className={`h-[9px] w-[9px] rounded-full ${dot}`} />
        <span className={`h-[9px] w-[9px] rounded-full ${dot}`} />
      </span>
      <span className={`text-[15px] font-semibold ${text}`}>{children}</span>
    </div>
  );
}

export function Arc({
  className = "",
  size = 560,
  border = 64,
  color = "var(--color-brand)",
  corners = "br",
}: {
  className?: string;
  size?: number;
  border?: number;
  color?: string;
  corners?: "br" | "tr" | "bl" | "tl";
}) {
  const transparent: Record<string, React.CSSProperties> = {
    br: { borderTopColor: "transparent", borderLeftColor: "transparent" },
    tr: { borderBottomColor: "transparent", borderLeftColor: "transparent" },
    bl: { borderTopColor: "transparent", borderRightColor: "transparent" },
    tl: { borderBottomColor: "transparent", borderRightColor: "transparent" },
  };
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: border,
        borderStyle: "solid",
        borderColor: color,
        ...transparent[corners],
      }}
    />
  );
}
