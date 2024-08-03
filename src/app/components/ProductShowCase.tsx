"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ProductImage from "@/assets/dashboard-layout.png";
import PyramidIcon from "@/assets/pyramid.png";
import TubeIcon from "@/assets/tube.png";

import { motion, useScroll, useTransform } from "framer-motion";
import ShineBorder from "@/components/magicui/shine-border";
import BlurFade from "@/components/magicui/blur-fade";

const theme = "white";

const ProductShowCase = () => {
  const sectionRef = useRef(null);
  const productRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: productYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(productYProgress, [0, 0.6], [20, 1]);
  const opacity = useTransform(productYProgress, [0, 0.6], [0.1, 1]);

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="py-28 overflow-x-clip bg-gradient-to-b from-[#F2F2F2] to-[#14093E] "
    >
      <div className="container">
        <div className="sm:w-[33.75rem] mx-auto lg:w-[45rem]  lg:leading-tight">
          <div className="flex justify-center pb-5">
            <div className="tag">Boost your productivity</div>
          </div>
          <BlurFade delay={0} inView duration={0.5}>
            <h2 className="section-header">
              A more effective way to track user data
            </h2>
          </BlurFade>
          <p className="text-xl leading-relaxed pt-5 text-center lg:w-[35rem] mx-auto">
            Effortlessly get your users questions & queries data into a fully
            functional, easily accessible, metrics information into the website
            dashboard in just minutes
          </p>
        </div>

        <motion.div
          className="relative mt-10 "
          style={{
            opacity,
            rotateX,
            transformPerspective: "900px",
          }}
          ref={productRef}
        >
          <ShineBorder
            className="relative flex w-full  items-center justify-center overflow-hidden  border md:shadow-xl"
            color={"#14093E"}
            borderWidth={5}
            borderRadius={20}
          >
            <Image
              src={ProductImage}
              alt="product iamge"
              className="rounded-3xl shadow-sm"
            />
          </ShineBorder>
          <motion.img
            src={PyramidIcon.src}
            alt="tubeIcon"
            className="hidden md:block absolute  h-[16.25rem] w-auto max-w-none -right-32  lg:right-[-67.2px] top-[-128px] lg:top-[112px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={TubeIcon.src}
            alt="tubeIcon"
            className="hidden md:block absolute h-[16.25rem] w-auto max-w-none lg:bottom-[80px] bottom-[112px] -left-36"
            style={{
              translateY,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowCase;
