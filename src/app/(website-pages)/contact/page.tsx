import ContactUsComponenet from "@/app/components/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch with Us | Your Search Box",
  description:
    "Have questions or need assistance? Reach out to the Your Search Box team through our contact form. We're here to help.",
  openGraph: {
    title: "Get in Touch with Us | Your Search Box",
    description:
      "Contact the Your Search Box team for any inquiries or support. We're ready to assist you with all your questions.",
    url: "https://your-website.com/contact",
    images: [
      {
        url: "https://your-website.com/og-image-contact.png",
        width: 1200,
        height: 627,
        alt: "Contact Your Search Box",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Your Search Box",
  },
  metadataBase: {
    host: "https://your-search-box.vercel.app",
    href: "/",
    origin: "https://your-search-box.vercel.app",
    password: "your-search-box",
    hash: "your-search-box",
    pathname: "/",
    search: "",
    username: "your-search-box",
    hostname: "your-search-box.vercel.app",
    port: "",
    protocol: "https:",
    searchParams: new URLSearchParams(""),
    toString: () => "https://your-search-box.vercel.app/",
    toJSON: () => "https://your-search-box.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourwebsite", // Your website's Twitter handle
    creator: "@yourwebsite", // Creator's Twitter handle
    title: "Get in Touch with Us | Your Search Box",
    description:
      "Reach out to Your Search Box for assistance or support. Our team is here to help with any inquiries.",
    images: [
      {
        url: "https://your-website.com/og-image-contact.png",
        width: 1200,
        height: 627,
        alt: "Contact Your Search Box",
      },
    ],
  },
};

const ContactUs = () => {
  return (
    <>
      <ContactUsComponenet />
    </>
  );
};

export default ContactUs;
