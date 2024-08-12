"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import AnimatedHeader from "@/components/custom-animations/AnimatedHeader";
import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";

import contactGif from "@/assets/contact.gif";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#14093E] to-[#0E0627] text-white relative">
      <div className="w-full absolute left-0 -top-[400px] min-h-96 ">
        <BackgroundGridImage className="w-full h-full opacity-60" />
      </div>
      <div className="container mx-auto px-4 py-16 relative ">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedHeader
            className="section-header pt-5 from-white to-[#586285] text-transparent bg-clip-text
            [-webkit-background-clip:text] py-5 lg:text-7xl lg:tracking-wide"
          >
            Get in Touch
          </AnimatedHeader>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 my-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-4 text-blue-400" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 text-blue-400" />
                <span>info@yourcompany.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 text-blue-400" />
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
            </div>
            <div className="mt-12">
              <Image
                src={contactGif}
                alt="Icons by Lordicon.com Illustration"
                width={230}
                height={230}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-[#1F1147] border border-[#3D2F6F] focus:outline-none focus:border-blue-500 transition duration-300"
                  aria-label="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-[#1F1147] border border-[#3D2F6F] focus:outline-none focus:border-blue-500 transition duration-300"
                  aria-label="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-[#1F1147] border border-[#3D2F6F] focus:outline-none focus:border-blue-500 transition duration-300"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send className="ml-2" size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
