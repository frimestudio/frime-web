import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
};

export function Marquee({ items, className, speed = 40 }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-line py-3",
        className,
      )}
      aria-hidden
    >
      <div
        className="flex w-max animate-marquee gap-12 whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="display text-2xl md:text-3xl">
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
