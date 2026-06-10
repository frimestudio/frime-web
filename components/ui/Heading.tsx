import { cn } from "@/lib/cn";

type HeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "xl" | "lg" | "md" | "sm";
  className?: string;
  display?: boolean;
};

const sizeMap = {
  xl: "text-[clamp(4rem,12vw,12rem)]",
  lg: "text-[clamp(2.5rem,7vw,6rem)]",
  md: "text-[clamp(1.75rem,4vw,3rem)]",
  sm: "text-[clamp(1.25rem,2vw,1.75rem)]",
};

// Duże rozmiary (xl, lg) potrzebują luźniejszego line-height,
// inaczej wiersze nachodzą na siebie. Klasa .display-hero z globals.css
// nadaje większy leading i działa też dla cyrylicy (Oswald).
const looseSizes = new Set(["xl", "lg"]);

export function Heading({
  children,
  as = "h2",
  size = "lg",
  className,
  display = true,
}: HeadingProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        display ? "display" : "font-semibold tracking-tight",
        display && looseSizes.has(size) ? "display-hero" : null,
        sizeMap[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mono text-xs md:text-sm text-muted", className)}>
      {children}
    </p>
  );
}
