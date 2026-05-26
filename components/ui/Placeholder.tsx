import { cn } from "@/lib/cn";

type PlaceholderProps = {
  label: string;
  note?: string;
  className?: string;
};

export function Placeholder({ label, note, className }: PlaceholderProps) {
  return (
    <div
      className={cn(
        "placeholder-box rounded-sm p-4 text-sm leading-snug",
        className,
      )}
      data-placeholder
    >
      <div className="mono text-[10px] tracking-widest opacity-70">
        PLACEHOLDER
      </div>
      <div className="mt-1 font-medium">{label}</div>
      {note ? <div className="mt-1 opacity-80">{note}</div> : null}
    </div>
  );
}
