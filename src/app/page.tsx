"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Sparkles, Hexagon, House, MessageSquareText, Settings, CircleDollarSign, ArrowLeftRight, Send, Twitter, Linkedin } from "lucide-react";

export default function Home() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          background={{ variant: "radial-gradient" }}
          tag="Viral Clip Specialist"
          tagIcon={Sparkles}
          title="Turn Longform Content Into Viral Clips"
          description="Turn your podcasts, streams, and long-form videos into viral clips for TikTok, Instagram Reels, and YouTube Shorts. Expert clipping services with 10M+ views generated."
          buttons={[
            { text: "Book a Call", href: "/contact" },
            { text: "View Portfolio", href: "#features" },
          ]}
          dashboard={{
            title: "Clip Analytics Hub",            logoIcon: Hexagon,
            imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",            buttons: [
              { text: "Dashboard", href: "#" },
              { text: "Export CSV", href: "#" },
            ],
            sidebarItems: [
              { icon: House, active: true },
              { icon: MessageSquareText },
              { icon: Settings },
            ],
            stats: [
              {
                title: "Clips Created",                values: [1240, 1856, 2130],
                description: "Total viral clips."
              },
              {
                title: "Total Views",                values: [10240000, 12500000, 13450000],
                valuePrefix: "",                valueSuffix: "M+",                description: "Across all platforms."
              },
              {
                title: "Engagement Rate",                values: [8.5, 12.3, 15.7],
                valueSuffix: "%",                description: "Average engagement."
              },
            ],
            chartTitle: "Views Over Time",            chartData: [
              { value: 50 },
              { value: 30 },
              { value: 70 },
              { value: 40 },
              { value: 90 },
            ],
            listTitle: "Recent Clips",            listItems: [
              {
                icon: CircleDollarSign,
                title: "5-Sec Motivational",                status: "Published"
              },
              {
                icon: ArrowLeftRight,
                title: "3-Min Podcast Clip",                status: "Processing"
              },
              {
                icon: Send,
                title: "Highlight Reel",                status: "Published"
              },
            ],
          }}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          features={[
            {
              id: 1,
              title: "Content Analysis",              description: "We analyze your longform content to identify the most viral moments and trending hooks.",              imageSrc: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop"
            },
            {
              id: 2,
              title: "Professional Editing",              description: "Our expert editors craft high-quality clips optimized for each platform's unique algorithm.",              imageSrc: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=300&fit=crop"
            },
            {
              id: 3,
              title: "Multi-Platform Optimization",              description: "Each clip is tailored for TikTok, Instagram Reels, and YouTube Shorts with proper formatting.",              imageSrc: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=500&h=300&fit=crop"
            },
            {
              id: 4,
              title: "Performance Analytics",              description: "Track engagement metrics, reach, and performance across all platforms in real-time.",              imageSrc: "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop"
            },
          ]}
          title="Our Process"
          description="How we transform your content into viral sensations"
          tag="What We Do"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose billiclipd?"
          description={[
            "With over 10 million views generated across TikTok, Instagram Reels, and YouTube Shorts, we know what makes content go viral. Our team combines data-driven insights with creative excellence to transform your longform content into short-form sensations.",            "We don't just edit clips—we create content strategies that maximize your reach and engagement on every platform."
          ]}
          buttons={[
            { text: "Book a Call", href: "/contact" },
            { text: "Learn More", href: "#features" },
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Go Viral?"
          description="Let's transform your content into clips that generate millions of views. Book a call with our team to discuss your project."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttonText="Book a Call"
          onSubmit={(email) => console.log("Email:", email)}
        />
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
