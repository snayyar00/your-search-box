"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import DotPattern from "@/components/magicui/dot-pattern";
import { Spotlight } from "@/components/ui/spotlight";
import SparklesText from "@/components/magicui/sparkles-text";

const changeingText = ["heello", "hi", "nay", "hsi", "als"];
const placeholders = [
  "How can I help you?",
  "Type your question here...",
  "Need assistance?",
];

const Hero = () => {
  const searchWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://ysb-widget.b-cdn.net/searchbox-widget.umd.js?botId=670e398267ad7a6f897e017c&variant=search";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSearch = (query: string) => {
    const searchElement = document.getElementById('search-ss');
    if (searchElement) {
      const searchEvent = new CustomEvent('search', { detail: { query } });
      searchElement.dispatchEvent(searchEvent);
    }
  };

  return (
    <>
      <section className="py-16 text-white text-center md:py-24 relative overflow-x-clip">
        <div className="absolute h-[70rem] w-[73rem] -translate-x-1/2 left-1/2 -top-[1rem] -z-10 opacity-90"></div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 hidden sm:block"
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
              {/* <TextGenerateEffect
                words=" Unlock the power of AI with our"
                className="text-white"
              /> */}
              <div className="opacity-0 animate-[fadeIn_1s_ease-in_2.2s_forwards]">
                <h1
                  className="section-header bg-gradient-to-b from-white/90 to-[#586285] text-transparent bg-clip-text
  [-webkit-background-clip:text]  lg:w-[50rem] mt-10 lg:leading-tight  "
                >
                  Unlock the power of AI with our <br />
                  <span className="font-semibold tracking-normal text-blue-400 inline-flex sm:hidden ">
                    On-Site Search
                  </span>
                </h1>
                <SparklesText
                  text="On-Site Search"
                  className="font-semibold tracking-normal text-blue-400 sm:inline-flex hidden  "
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
         
            <div 
              id="search-ss" 
              className="w-full max-w-md mx-auto mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              </div>
         </div>
      </section>
    </>
  );
};

export default Hero;
