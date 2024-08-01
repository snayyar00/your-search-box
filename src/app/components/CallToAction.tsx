import ShimmerButton from "@/components/magicui/shimmer-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

const CallToAction = () => {
  return (
    <div>
      <div className="h-[40rem] w-full rounded-md bg-gradient-to-b from-[#f2f2] to-[#14093E] relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text [-webkit-background-clip:text] text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Request the demo
          </h1>
          <p className="text-neutral-300  max-w-lg mx-auto my-5 text-base text-center relative z-10 leading-snug tracking-wider">
            Ready to unlock the Power of AI-Driven Search Today! Find Out How To
            Experience Seamless Navigation And Enhanced User Engagement
          </p>
          <ShimmerButton className="shadow-2xl mx-auto">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              TRY DEMO
            </span>
          </ShimmerButton>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default CallToAction;
