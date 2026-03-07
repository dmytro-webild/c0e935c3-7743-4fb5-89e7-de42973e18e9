"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import Link from "next/link";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",    email: "",    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "#about" },
            { name: "Services", id: "#services" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="billiclipd"
          button={{
            text: "Book a Call",            href: "/contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="contact-page" data-section="contact-page" className="pt-40 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Get in Touch</h1>
          <p className="text-lg text-center mb-12 opacity-75">
            Ready to turn your content into viral clips? Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-accent">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded border border-accent bg-background text-foreground focus:outline-none focus:border-primary-cta"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded border border-accent bg-background text-foreground focus:outline-none focus:border-primary-cta"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded border border-accent bg-background text-foreground focus:outline-none focus:border-primary-cta resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-cta text-primary-cta-text font-semibold py-3 rounded hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm opacity-60">Or reach out to us directly at:</p>
            <p className="text-lg font-semibold mt-2">hello@billiclipd.com</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ContactPage;
