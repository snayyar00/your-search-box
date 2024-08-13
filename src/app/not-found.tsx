import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#030303] to-[#f2f2] relative flex flex-col items-center justify-center overflow-hidden">
      <BackgroundBeams />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 tracking-wider pb-10">
          404 - Page Not Found
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto mb-8 text-lg">
          Oops! It seems like you&apos;ve ventured into uncharted territory. The
          page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button
            variant="demoButton"
            className="px-8 py-4 text-lg font-semibold hover:translate-y-1 transition-transform duration-200"
          >
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
