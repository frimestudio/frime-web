import Image from "next/image";
import { cn } from "@/lib/cn";

type LocalPhotoProps = {
  src: string;
  alt: string;
  ratio?: "1/1" | "4/5" | "3/4" | "16/9" | "21/9" | "2/3";
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

const ratioMap: Record<NonNullable<LocalPhotoProps["ratio"]>, string> = {
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-video",
  "21/9": "aspect-[21/9]",
  "2/3": "aspect-[2/3]",
};

export function LocalPhoto({
  src,
  alt,
  ratio = "4/5",
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  objectPosition,
}: LocalPhotoProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-line",
        ratioMap[ratio],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={objectPosition ? { objectPosition } : undefined}
        className="object-cover"
      />
    </div>
  );
}
