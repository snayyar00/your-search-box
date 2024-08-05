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

const ConvertUsers = () => {
  return (
    <div className="bg-gradient-to-b from-[#f2f2f2] to-[#efefe3] min-w-full py-16 md:py-24">
      <div className="container realtive">
        <div className="sm:w-[33.75rem] mx-auto lg:w-[45rem]  lg:leading-tight ">
          <div className="flex justify-center pb-5">
            <div className="tag">convert users</div>
          </div>
          <AnimatedHeader className={""}>
            <h2 className="section-header">Convert more users</h2>
          </AnimatedHeader>
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row  md:space-x-8 lg:space-x-24 mt-12">
          <div className="flex-1 min-w-full md:min-w-[360px] mt-16 md:mt-0">
            <AnimateTriangle />
          </div>
          <div className="flex-1">
            <div className="flex items-start flex-col space-y-16 lg:space-y-20 justify-center  font-medium max-w-full lg:max-w-md h-full text-lg lg:text-xl">
              <div className="flex items-center">
                <div className="flex flex-row flex-auto md:justify-center items-center">
                  <TargetIcon className="h-[30px] w-[30px] mr-5 text-blue-400" />
                  <p className="text-left">Provide scenario-specific help</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-row flex-auto md:justify-center items-center">
                  <TimerIcon className="h-[30px] mr-5 text-blue-400" />
                  <p className="text-left">Reduce implementation times</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-row flex-auto md:justify-center items-center">
                  <UserIcon className="h-[30px] w-[30px] mt-1 mr-5 text-blue-400" />
                  <p className="text-left">
                    Identify dropoff points and fix them
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertUsers;
