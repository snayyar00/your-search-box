import CircularIcon from "@/assets/circular-logo.svg";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import CircularLogo from "@/assets/circular-logo.svg";
import RectangularLogo from "@/assets/rectangular-logo.png";
import { Button } from "@/components/ui/button";
import { link } from "fs";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const navData = [
  {
    id: 1,
    name: "Docs",
    href: "/docs/getting-started",
  },
  {
    id: 2,
    name: "Showcase",
    href: "/showcase",
  },
  {
    id: 3,
    name: "Product",
    href: "/product",
  },
  {
    id: 4,
    name: "Team",
    href: "/team",
  },
  {
    id: 5,
    name: "Blogs",
    href: "#blogs",
  },
  {
    id: 6,
    name: "Contact Us",
    href: "/contact",
  },
];

const mediumScreenNavData = [
  {
    id: 1,
    name: "Pricing",
    href: "#pricing",
  },
  {
    id: 2,
    name: "FAQ",
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

const subTriggerData = [
  {
    id: 1,
    name: "Shopify",
    href: "/docs/shopify/chatButton",
  },
  {
    id: 2,
    name: "WordPress",
    href: "/docs/wordpress/chatButton",
  },
  {
    id: 3,
    name: "Wix",
    href: "/docs/wix/chatButton",
  },
  {
    id: 4,
    name: "Ecommerce",
    href: "/docs/ecommerce/chatButton",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="scroll-smooth">
              <Image
                src={RectangularLogo}
                alt="logo"
                className="h-[40px] w-auto md:h-[70] -ml-2 md:ml-0"
              />
            </Link>

            <nav className="md:flex  md:justify-between md:items-center md:gap-16">
              <div className="hidden lg:flex items-center gap-6 text-white/90">
                <Menubar
                  className="border-none bg-transparent flex gap-2 "
                  role="menubar"
                >
                  {navData.map(({ href, id, name }) =>
                    name === "Product" ? (
                      <MenubarMenu key={id}>
                        <MenubarTrigger className=" hover:bg-[#14093E] data-[state=open]:bg-[#14093E] focus:bg-[#14093E] space-x-1 flex items-baseline gap-1 data-[state=open]:text-white/90 focus:text-white/90 hover:text-blue-700 ">
                          <span className="text-base">Product</span>
                          <span className="h-4">
                            <ChevronDown />
                          </span>
                        </MenubarTrigger>
                        <MenubarContent className="text-white/90 bg-[#14093E] border-[#f2f2] flex flex-col gap-1 py-1 ">
                          <MenubarItem>
                            <Link href="#features">Features</Link>
                          </MenubarItem>
                          <MenubarSub>
                            <MenubarSubTrigger>
                              {" "}
                              <Link href="#platform">Platform</Link>
                            </MenubarSubTrigger>
                            <MenubarSubContent className="bg-[#14093E]  text-white/90 flex flex-col gap-1 py-1 ml-2  border-[#f2f2]">
                              {subTriggerData.map(({ id, name, href }) => (
                                <div key={id}>
                                  <MenubarItem>
                                    <Link href={href}>{name}</Link>
                                  </MenubarItem>
                                </div>
                              ))}
                              {/*  */}
                            </MenubarSubContent>
                          </MenubarSub>
                          <MenubarItem>
                            <Link href="#pricing">Pricing</Link>
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    ) : (
                      <Link
                        key={id}
                        href={href}
                        className="hover:border-b"
                        role="menuitem"
                      >
                        {name}
                      </Link>
                    )
                  )}
                </Menubar>
              </div>

              <div className="inline-flex items-center justify-between gap-3 md:gap-5 ">
                <Link
                  href={"/sign-up"}
                  className="hover:translate-x-1 hover:duration-300 "
                >
                  <Button
                    variant="demoButton"
                    className="hidden sm:block text-center uppercase w-[7rem] md:w-auto  text-[11px] text-wrap "
                  >
                    Request a demo
                  </Button>
                </Link>
                <Link
                  href="sign-in"
                  className="hover:translate-x-1 hover:duration-300"
                >
                  <Button
                    variant="demoButton"
                    className="text-center uppercase w-[7rem] md:w-auto  text-[11px] text-wrap   "
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
