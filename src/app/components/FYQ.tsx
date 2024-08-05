// "use client";
import clsx from "clsx";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { AccordionItem } from "@/components/custom-animations/AccordionItem";


const fqyData = [
  {
    id: 1,
    question:
      "How easy is it to integrate your AI search solution into my website?",
    answer:
      "Our AI-powered search solution is designed for seamless integration. We provide easy-to-follow documentation and support to help you implement the search bar on your website quickly. Most of our clients are up and running within a day, regardless of their technical expertise.",
  },
  {
    id: 2,
    question: "How does the pricing work for different website sizes?",
    answer:
      "Our pricing is scalable based on your website's traffic and search volume. We offer plans suitable for small businesses to large e-commerce sites. Each plan includes a set number of searches per month, with the option to upgrade as your needs grow. Contact us for a customized quote tailored to your specific requirements.",
  },
  {
    id: 3,
    question: "Can the AI search be customized to match my website's design?",
    answer:
      "Absolutely! Our AI search solution is highly customizable. You can adjust the search bar's appearance to match your website's design and branding. We also offer advanced customization options for search results display, allowing you to create a seamless user experience.",
  },
  {
    id: 4,
    question: "How does your AI-powered search improve conversion rates?",
    answer:
      "Our AI search enhances conversion rates by providing more accurate and relevant search results. It understands user intent, handles natural language queries, and learns from user behavior. This means visitors can find products or information more quickly, reducing frustration and increasing the likelihood of conversion.",
  },
  {
    id: 5,
    question: "Is my website data secure when using your AI search?",
    answer:
      "We take data security very seriously. Our AI search solution processes your website data securely, and we do not store any sensitive information. We comply with industry-standard security protocols and data protection regulations to ensure the safety and privacy of your website and user data.",
  },
];




const FYQ = () => {
  return (
    <div className=" text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#14093E] to-[#f2f2]" id='fyq'>
      <div className="container ">
        <h2
          className="font-bold text-5xl sm:text-6xl sm:max-w-2xl mx-auto text-center tracking-tight bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text leading-tight
  [-webkit-background-clip:text] md:py-10 py-5 "
        >
          Frequently asked questions
        </h2>
        <div className="pt-12 sm:max-w-2xl mx-auto  lg:max-w-3xl">
          {fqyData.map(({ id, question, answer }) => (
            <AccordionItem
              key={id}
              id={id}
              question={question}
              answer={answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FYQ;
