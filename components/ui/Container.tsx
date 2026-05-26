import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-10", className)}>
      {children}
    </Tag>
  );
}
