"use client";

// LIBS
import { useRef, type ReactNode } from "react";

// UTILS
import { cn } from "~/lib/utils";

// COMPONENTS
import useStickyScrollUp from "~/components/hooks/use-sticky-scroll-up";

// TYPES
type StickyScrollBarProps = {
  children: ReactNode;
};
const StickyScrollBar = ({ children }: StickyScrollBarProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      // Row Container
      ref={headerRef}
      className={cn(
        "border-primary-foreground bg-primary z-40 flex h-[75px] w-full items-center justify-between border-b-4 px-5 py-3",
        useStickyScrollUp({
          enableBelowWidth: 1024,
          elementHeight: headerRef.current?.clientHeight,
        }),
      )}
    >
      {children}
    </div>
  );
};
export default StickyScrollBar;
