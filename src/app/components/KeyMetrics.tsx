import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

import TrolleyImage from "@/assets/features-images/trolley.gif";
import ClockTimeImage from "@/assets/features-images/clock-time.gif";
import BarChartImage from "@/assets/features-images/bar-chart.gif";
import AvatarManImage from "@/assets/features-images/avatar-man.gif";

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import { Spotlight } from "@/components/ui/spotlight";
import { div } from "three/webgpu";
import { cn } from "@/lib/utils";
import AnimatedHeader from "../../components/custom-animations/AnimatedHeader";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";

import {
  ChartColumnIncreasingIcon,
  ChartLineIcon,
  LucideSmile,
  TimerIcon,
} from "lucide-react";

const KeyMetrics = () => {
  return (
    <section
      className="py-16 md:py-24 text-white bg-gradient-to-b from-[#14093E] overflow-clip "
      id="features"
    >
      <Spotlight
        className="top-[-304px] left-[32px] opacity-25 md:top-[-192px] md:left-[288px] lg:opacity-10"
        fill="violet"
      />
      <div className="relative">
        <div className="w-full absolute left-0 -top-[25rem] min-h-96 ">
          <BackgroundGridImage className="w-full h-full opacity-60" />
        </div>
        <div className="sm:w-[33.75rem] mx-auto lg:w-[37.5rem] py-10 ">
          <div className="flex justify-center pb-5">
            <div className="tag border border-white/50">Key Metrics</div>
          </div>
          <AnimatedHeader className={""}>
            <h2 className="section-header bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] lg:leading-tight ">
              A effective solution for better search
            </h2>
          </AnimatedHeader>
          <AnimatedHeader className={""}>
            <p className="text-xl leading-relaxed pt-5 text-center max-w-[34.375rem]">
              Traditional search engines often fall short, leading to
              frustration and lost opportunities. That&apos;s where AI-powered
              on-site search comes in.
            </p>
          </AnimatedHeader>
        </div>
        <div className=" min-w-full  pt-12">
          <StickyScroll content={content} contentClassName="" />
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;

const content = [
  {
    title: "Boosted Click-Through Rates",
    description:
      "Our AI search dramatically increases click-through rates by delivering more relevant results. Users find exactly what they're looking for, leading to more engagement and conversions.",
    content: (
      <Image
        src={BarChartImage}
        alt="Icons by Lordicon.com"
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "Extended Time on Site",
    description:
      "With more accurate search results, users spend longer exploring your site. Our AI encourages discovery, keeping visitors engaged and increasing the likelihood of conversion.",
    content: (
      <Image
        src={ClockTimeImage}
        alt="Icons by Lordicon.com"
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "Improved Customer Satisfaction",
    description:
      "Users love finding what they need quickly and easily. Our AI search enhances the overall user experience, leading to higher customer satisfaction and loyalty.",
    content: (
      <Image
        src={AvatarManImage}
        alt="Icons by Lordicon.com"
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "Increased Sales",
    description:
      "By guiding users directly to relevant products or information, our AI search significantly boosts conversion rates and drives more sales for your business.",
    content: (
      <Image
        src={TrolleyImage}
        alt="Icons by Lordicon.com"
        height={150}
        width={150}
      />
    ),
  },
];
