import { cn } from "@/lib/cn";
import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost" | "ink";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-frime)]";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-frime)] text-[var(--color-frime-ink)] hover:bg-[var(--color-fg)]",
  ink: "bg-[var(--color-fg)] text-[var(--color-bg)] hover:bg-[var(--color-frime)]",
  ghost:
    "border border-[var(--color-line)] bg-transparent hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = CommonProps &
  Omit<ComponentProps<"a">, "href" | "className" | "children"> & {
    href: string;
    external?: boolean;
  };

type InternalLinkProps = CommonProps &
  Omit<ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    href: ComponentProps<typeof Link>["href"];
  };

type ButtonElProps = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonElProps) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  external = false,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: AnchorProps) {
  const target = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...target}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </a>
  );
}

export function ButtonInternalLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}
