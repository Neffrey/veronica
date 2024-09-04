// LIBRARIES
import Link from "next/link";

// COMPONENTS
import { Button } from "~/components/ui/button";

const Footer = () => {
  return (
    <div
      // Row Container
      className="flex w-full flex-wrap items-center justify-center border-t-2 border-solid border-muted bg-accent px-5 py-6 shadow-xl"
    >
      <h3 className="w-full text-center font-semibold lowercase tracking-widest text-accent-foreground/90">
        Copyright @ {new Date().getFullYear()}
      </h3>
      <h3 className="text-center text-xs font-semibold lowercase tracking-widest text-accent-foreground/50">
        Made by
      </h3>
      <Link
        href="https://neffrey.com"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <Button
          variant="link"
          className="p-2 text-xs tracking-widest text-accent-foreground/50"
        >
          neffrey
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
