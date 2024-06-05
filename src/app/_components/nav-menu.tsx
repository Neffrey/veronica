// LIBS
import Link from "next/link";

// COMPONENTS
import { Button } from "~/components/ui/button";
import Items from "./nav-items";

export type NavItems = {
  title: string;
  href: string;
}[];

// Nav items
const navItems: NavItems = [
  { title: "Services", href: "/#services" },
  { title: "Gallery", href: "/#gallery" },
  { title: "About Me", href: "/#about" },
  { title: "Get in Touch", href: "/#contact" },
];

const NavMenu = async () => {
  return (
    <div
      // Nav Menu
      className="flex items-center justify-start gap-6"
    >
      <Items items={navItems} />
    </div>
  );
};

export default NavMenu;
