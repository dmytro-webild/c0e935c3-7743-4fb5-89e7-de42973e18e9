"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import SplitAbout from "@/components/sections/about/SplitAbout";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Phone, Users } from "lucide-react";

export default function Page() {
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
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "#about" },
            { name: "Contact", id: "#contact" }
          ]}
          brandName="billiclipd"
          button={{
            text: "Book a Call",            href: "https://calendly.com/ibbiyousuf420/30min"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Turn Longform Content Into Viral Clips"
          description="Expert clip editing services that transform your YouTube videos, podcasts, and streams into viral TikToks, Instagram Reels, and YouTube Shorts. We've generated 10M+ views for creators."
          background={{ variant: "glowing-orb" }}
          tag="Trusted by 500+ Creators"
          tagIcon={Users}
          tagAnimation="slide-up"
          kpis={[
            { value: "10M+", label: "Views Generated" },
            { value: "99.8%", label: "Client Satisfaction" },
            { value: "3-5 Days", label: "Turnaround Time" }
          ]}
          enableKpiAnimation={true}
          buttons={[
            {
              text: "Book a Call",              href: "https://calendly.com/ibbiyousuf420/30min"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/a-vibrant-tiktok-style-vertical-video-fr-1772847774345-4bf0afdb.png"
          imageAlt="Viral clips showcase"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Our Clipping Service"
          description="We specialize in transforming long-form content into short, shareable clips optimized for viral growth across all platforms."
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "Expert Editing",              description: "Our team uses advanced editing techniques to create engaging, fast-paced clips that capture attention."
            },
            {
              title: "Multi-Platform Optimization",              description: "Every clip is tailored for TikTok, Instagram Reels, YouTube Shorts, and more with the right aspect ratios and formats."
            },
            {
              title: "Quick Turnaround",              description: "Get your clips back in 3-5 business days, ready to boost your growth immediately."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/a-dynamic-montage-of-multiple-trending-t-1772847775452-15beec39.png"
          imageAlt="Clipping service in action"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[
            {
              text: "Book a Call",              href: "https://calendly.com/ibbiyousuf420/30min"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          faqs={[
            {
              id: "1",              title: "What's your turnaround time?",              content: "We typically deliver clips within 3-5 business days. Rush orders available upon request."
            },
            {
              id: "2",              title: "How many clips do you produce per project?",              content: "We create multiple clips from your source material, ensuring you get maximum content to distribute across platforms."
            },
            {
              id: "3",              title: "Do you handle different video formats?",              content: "Yes! We work with YouTube videos, podcasts, streams, and any long-form content. We optimize for all major platforms."
            },
            {
              id: "4",              title: "What's your pricing?",              content: "Pricing varies based on video length and clip quantity. Book a call to discuss your specific needs and get a custom quote."
            }
          ]}
          ctaTitle="Ready to Go Viral?"
          ctaDescription="Let's discuss how we can help you maximize your content's reach."
          ctaButton={{
            text: "Book a Free Call",            href: "https://calendly.com/ibbiyousuf420/30min"
          }}
          ctaIcon={Phone}
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <FooterBase
        columns={[
          {
            title: "Product",            items: [
              { label: "Clip Editing", href: "#hero" },
              { label: "About Us", href: "#about" },
              { label: "Contact", href: "#contact" }
            ]
          },
          {
            title: "Legal",            items: [
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" }
            ]
          }
        ]}
        logoText="billiclipd"
        copyrightText="Â© 2025 | billiclipd"
      />
    </ThemeProvider>
  );
}
