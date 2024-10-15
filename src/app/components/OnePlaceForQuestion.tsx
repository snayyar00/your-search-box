"use client";

import Ripple from "@/components/magicui/ripple";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AnimatedBeamShow } from "../../components/custom-animations/AnimatedBeamOutput";
import AnimatedHeader from "../../components/custom-animations/AnimatedHeader";
import AnimatedCardContainer from "../../components/custom-animations/AnimatedCardContainer";
import { SearchIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnePlaceForQuestion = () => {
  const catchLines = [
    "Intelligent search and retrieval",
    "Context-aware responses",
    "Seamless content integration",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % catchLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-white bg-gradient-to-b from-[#14093E] to-[#f2f2] min-w-full py-16 md:py-24 text-center"
      role="main"
    >
      <div className="container relative">
        <div className="sm:w-[33.75rem] mx-auto lg:w-[45rem] lg:leading-tight">
          <div className="flex justify-center">
            <div className="tag">Elevate Your Search Experience</div>
          </div>
          <AnimatedHeader className={""}>
            <h2 className="section-header bg-gradient-to-b from-white/90 to-[#586285] text-transparent bg-clip-text [-webkit-background-clip:text] lg:w-[50rem] my-10 lg:leading-slug">
              One Solution for All Your Questions
            </h2>
          </AnimatedHeader>
          <AnimatedHeader className={""}>
            <p className="text-xl leading-relaxed mb-10 text-center lg:w-[35rem] mx-auto">
              Empower your <strong>users</strong>, <strong>support team</strong>, and{" "}
              <strong>sales staff</strong> with AI-powered search, leveraging your own knowledge base.
            </p>
          </AnimatedHeader>
        </div>

        <AnimatedCardContainer index={1}>
          <div className="relative flex flex-col items-center justify-center object-cover my-10 h-[40rem] min-w-full invert rounded-full">
            <div className="hidden lg:block absolute -translate-x-1/2 left-1/2 w-[60rem] z-0">
              <AnimatedBeamShow />
            </div>

            <div
              className="z-20 rounded-full h-[10.5rem] w-[11rem] text-center flex bg-[#C5DAA5]"
              role="alert"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="z-20 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black max-w-[12rem] flex items-center justify-center"
                >
                  {catchLines[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div>
              <Ripple
                mainCircleSize={250}
                numCircles={5}
                mainCircleOpacity={0.2}
              />
            </div>
          </div>
        </AnimatedCardContainer>
        <AnimatedCardContainer index={1}>
          <div className="flex items-center justify-center flex-col">
            <Button
              className="rounded-3xl px-5 flex items-center gap-2 py-5 group"
              variant={"demoButton"}
            >
              <span>
                <SearchIcon className="h-5 text-gray-300 group-hover:h-10 hover:text-white group-hover:duration-100" />
              </span>
              <span className="font-bold text-lg">Discover</span>
              <span className="uppercase text-white/80 font-semibold">
                AI-Powered Search
              </span>
            </Button>
            <p className="inline-flex text-gray-500 py-4 gap-2 items-center">
              <span>
                <TrendingUpIcon className="h-4" />
              </span>{" "}
              Enhance User Experience with AI
            </p>
          </div>
        </AnimatedCardContainer>
      </div>
    </div>
  );
};

export default OnePlaceForQuestion;
