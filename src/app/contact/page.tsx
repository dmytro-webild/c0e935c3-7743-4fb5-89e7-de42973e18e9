"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ContactForm from "@/components/form/ContactForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Mail, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
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
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "/" },
            { name: "Features", id: "#features" },
            { name: "About", id: "#about" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="billiclipd"
          bottomLeftText="Global Community"
          bottomRightText="hello@example.com"
        />
      </div>

      <div className="flex items-center justify-center min-h-screen py-20">
        <div className="w-full">
          <ContactForm
            title="Get in Touch"
            description="Ready to turn your content into viral clips? Reach out to our team and let's discuss your project."
            tag="Contact Us"
            tagIcon={Mail}
            inputPlaceholder="your@email.com"
            buttonText="Send Message"
            termsText="We'll get back to you within 24 hours."
            centered={true}
            useInvertedBackground={false}
            onSubmit={(email) => console.log("Email:", email)}
          />
        </div>
      </div>

      <FooterCard
        logoText="billiclipd"
        copyrightText="© 2025 | billiclipd. All rights reserved."
        socialLinks={[
          {
            icon: Twitter,
            href: "https://twitter.com/billiclipd",            ariaLabel: "Twitter"
          },
          {
            icon: Linkedin,
            href: "https://linkedin.com/company/billiclipd",            ariaLabel: "LinkedIn"
          },
        ]}
      />
    </ThemeProvider>
  );
}
