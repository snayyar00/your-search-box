import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Terms and Conditions | Your Search Box",
  description:
    "Review the Terms and Conditions for using Your Search Box. Understand the obligations, limitations, and policies associated with our services.",
  openGraph: {
    title: "Terms and Conditions | Your Search Box",
    description:
      "Explore the Terms and Conditions of Your Search Box to understand the terms of service, user responsibilities, and limitations associated with our search solutions.",
    url: "https://your-search-box.vercel.app/terms-and-conditions",
    images: [
      {
        url: "https://your-search-box.vercel.app/og-image-terms.png",
        width: 1200,
        height: 627,
        alt: "Terms and Conditions",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Your Search Box",
  },
  metadataBase: new URL("https://your-search-box.vercel.app"),
  twitter: {
    card: "summary_large_image",
    site: "https://your-search-box.vercel.app",
    creator: "https://your-search-box.vercel.app",
    title: "Terms and Conditions | Your Search Box",
    description:
      "Review the Terms and Conditions for Your Search Box, covering user obligations, service limitations, and our policies.",
    images: [
      {
        url: "https://your-search-box.vercel.app/og-image-terms.png",
        width: 1200,
        height: 627,
        alt: "Terms and Conditions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://your-search-box.vercel.app/terms-and-conditions",
  },
};

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white/90">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          Welcome to Your Search Box. By accessing or using our services, you
          agree to be bound by these Terms and Conditions. If you do not agree
          to these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Description of Service
        </h2>
        <p className="mb-4">
          Your Search Box provides AI-powered on-site search solutions for
          websites. Our service includes search functionality, analytics, and
          customization options as described on our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
        <p className="mb-4">You agree to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Provide accurate and complete information when creating an account
          </li>
          <li>Maintain the security of your account credentials</li>
          <li>
            Use our services in compliance with all applicable laws and
            regulations
          </li>
          <li>
            Not misuse or attempt to gain unauthorized access to our systems
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          All content and technology related to our services are the property of
          Your Search Box or its licensors and are protected by intellectual
          property laws. You may not copy, modify, or distribute our content
          without explicit permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Payment and Billing</h2>
        <p className="mb-4">
          Paid services are billed in advance on a subscription basis. You agree
          to pay all fees associated with your chosen plan. Failure to pay may
          result in service suspension or termination.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          Your Search Box is not liable for any indirect, incidental, special,
          consequential, or punitive damages resulting from your use of our
          services. Our liability is limited to the amount paid by you for the
          service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate or suspend your account and access
          to our services for violation of these terms or for any other reason
          at our discretion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
        <p className="mb-4">
          We may modify these Terms and Conditions at any time. Continued use of
          our services after changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, please
          contact us at:
        </p>
        <p>
          Your Search Box
          <br />
          yoursearchbox@gmail.com
          <br />
        </p>
      </section>

      <p className="mt-8 text-sm text-gray-500">
        Last Updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsAndConditions;
