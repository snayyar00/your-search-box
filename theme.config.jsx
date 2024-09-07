import Image from "next/image";
export default {
  logo: (
    <span>Your Search Box</span>
    // <Image
    //   src={"/src/assets/rectangular-logo"}
    //   alt="your-searchbox-logo"
    //   width={200}
    //   height={200}
    //   className="bg-red-400"
    // />
  ),
  project: {
    link: "https://yoursearchbox.com/",
  },
  // ... other theme options
  defaultMenuCollapseLevel: 1,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Search Box" />
      <meta property="og:description" content="Smart Search Box" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </>
  ),
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://yoursearchbox.com" target="_blank">
        🎉 SearchBox 2.0 is released. Read more →
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://yoursearchbox.com" target="_blank">
          Your Search Box
        </a>
        .
      </span>
    ),
  },
};
