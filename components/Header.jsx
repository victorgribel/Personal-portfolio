import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import { MobileNav } from "./ui/MobileNav";

const Header = () => {
  return (
    <header className="py-4 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Victor <span className="text-accent">Gribel</span>
          </h1>
        </Link>

        {/* Desktop nav and Hire button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Me contrate</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
