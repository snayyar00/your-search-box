"use client";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";
import CircularLogo from "@/assets/circular-logo.svg";
import DotPattern from "@/components/magicui/dot-pattern";
import { Spotlight } from "@/components/ui/spotlight";

const changeingText = ["heello", "hi", "nay", "hsi", "als"];
const placeholders = [
  "How can I help you?",
  "Type your question here...",
  "Need assistance?",
];

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};

const Hero = () => {
  return (
    <>
      <section className="py-16  text-white text-center md:py-24  bg-[linear-gradient(to_bottom,#200D42_0%,#210D52_4%,#15094F_25%,#14093E_100%)] relative overflow-clip">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="container  md:max-w-2xl lg:max-w-4xl">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="flex">
            <AnimatedGradientText className="text-black bg-white/90  h-12 text-lg">
              🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-100" />{" "}
              <span className={cn(``)}>Introductng Magic AI</span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </div>
          <div className="text-center mt-5 lg:mt-8">
            <h1 className="text-center  mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  bg-clip-text text-4xl tracking-tighter  sm:text-5xl text-transparent md:text-6xl lg:text-7xl [-webkit-background-clip:text]">
              Unlock the power of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-200 from-zinc-300 [-webkit-background-clip:text] leading-tight">
                AI with our
              </span>
              <span className="bg-gradient-to-b from-blue-200 to-blue-400 text-transparent bg-clip-text [-webkit-background-clip:text] font-semibold tracking-normal">
                {" "}
                On-Site Search
              </span>
            </h1>
          </div>
          {/* <div className="mt-5 font-semibold tracking-wide md:text-xl text-white/90 md:mt-8 lg:mt-12"> */}
          <div className="text-lg text-center text-soft-foreground-text mt-5 tracking-wide text-white/80">
            {/* TODO: grdual changing effect */}
            <p>
              Make your website&apos;s search bar smarter with AI, Improve
              conversion on your website, find answers from your blogs and find
              information from your website content all with a Simple Click
            </p>
          </div>
          <div className="mt-16">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
