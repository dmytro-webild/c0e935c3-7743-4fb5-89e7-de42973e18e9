"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import Link from "next/link";
import { Mail } from "lucide-react";

const HomePage = () => {
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

      <div id="hero" data-section="hero">
        <HeroCentered
          background={{ variant: "plain" }}
          avatars={[
            { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", alt: "User 1" },
            { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", alt: "User 2" },
            { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", alt: "User 3" },
          ]}
          avatarText="Trusted by content creators"
          title="Turn Longform into Viral Clips"
          description="Professional clip editing service. We transform your YouTube videos, podcasts, and streams into TikTok, Reels, and Shorts that drive engagement."
          buttons={[
            { text: "Get Started", href: "/contact" },
            { text: "Learn More", href: "#services" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactCTA
          tag="Ready to Go Viral?"
          tagIcon={Mail}
          title="Let's Turn Your Content into Clips"
          description="Our team of expert editors is ready to help you maximize your content's reach. Book a consultation call with us today."
          buttons={[
            { text: "Book a Call", href: "/contact" },
            { text: "View Our Work", href: "#services" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
