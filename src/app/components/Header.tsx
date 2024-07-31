import CircularIcon from "@/assets/circular-logo.svg";
import {
  AlignHorizontalDistributeEnd,
  ArrowRightToLine,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import CircularLogo from "@/assets/circular-logo.svg";
import RectangularLogo from "@/assets/rectangular-logo.png";
import { Button } from "@/components/ui/button";
import { link } from "fs";
import Image from "next/image";

const navData = [
  {
    id: 1,
    name: "Products",
    href: "#products",
  },
  {
    id: 2,
    name: "Platforms",
    href: "#platforms",
  },
  {
    id: 3,
    name: "Who we serve",
    href: "#whoweserve",
  },
  {
    id: 4,
    name: "Pricing",
    href: "#pricing",
  },
  {
    id: 5,
    name: "Partners",
    href: "#partners",
  },
  {
    id: 6,
    name: "Resources",
    href: "#resources",
  },
  {
    id: 7,
    name: "About",
    href: "#about",
  },
  {
    id: 8,
    name: "Contact Us",
    href: "#contact",
  },
];

const mediumScreenNavData = [
  {
    id: 1,
    name: "Products",
    href: "#products",
  },
  {
    id: 4,
    name: "Pricing",
    href: "#pricing",
  },
  {
    id: 7,
    name: "About",
    href: "#about",
  },
  {
    id: 8,
    name: "Contact Us",
    href: "#contact",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src={RectangularLogo}
              alt="logo"
              className="h-[70px] w-auto"
            />
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden ">
              <MenuIcon className="text-white" />
            </div>
            <nav className="md:flex items-center gap-10 lg:gap-6 hidden">
              <div className="hidden lg:flex items-center gap-6 text-white/90">
                {navData.map(({ href, id, name }) => (
                  <div key={id}>
                    <Link href={href}>{name}</Link>
                  </div>
                ))}
              </div>
              <Button variant="demoButton" className="hidden md:block">
                Request A Demo
              </Button>
              <Button
                variant="link"
                className="font-bold text-white border hidden md:block"
              >
                Login
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
