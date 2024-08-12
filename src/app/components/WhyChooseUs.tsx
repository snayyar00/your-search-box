"use client";
import React, { useState } from "react";
import Image from "next/image";

import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";
import AnimatedHeader from "../../components/custom-animations/AnimatedHeader";

import SearchBoxTop from "@/assets/features-images/Search-Box-Preview.png";
import CustomizedSearchBox from "@/assets/features-images/Customize-box.png";
import SearchBoxBottom from "@/assets/features-images/Search-Box Bottom-Bar.png";
import DashboardImge from "@/assets/dashboard-layout.png";


export function WhyChooseUs() {
  const [activeButton, setActiveButton] = useState("design");

  const handleButtonClick = (buttonType: string) => {
    console.log("click");
    setActiveButton(buttonType);
  };
  return (
    <>
      <section className="py-12 md:py-24 text-white relative overflow-clip ">
        <div className="container">
          {/* background grid */}
          <div className="w-full absolute left-0 -top-[25rem] min-h-96 ">
            <BackgroundGridImage className="w-full h-full opacity-60" />
          </div>
          <div>
            <div className="w-full absolute left-[50rem] top-[15rem] min-h-96  ">
              <BackgroundGridImage className="w-full h-full opacity-60" />
            </div>
            <div className="sm:w-[33.75rem] mx-auto  flex flex-col items-center   ">
              <div className="flex justify-center pb-5">
                <div className="tag ">Why choose us</div>
              </div>
              <AnimatedHeader className="">
                <h2
                  className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text
  [-webkit-background-clip:text]  lg:w-[55rem] mt-10 lg:leading-tight "
                >
                  Why Choose Our <span className="hidden lg:block"></span>
                  <span className="block md:hidden"></span>
                  AI-Powered On-Site Search?
                </h2>
              </AnimatedHeader>
              <AnimatedHeader className="">
                <p className="text-xl leading-relaxed pt-5 text-center text-white/90 my-10">
                  Our AI effortlessly navigates through your website
                  information, providing visitors with instant, accurate
                  results.
                </p>
              </AnimatedHeader>
            </div>
          </div>
          <div className="mt-20 relative">
            {/* Gradient blur effect */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/40 to-transparent pointer-events-none "></div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First row - full width */}
              <div className="col-span-1 md:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg p-8 transition-all duration-700 ease-in-out hover:shadow-lg overflow-hidden group relative h-[50rem]">
                <div className="flex flex-col transition-all duration-700 ease-in-out transform group-hover:-translate-y-full gap-4">
                  <h2 className="text-2xl font-semibold  text-white">
                    AI-Powered Precision
                  </h2>
                  <p className="text-white/80  transition-all duration-700 ease-in-out w-[55rem] group-hover:mb-[2rem] ">
                    Experience unparalleled search accuracy with our AI that
                    learns and adapts to your website&apos;s content, providing
                    visitors with instant, relevant results.
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-full transition-all duration-700 ease-in-out transform translate-y-1/4 group-hover:translate-y-0 px-[2rem] group-hover:mt-[2rem]">
                  <Image
                    src={DashboardImge}
                    alt={"dashboard-image"}
                    className="rounded-lg  transition-all duration-700 ease-in-out mt-[2rem]"
                  />
                </div>
              </div>

              {/* Second row - two columns */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg overflow-hidden">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Seamless Integration
                </h3>
                <p className="text-white/80 mb-4">
                  Effortlessly integrate your-search-box into your website with
                  minimal setup, enhancing user experience instantly.
                </p>
                <div className="relative w-full h-48">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Monitor */}
                    <rect
                      x="10"
                      y="5"
                      width="180"
                      height="90"
                      rx="5"
                      fill="#333"
                    />
                    <rect
                      x="15"
                      y="10"
                      width="170"
                      height="75"
                      rx="2"
                      fill="#fff"
                    />

                    {/* Website */}
                    <rect x="20" y="15" width="160" height="65" fill="#f0f0f0" />

                    {/* Search bar */}
                    <rect
                      x="30"
                      y="20"
                      width="140"
                      height="10"
                      rx="5"
                      fill="#e0e0e0"
                    />
                    <circle cx="160" cy="25" r="3" className="search-icon" />

                    {/* Grid of items */}
                    <rect x="30" y="35" width="30" height="30" fill="#ddd" className="grid-item item1" />
                    <rect x="65" y="35" width="30" height="30" fill="#ddd" className="grid-item item2" />
                    <rect x="100" y="35" width="30" height="30" fill="#ddd" className="grid-item item3" />
                    <rect x="135" y="35" width="30" height="30" fill="#ddd" className="grid-item item4" />

                    <rect x="30" y="70" width="30" height="5" fill="#bbb" />
                    <rect x="65" y="70" width="30" height="5" fill="#bbb" />
                    <rect x="100" y="70" width="30" height="5" fill="#bbb" />
                    <rect x="135" y="70" width="30" height="5" fill="#bbb" />
                  </svg>
                </div>
                <style jsx>{`
                  @keyframes searchIconColor {
                    0%, 100% { fill: #22D3EE; }
                    50% { fill: #4F46E5; }
                  }
                  
                  @keyframes gridItemHighlight {
                    0%, 100% { fill-opacity: 0; }
                    50% { fill-opacity: 0.3; }
                  }
                  
                  .search-icon {
                    animation: searchIconColor 2s infinite;
                  }
                  
                  .grid-item {
                    fill: #22D3EE;
                    fill-opacity: 0;
                  }
                  
                  .item1 { animation: gridItemHighlight 3s infinite; }
                  .item2 { animation: gridItemHighlight 3s infinite 1s; }
                  .item3 { animation: gridItemHighlight 3s infinite 2s; }
                  .item4 { animation: gridItemHighlight 3s infinite 0.5s; }
                `}</style>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg overflow-hidden">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Boost Conversions
                </h3>
                <p className="text-white/80 mb-4 pr-2">
                  Satisfy customers with accurate answers, leading to improved
                  engagement and higher conversion rates.
                </p>
                <svg
                  className="w-full h-48"
                  viewBox="0 0 200 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 90 L70 30 L130 70 L190 10"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0 300"
                      to="300 0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <circle cx="70" cy="30" r="5" fill="#10B981">
                    <animate
                      attributeName="r"
                      values="5;7;5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="130" cy="70" r="5" fill="#10B981">
                    <animate
                      attributeName="r"
                      values="5;7;5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>

              {/* Third row - full width with interactive buttons */}
              <div className="col-span-1 md:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 ease-in-out hover:shadow-lg relative z-10 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 pr-8">
                    <h3 className="text-2xl font-semibold mb-4 text-white transition-all duration-300 ease-in-out">
                      Customizable Experience
                    </h3>
                    <p className="text-white/80 mb-6 transition-all duration-300 ease-in-out">
                      Tailor your-search-box to fit your brand and meet specific
                      user needs with our flexible customization options.
                    </p>
                    <div className="flex  bg-[#14093E] rounded-full w-fit p-2 border-gray-700 border">
                      <button
                        className={`px-4 py-2 rounded-full transition-colors duration-300 focus:outline-none border border-[#E5E6E9]/20 ${
                          activeButton === "design"
                            ? "bg-[#f2f2] text-[#D9DBDD] border border-gray-600"
                            : "text-[#E5E6E9] border-none"
                        }`}
                        onClick={() => handleButtonClick("design")}
                      >
                        Option 1
                      </button>
                      <button
                        className={`px-4 py-2 rounded-full transition-colors duration-300 focus:outline-none border border-[#E5E6E9]/20 ${
                          activeButton === "features"
                            ? "bg-[#f2f2] text-[#D9DBDD] border border-gray-600"
                            : "text-[#E5E6E9] border-none"
                        }`}
                        onClick={() => handleButtonClick("features")}
                      >
                        Option 2
                      </button>
                      <button
                        className={`px-4 py-2 rounded-full transition-colors duration-300 focus:outline-none border border-[#E5E6E9]/20 ${
                          activeButton === "analytics"
                            ? "bg-[#f2f2] text-[#D9DBDD] border border-gray-600"
                            : "text-[#E5E6E9] border-none"
                        }`}
                        onClick={() => handleButtonClick("analytics")}
                      >
                        Option 3
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="relative sm:w-full mt-5 sm:mt-0  min-w-[18rem] min-h-[8rem] sm:h-48 transition-all duration-500 ease-in-out">
                      {["design", "features", "analytics"].map((type) => (
                        <div
                          key={type}
                          className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                            activeButton === type ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {type === "design" && (
                            <>
                              <Image src={SearchBoxTop} alt="search-box-top" />
                            </>
                          )}
                          {type === "features" && (
                            <>
                              <Image
                                src={CustomizedSearchBox}
                                alt="search-box-top"
                              />
                            </>
                          )}
                          {type === "analytics" && (
                            <>
                              <Image
                                src={SearchBoxBottom}
                                alt="search-box-top"
                                className=""
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
