import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import RealTImeImg from "@/assets/features-images/realtime.jpeg";
import PersonalisedImg from "@/assets/features-images/personlized-search.jpeg";
import NlpImg from "@/assets/features-images/nlp.jpeg";
import DashboardImage from "@/assets/dashboard-layout.png";
import GlobeImg from "@/assets/features-images/globe.jpeg";
// import Globe from "@/components/magicui/globe";

const Features = () => {
  return (
    <section className="py-16 md:py-24 text-white bg-gradient-to-b from-[#14093E]">
      <div className="container">
        <div className="sm:w-[540px] mx-auto ">
          <div className="flex justify-center pb-5">
            <div className="tag border border-white/50">Our Features</div>
          </div>
          <h2 className="section-header bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  ">
            A effective solution for better search
          </h2>
          <p className="text-xl leading-relaxed pt-5 text-center">
            Traditional search engines often fall short, leading to frustration
            and lost opportunities. That&apos;s where AI-powered on-site search
            comes in.
          </p>
        </div>
        <BentoGrid className="max-w-4xl lg:max-w-6xl mx-auto md:auto-rows-[420px] mt-20 md:mt-28 lg:mt-30 gap-8  ">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[96px] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-500 dark:bg-black"></div>
// );

const items = [
  {
    title: "Personalized Recommendations",
    description:
      "Harness the power of AI algorithms to deliver personalized product recommendations based on user behavior, preferences, and past interactions.",
    header: (
      <Image
        src={PersonalisedImg}
        alt="image"
        className="flex flex-1  w-auto h-full min-h-[100px] rounded-xl md:object-cover opacity-90
 "
      />
    ),
    className: "md:col-span-2",
  },

  {
    title: "Natural Language Processing (NLP)",
    description:
      "Enable your customers to search using natural language queries, allowing them to express their needs in their own words and receive accurate results..",
    header: (
      <Image
        src={NlpImg}
        alt="image"
        className="flex flex-1 w-full h-full min-h-[100px] rounded-xl md:object-cover opacity-80"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <Image
        src={GlobeImg}
        alt="image"
        className="flex flex-1 w-full h-full min-h-[50px] rounded-xl md:object-cover opacity-80"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Real-Time Insights",
    description:
      "Gain valuable insights into customer behavior, popular search queries, and emerging trends to optimize your product offerings and marketing strategies.",
    header: (
      <Image
        src={RealTImeImg}
        alt="image"
        className="flex flex-1 w-full h-full min-h-[100px] rounded-xl md:object-cover opacity-90"
      />
    ),
    className: "md:col-span-2",
  },
];

export default Features;
