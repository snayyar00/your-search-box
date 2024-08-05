// "use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Button } from "@/components/ui/button";

import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";
import AnimatedHeader from "../../components/custom-animations/AnimatedHeader";
import AnimatedCardContainer from "../../components/custom-animations/AnimatedCardContainer";
import {Card} from '@/components/custom-animations/Card'

export function WhyChooseUs() {
  return (
    <>
      <section className="py-12 md:py-24 text-white relative overflow-clip ">
        <div className="container">
          {/* background grid */}
          <div className="w-full absolute left-0 -top-[25rem] min-h-96 ">
            <BackgroundGridImage className="w-full h-full opacity-60" />
          </div>
          <div>
            <div className="w-full absolute left-[50rem] top-[15rem] min-h-96  ">
              <BackgroundGridImage className="w-full h-full opacity-60" />
            </div>
            <div className="sm:w-[33.75rem] mx-auto  flex flex-col items-center   ">
              <div className="flex justify-center pb-5">
                <div className="tag text-lg border border-white rounded-lg">
                  Why choose us
                </div>
              </div>
              <AnimatedHeader className="">
                <h2
                  className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text
  [-webkit-background-clip:text]  lg:w-[55rem] mt-10 lg:leading-tight "
                >
                  Why Choose Our <span className="hidden lg:block"></span>
                  <span className="block md:hidden"></span>
                  AI-Powered On-Site Search?
                </h2>
              </AnimatedHeader>
              <AnimatedHeader className="">
                <p className="text-xl leading-relaxed pt-5 text-center text-white/90 mt-5">
                  Our AI effortlessly navigates through your website
                  information, providing visitors with instant, accurate
                  results.
                </p>
              </AnimatedHeader>
            </div>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-5">
              {/* add des prop */}

              <AnimatedCardContainer index={0}>
                <Card
                  title="Expertise in AI Technology"
                  icon={<AceternityIcon order="Reason 1" />}
                  des="With years of experience in artificial intelligence and machine learning, we're pioneers in delivering innovative search solutions tailored to your business needs"
                >
                  <CanvasRevealEffect
                    animationSpeed={5.1}
                    // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
                    containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
                  />
                </Card>
              </AnimatedCardContainer>
              <AnimatedCardContainer index={1}>
                <Card
                  title="Customizable Solutions"
                  icon={<AceternityIcon order="Reason 2" />}
                  des="We understand that every business is unique. That's why we offer customizable solutions to suit your specific requirements and objectives."
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    // change bg-black to bg-pink-900
                    containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
                    colors={[
                      // change the colors of the
                      [255, 166, 158],
                      [221, 255, 247],
                    ]}
                    dotSize={2}
                  />

                </Card>
              </AnimatedCardContainer>
              <AnimatedCardContainer index={2}>
                <Card
                  title="Proven Results"
                  icon={<AceternityIcon order="Reason 3" />}
                  des="Join the ranks of satisfied clients who have experienced increased conversion rates, higher customer satisfaction, and improved retention with our AI-powered on-site search."
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
                    colors={[[125, 211, 252]]}
                  />
                </Card>
              </AnimatedCardContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>

      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-violet-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>

  );
};




