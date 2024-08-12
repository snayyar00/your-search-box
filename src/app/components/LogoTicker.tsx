"use client";

import React from "react";
import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import pulse from "@/assets/logo-pulse.png";
import quantum from "@/assets/logo-quantum.png";
import Image from "next/image";

import { motion } from "framer-motion";

const logoData = [
  {
    id: 1,
    src: acme,
  },
  {
    id: 1,
    src: apex,
  },
  {
    id: 1,
    src: celestial,
  },
  {
    id: 1,
    src: echo,
  },
  {
    id: 1,
    src: pulse,
  },
  {
    id: 1,
    src: quantum,
  },
];

const LogoTicker = () => {
  return (
    <div
      className="py-8 md:py-12 mt-10 text-white"
      id="partners"
    >
      <div className="container">
        <h2 className="text-xl text-center">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div
          className="flex overflow-hidden mt-12 lg:mt-20
        [mask-image:linear-gradient(to_right,transparent,black,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black,transparent)]
        "
        >
          <motion.div
            className="flex gap-14 mx-auto flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {logoData.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                alt="logo img"
                width={100}
                height={50}
                className="logo-ticker-image invert"
                loading="lazy"
              />
            ))}
            {logoData.map(({ id, src }) => (
              <Image
                key={id}
                src={src}
                width={100}
                height={50}
                alt="logo img"
                className="logo-ticker-image invert"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
