// LIBRARIES
import Link from "next/link";

// COMPONENTS
import NavMenu from "~/app/_components/nav-menu";
import StickyScrollBar from "~/components/sticky-scroll-bar";
import NeffreyLogo from "~/components/svgs/NeffreyLogo";

// COMP
const Header = () => {
  return (
    <>
      <StickyScrollBar>
        <Link
          // Logo & Name Container
          className="flex h-full items-center justify-start gap-6"
          href="/"
        >
          <div
            // Logo Container
            className="h-12 w-12 cursor-pointer fill-primary-foreground"
          >
            <NeffreyLogo />
          </div>
          {/* <div className="flex h-full flex-col justify-end">
          <h2 className="text-center text-lg tracking-wider text-foreground">
            Tip calculator for the homies
          </h2>
        </div> */}
        </Link>
        <NavMenu />
      </StickyScrollBar>
    </>
  );
};

export default Header;
