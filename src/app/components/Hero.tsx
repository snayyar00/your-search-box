"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import DotPattern from "@/components/magicui/dot-pattern";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import SparklesText from "@/components/magicui/sparkles-text";

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
      <section className="py-16  text-white text-center md:py-24  relative overflow-x-clip">
        <div className="absolute h-[70rem] w-[73rem] -translate-x-1/2 left-1/2 -top-[1rem] -z-10 opacity-90"></div>
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

          <div className="text-center mt-5 lg:mt-8">
            <div className="text-center  mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  bg-clip-text text-4xl tracking-tighter  sm:text-5xl text-transparent md:text-6xl lg:text-7xl [-webkit-background-clip:text]">
              <TextGenerateEffect
                words=" Unlock the power of AI with our"
                className="text-white"
              />
              <div className="opacity-0 animate-[fadeIn_1s_ease-in_5.2s_forwards]">
                <SparklesText
                  text="On-Site Search"
                  className="font-semibold tracking-normal text-blue-400 inline-flex "
                />
              </div>
            </div>
          </div>

          <div className="text-lg text-center text-soft-foreground-text mt-5 tracking-wide text-white/80">
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
              aria-label="Search input"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
