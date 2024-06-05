"use client";

// LIBS
import Link from "next/link";
import { usePathname } from "next/navigation";

// COMPONENTS
import { Button } from "~/components/ui/button";

// TYPES
import { type NavItems } from "./nav-menu";

const NavItems = ({ items }: { items: NavItems }) => {
  const currentPath = usePathname();

  return (
    <>
      {items.map((item) => {
        return (
          <Link key={item.title} href={item.href} tabIndex={-1}>
            <Button variant="ghost" className="text-primary-foreground">
              {item.title}
            </Button>
          </Link>
        );
      })}
    </>
  );
};

export default NavItems;
