import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  label: string;
  ratio?: "1/1" | "4/5" | "3/4" | "16/9" | "21/9" | "2/3";
  note?: string;
  className?: string;
};

const ratioMap: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "2/3": "aspect-[2/3]",
};

export function ImagePlaceholder({
  label,
  ratio = "4/5",
  note,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "placeholder-box relative w-full",
        ratioMap[ratio],
        className,
      )}
      data-image-placeholder
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <div className="mono text-[10px] tracking-widest opacity-70">
          IMAGE PLACEHOLDER · {ratio}
        </div>
        <div className="mt-2 max-w-[90%] text-sm font-medium leading-snug">
          {label}
        </div>
        {note ? (
          <div className="mt-2 max-w-[90%] text-xs leading-snug opacity-80">
            {note}
          </div>
        ) : null}
      </div>
    </div>
  );
}
