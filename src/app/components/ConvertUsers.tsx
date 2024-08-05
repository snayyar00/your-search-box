import Ripple from "@/components/magicui/ripple";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AnimatedBeamShow } from "../../components/custom-animations/AnimatedBeamOutput";
import AnimatedHeader from "../../components/custom-animations/AnimatedHeader";
import AnimatedCardContainer from "../../components/custom-animations/AnimatedCardContainer";
import AnimateTriangle from "@/assets/animate-triangle.svg";

import {
  StarIcon,
  TargetIcon,
  TimerIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react";
import ShimmerButton from "@/components/magicui/shimmer-button";

const ConvertUsersData = [
  {
    id: 1,
    title: "Provide scenario-specific help",
    icon: StarIcon,
  },
  {
    id: 2,
    title: "Reduce implementation times",
    icon: TimerIcon,
  },
  {
    id: 3,
    title: "Identify dropoff points and fix them",
    icon: UserIcon,
  },
];

const ConvertUsers = () => {
  return (
    <div className="bg-gradient-to-b from-[#f2f2f2] to-[#efefe3] min-w-full py-16 md:py-24">
      <div className="container realtive">
        <div className="sm:w-[33.75rem] mx-auto lg:w-[45rem]  lg:leading-tight ">
          <div className="flex justify-center pb-5 ">
            <div className="tag">convert users</div>
          </div>
          <AnimatedHeader className={""}>
            <h2 className="section-header">Convert more users</h2>
          </AnimatedHeader>
        </div>
        <AnimatedCardContainer index={1}>
          <div className="flex items-center flex-col-reverse md:flex-row  md:space-x-8 lg:space-x-24 mt-12">
            <div className="flex-1 min-w-full md:min-w-[360px] mt-16 md:mt-0">
              <AnimateTriangle />
            </div>
            <div className="flex-1">
              <div className="flex items-start flex-col space-y-16 lg:space-y-20 justify-center  font-medium max-w-full lg:max-w-md h-full text-lg lg:text-xl">
                {ConvertUsersData.map(({ id, icon: IconImg, title }) => (
                  <div className="flex items-center" key={id}>
                    <div className="flex flex-row flex-auto md:justify-center items-center">
                      <IconImg className="text-blue-400 h-[30px] w-[30px] mr-5" />
                      <p className="text-left">{title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedCardContainer>
      </div>
    </div>
  );
};

export default ConvertUsers;
