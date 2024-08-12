import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white/90">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Your Search Box. We are
          committed to protecting your personal information and your right to
          privacy. This Privacy Policy explains how we collect, use, and share
          your information when you use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Information We Collect
        </h2>
        <p className="mb-4">
          We collect information that you provide directly to us, such as when
          you create an account, use our services, or contact us for support.
          This may include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Name and contact information</li>
          <li>Account credentials</li>
          <li>Payment information</li>
          <li>Any other information you choose to provide</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Use Your Information
        </h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>
            Protect against, investigate, and prevent fraudulent or illegal
            activity
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Sharing of Information
        </h2>
        <p className="mb-4">We may share your information with:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Service providers who perform services on our behalf</li>
          <li>Professional advisors, such as lawyers and accountants</li>
          <li>
            Regulatory authorities, government agencies, and law enforcement
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Your Rights and Choices
        </h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. You can also opt out of certain data collection and use.
          To exercise these rights, please contact us using the information
          provided below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the &ldquo;Last Updated&rdquo; date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at:
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

export default PrivacyPolicy;
