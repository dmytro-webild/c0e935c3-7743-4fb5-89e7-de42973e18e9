"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Sparkles, CheckCircle, MessageCircle, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="billiclipd"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          background={{ variant: "sparkles-gradient" }}
          title="Turn Longform Content Into Viral Clips"
          description="Expert clipping services that transform your YouTube videos, podcasts, and streams into shareable short-form content. 10M+ views generated."
          tag="Viral Clip Specialist"
          buttons={[
            { text: "Get Started", href: "/contact" },
            { text: "View Portfolio", href: "features" },
          ]}
          mediaItems={[
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Viral clip example 1" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Viral clip example 2" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Viral clip example 3" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Viral clip example 4" },
            { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Viral clip example 5" },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Transform Your Content Into" },
            { type: "image", src: "/placeholders/placeholder1.webp", alt: "billiclipd logo" },
            { type: "text", content: "Viral Moments" },
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Learn More", href: "/contact" },
            { text: "See Examples", href: "features" },
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFive
          title="Our Clipping Services"
          description="Professional video editing and content repurposing for maximum reach"
          tag="What We Do"
          tagIcon={Zap}
          features={[
            {
              title: "TikTok Optimization",              description: "Perfectly formatted and edited clips for TikTok's viral algorithm",              icon: CheckCircle,
              mediaItems: [
                { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "TikTok example 1" },
                { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "TikTok example 2" },
              ],
            },
            {
              title: "Instagram Reels",              description: "Eye-catching vertical videos designed for Instagram engagement",              icon: MessageCircle,
              mediaItems: [
                { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Instagram example 1" },
                { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Instagram example 2" },
              ],
            },
            {
              title: "YouTube Shorts",              description: "High-quality short-form content for YouTube's growing platform",              icon: Sparkles,
              mediaItems: [
                { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "YouTube example 1" },
                { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "YouTube example 2" },
              ],
            },
            {
              title: "Multi-Platform Distribution",              description: "Strategic repurposing of content across all major social platforms",              icon: Zap,
              mediaItems: [
                { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Multi-platform 1" },
                { imageSrc: "/placeholders/placeholder1.webp", imageAlt: "Multi-platform 2" },
              ],
            },
          ]}
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "View Our Work", href: "/contact" },
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your content needs"
          tag="Pricing"
          tagIcon={Sparkles}
          plans={[
            {
              id: "1",              price: "$499",              name: "Starter",              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "Chat to Sales", href: "/contact" },
              ],
              features: [
                "Up to 5 viral clips per month",                "TikTok & Instagram optimization",                "Basic editing and effects",                "Email support"],
            },
            {
              id: "2",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "$999",              name: "Professional",              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "Chat to Sales", href: "/contact" },
              ],
              features: [
                "Up to 15 viral clips per month",                "All platforms included",                "Advanced editing & custom effects",                "Priority support",                "Performance analytics"],
            },
            {
              id: "3",              price: "$1,999",              name: "Agency",              buttons: [
                { text: "Get Started", href: "/contact" },
                { text: "Chat to Sales", href: "/contact" },
              ],
              features: [
                "Unlimited viral clips",                "All platforms + emerging platforms",                "White-label solutions",                "Dedicated account manager",                "Custom strategy & analytics",                "24/7 priority support"],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to turn your content into viral sensations? Book a call with our team to discuss your clipping strategy."
          animationType="entrance-slide"
          buttons={[
            { text: "Book a Call", href: "/contact" },
            { text: "View Portfolio", href: "features" },
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <footer>
        <FooterCard
          logoText="billiclipd"
          copyrightText="© 2025 | billiclipd. All rights reserved."
        />
      </footer>
    </ThemeProvider>
  );
}
