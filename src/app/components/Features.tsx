import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";
import AnimatedHeader from "../../components/custom-animations/AnimatedHeader";

const featuresData = [
  {
    icon: "🔍",
    title: "Smart Search",
    description:
      "AI-powered search that understands context and user intent for more accurate results.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Comprehensive insights into search patterns and user behavior to optimize your content.",
  },
  {
    icon: "🚀",
    title: "Performance Boost",
    description:
      "Lightning-fast search results that enhance user experience and engagement.",
  },
  {
    icon: "🔧",
    title: "Easy Integration",
    description:
      "Seamless integration with your existing website or application with minimal setup.",
  },
  {
    icon: "🎨",
    title: "Customizable UI",
    description:
      "Fully customizable search interface to match your brand and design preferences.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security and scalability to handle growing search volumes.",
  },
];

const KeyMetrics = () => {
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
                <div className="tag ">Our Features</div>
              </div>
              <AnimatedHeader className="">
                <h2
                  className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text
  [-webkit-background-clip:text]  lg:w-[55rem] mt-10 lg:leading-tight  "
                >
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text animate-pulse mr-2">
                    ⚡
                  </span>
                  Site Search & Boost Conversions with AI
                </h2>
              </AnimatedHeader>
              <AnimatedHeader className="">
                <p className="text-xl leading-relaxed pt-5 text-center text-white/90 mt-5  w-[45rem]">
                  Powered by advanced AI technology, our search solution
                  seamlessly integrates into your website, providing
                  intelligent, context-aware results tailored to your
                  users&apos; needs and your business goals.
                </p>
              </AnimatedHeader>
            </div>
          </div>
          <div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30 rounded-lg"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 transition-transform duration-300 ease-in-out hover:rotate-12">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyMetrics;
