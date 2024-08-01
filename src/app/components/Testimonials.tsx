"use client";
import React from "react";

import avatar1 from "@/assets/testimonials/avatar-1.png";
import avatar2 from "@/assets/testimonials/avatar-2.png";
import avatar3 from "@/assets/testimonials/avatar-3.png";
import avatar4 from "@/assets/testimonials/avatar-4.png";
import avatar5 from "@/assets/testimonials/avatar-5.png";
import avatar6 from "@/assets/testimonials/avatar-6.png";
import avatar7 from "@/assets/testimonials/avatar-7.png";
import avatar8 from "@/assets/testimonials/avatar-8.png";
import avatar9 from "@/assets/testimonials/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "As an e-commerce manager always looking for ways to improve our site, this AI-powered search solution instantly boosted our conversion rates.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamiecommerceguru",
  },
  {
    text: "Our online store's sales have skyrocketed since we implemented this smart search bar. Customers find products faster and easier.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith_ecomm",
  },
  {
    text: "This AI search has completely transformed how visitors interact with our blog content. Engagement is through the roof!",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewriter",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this AI search into our website. The setup was seamless.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj_tech",
  },
  {
    text: "Finding information on our site has never been easier. This AI-powered search helps customers quickly find what they need, improving satisfaction.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm_ux",
  },
  {
    text: "The customizability of this AI search solution is top-notch. It adapts perfectly to our unique product catalog.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith_dev",
  },
  {
    text: "Adopting this AI search for our medium-sized business website has streamlined user experience and improved our conversion funnel.",
    imageSrc: avatar7.src,
    name: "Jordan Patel",
    username: "@jpatel_bizowner",
  },
  {
    text: "With this AI-powered search, our customers can easily find products, blog posts, and support documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawson_ecommtips",
  },
  {
    text: "Its user-friendly interface and powerful AI features support our diverse content needs, from product listings to help articles.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey_contentmgr",
  },
];

const column1 = testimonials.slice(0, 3);
const column2 = testimonials.slice(3, 6);
const column3 = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonial: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      className={"flex flex-col gap-6 pb-6 "}
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        ease: "linear",
        repeatType: "loop",
        repeat: Infinity,
      }}
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonial.map(({ name, imageSrc, text, username }) => (
            <div className="card bg-[#9891b0]  shadow-sm " key={username}>
              <p className="leading-[25px] font-medium text-base text-black/90 mt-5">
                {text}
              </p>
              <div className="flex gap-5 items-center mt-5 ">
                <Image
                  src={imageSrc}
                  alt="testimonial profile image"
                  height={40}
                  width={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium tracking-tight leading-5">
                    {name}
                  </h2>
                  <p className="leading-5 tracking-tight">{username}</p>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <section className=" py-16 lg:py-24 text-white/90">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag text-lg border border-gray-200  rounded-lg">
            Testimonials
          </div>
        </div>
        <h2
          className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text
  [-webkit-background-clip:text]   mt-10  mx-auto"
        >
          What our users say
        </h2>
        <p className="text-xl leading-relaxed pt-5 text-center text-white/90 mt-5 md:max-w-2xl lg:max-w-3xl mx-auto py-10">
          we&apos;ve helped{" "}
          <span className="text-yellow-400 font-bold tracking-wide">
            {" "}
            our clients boost sales & improve customer satisfaction.
          </span>{" "}
          Don&apos;t just take our word for it, explore the testimonials below
          to see how our AI search solution is revolutionizing websites and
          driving business growth.
        </p>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[786px] overflow-hidden mt-16 ">
          <TestimonialsColumn
            testimonial={column1}
            duration={15}
            className=""
          />
          <TestimonialsColumn
            testimonial={column2}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonial={column3}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
