"use client";
import React from "react";
// import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/moving-border";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "1 search box",
      "Up to 1,000 searches per month",
      "Basic AI search capabilities",
      "Standard support",
      "Basic analytics",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 39,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 10 search boxes",
      "Up to 50,000 searches per month",
      "Advanced AI search capabilities",
      "Custom synonym sets",
      "Priority support",
      "Detailed analytics",
      "A/B testing",
      "Basic API access",
    ],
  },
  {
    title: "Unlimited",
    monthlyPrice: 99,
    buttonText: "Contact sales",
    popular: false,
    inverse: false,
    features: [
      "Unlimited search boxes",
      "Unlimited searches",
      "Premium AI search capabilities",
      "Custom AI model training",
      "Dedicated account manager",
      "Advanced analytics and reporting",
      "Full API access",
      "Custom integrations",
      "White-labeling options",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        <ShootingStars />
        <StarsBackground className="opacity-70 z-1" />
        <div className="flex flex-col">
          <h1
            className="section-header pt-5  from-white to-[#586285] text-transparent bg-clip-text
  [-webkit-background-clip:text] py-5 lg:text-7xl lg:tracking-wide"
          >
            Pricing
          </h1>
          <p className="section-paragraph text-center sm:mx-auto text-white/90">
            Unlock the Power of Intelligent Search Affordable Plans, Incredible
            Results Choose Your Path to Better Conversions
          </p>
          <div className="flex flex-col gap-5 mt-10 sm:w-[351px] mx-auto lg:flex-row lg:w-full  lg:items-end lg:mx-auto lg:justify-center   ">
            {pricingTiers.map(
              ({
                title,
                monthlyPrice,
                popular,
                features,
                buttonText,
                inverse,
              }) => (
                <div
                  key={title}
                  className={twMerge(
                    "card bg-[#f2f2] text-[#f2f2f2] shadow-sm shadow-[#14093E]",
                    inverse === true &&
                      "bg-black text-white border border-black/90"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={twMerge(
                        "text-[#6F6C90] font-medium text-lg",
                        inverse && "text-white/70"
                      )}
                    >
                      {title}
                    </h3>
                    {popular && (
                      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Most Popular
                      </button>
                    )}
                  </div>
                  <p className="flex gap-1 items-baseline mt-[30px]  ">
                    <span className="font-bold text-5xl tracking-tighter leading-none">
                      ${monthlyPrice}
                    </span>
                    <span
                      className={twMerge(
                        "text-[#6F6C90] font-medium text-xl tracking-tighter",
                        inverse && "text-white/70"
                      )}
                    >
                      /monthly
                    </span>
                  </p>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full my-[30px]",
                      inverse && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 ">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="text-base flex items-center gap-4 "
                      >
                        <span>
                          <CheckIcon className="w-6 h-6" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
