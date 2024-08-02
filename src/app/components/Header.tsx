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
  // {
  //   id: 1,
  //   name: "Products",
  //   href: "#products",
  // },
  // {
  //   id: 2,
  //   name: "Platforms",
  //   href: "#platforms",
  // },
  // {
  //   id: 3,
  //   name: "Who we serve",
  //   href: "#whoweserve",
  // },
  {
    id: 1,
    name: "Partners",
    href: "#partners",
  },
  {
    id: 2,
    name: "Features",
    href: "#features",
  },
  {
    id: 3,
    name: "Pricing",
    href: "#pricing",
  },
  {
    id: 4,
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 5,
    name: "FYQ",
    href: "#fyq",
  },
  {
    id: 6,
    name: "Contact Us",
    href: "#contact",
  },

  // {
  //   id: 6,
  //   name: "Resources",
  //   href: "#resources",
  // },
  // {
  //   id: 7,
  //   name: "About",
  //   href: "#about",
  // },
];

const mediumScreenNavData = [
  {
    id: 1,
    name: "Pricing",
    href: "#products",
  },
  {
    id: 2,
    name: "FYQ",
    href: "#fyq",
  },
  {
    id: 3,
    name: "Features",
    href: "#features",
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
            <Link href="#" className="scroll-smooth">
              <Image
                src={RectangularLogo}
                alt="logo"
                className="h-[40px] w-auto md:h-[70] -ml-2 md:ml-0"
              />
            </Link>
            {/* <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden ">
              <MenuIcon className="text-white" />
            </div> */}
            {/* <nav className="md:flex items-center gap-10 lg:gap-6 hidden"> */}
            <nav className="md:flex  md:justify-between md:items-center md:gap-16">
              <div className="hidden lg:flex items-center gap-6 text-white/90">
                {navData.map(({ href, id, name }) => (
                  <div key={id}>
                    <Link href={href} className="hover:border-b ">
                      {name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center justify-between gap-3 md:gap-5 ">
                <Link
                  href={"/sign-up"}
                  className="hover:translate-x-1 hover:duration-300 "
                >
                  <Button
                    variant="demoButton"
                    className=" text-center uppercase w-[7rem] md:w-auto  text-[11px] text-wrap "
                  >
                    Request a demo
                  </Button>
                </Link>
                <Link
                  href="sign-in"
                  className="hover:translate-x-1 hover:duration-300"
                >
                  <Button
                    variant="link"
                    className="font-bold text-white border  "
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
