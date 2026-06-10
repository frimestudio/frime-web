import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: string[];
  className?: string;
  /** Czas pełnego przewinięcia w sekundach. Mniej = szybciej. */
  speed?: number;
  /** Separator między elementami i przy łączeniu kopii. */
  separator?: string;
};

export function Marquee({
  items,
  className,
  speed = 40,
  separator = " · ",
}: MarqueeProps) {
  // Łączymy w jeden ciąg z separatorem — wygląda monolitycznie.
  // Separator dorzucamy też na końcu, żeby przy przejściu z kopii
  // do kopii nie powstała wizualna dziura.
  const joined = items.join(separator) + separator;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-line py-3",
        className,
      )}
      aria-hidden
    >
      <div
        className="flex w-max animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {/*
          Dwie identyczne kopie. translateX(-50%) przewija pierwszą
          dokładnie na pozycję drugiej, dzięki czemu pętla jest
          niewidoczna i wstęga wygląda na nieskończoną.
        */}
        <span className="display shrink-0 text-2xl md:text-3xl">{joined}</span>
        <span className="display shrink-0 text-2xl md:text-3xl">{joined}</span>
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
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
