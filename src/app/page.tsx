"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import {
  Sparkles,
  TrendingUp,
  Zap,
  BarChart3,
  Trophy,
  HelpCircle,
  Eye,
  Users,
  Award,
} from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="noise"
      cardStyle="soft-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="billiclipd"
          navItems={[
            { name: "Case Studies", id: "case-studies" },
            { name: "About", id: "about" },
            { name: "Process", id: "process" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Book A Call",            href: "https://calendly.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Turn LongForm Into Viral Clips"
          description="I transform your best podcast, stream, and video moments into high-retention shortform content optimized for TikTok, Instagram Reels, and YouTube Shorts. More views, more followers, more growth—no ad spend required."
          tag="Shortform Specialist"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          leftCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-mr1xedhd.jpg?_wi=1",              imageAlt: "TikTok viral clip example"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-h65hjshx.jpg?_wi=1",              imageAlt: "Professional editing dashboard"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-1pjxjkc4.jpg?_wi=1",              imageAlt: "Instagram Reels clip"
            },
          ]}
          rightCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881750051-0ym5nbmx.jpg?_wi=1",              imageAlt: "YouTube Shorts content"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-mr1xedhd.jpg?_wi=2",              imageAlt: "Trending clips montage"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-h65hjshx.jpg?_wi=2",              imageAlt: "Editing interface"
            },
          ]}
          carouselPosition="right"
          buttons={[
            { text: "See My Work", href: "#case-studies" },
            { text: "Book A Call", href: "https://calendly.com" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Top Creators and Brands"
          description="Over 10M+ views generated. I've powered viral content for artists, influencers, TV shows, and products reaching hundreds of millions of followers."
          tag="10M+ Views Generated"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Brandon Clark 600K Followers",            "Sexyishaan 60K Followers",            "Ericcouu 300K Followers",            "Brandon Clark 600K Followers",            "Sexyishaan 60K Followers",            "Ericcouu 300K Followers",            "Brandon Clark 600K Followers",            "Sexyishaan 60K Followers"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardSix
          title="The Process"
          description="Launching your private clipping project has never been easier. Say goodbye to slow agencies—with my personalized clipping methodology, you launch, scale, and analyze viral content in record time with direct team access."
          tag="Proven Workflow"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Step #1",              description: "Book an Intro Call. We start with a quick intro call to understand your goals, target audience, and creative direction. From there, my team builds a custom private clipping project designed to maximize reach and engagement — whether you're a brand, artist, creator, or product.",              buttons: [{ text: "Start Your Project", href: "https://calendly.com" }],
            },
            {
              id: 2,
              title: "Our Team Starts Posting",              description: "Once we align on strategy, personalized content gets distributed across TikTok, Instagram Reels, YouTube Shorts, and more—simultaneously—with my proven optimization techniques. Direct team management ensures every clip reflects your brand's vision."
            },
            {
              id: 3,
              title: "Track Real-Time Results",              description: "Watch your clips climb trending charts in real-time. Full transparency with detailed analytics showing views, engagement, growth metrics, and ROI. Optimize on the fly based on what's working with direct collaboration and personalized guidance."
            },
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Measurable Results That Speak"
          description="Track the impact of your private clipping projects with clear, actionable metrics from our dedicated team."
          tag="Performance Metrics"
          tagIcon={BarChart3}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            {
              id: "1",              value: "10M ",              title: "Views Generated",              description: "Average Views per private project",              icon: Eye,
            },
            {
              id: "2",              value: "1000 ",              title: "Expert Team",              description: "Dedicated clipping specialists for your projects",              icon: Users,
            },
            {
              id: "3",              value: "💯 ",              title: "Organic Growth",              description: "Zero ad spend required—pure algorithmic reach",              icon: TrendingUp,
            },
            {
              id: "4",              value: "3-5x",              title: "Avg ROI",              description: "Return on investment vs traditional marketing",              icon: Award,
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="case-studies" data-section="case-studies">
        <ProductCardFour
          title="Client Success Stories"
          description="From independent creators to global brands—here's the impact of our personalized clipping and team management approach."
          tag="Proven Results"
          tagIcon={Trophy}
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "bbno",              name: "Ericcouu - Influencer",              price: "",              variant: "Viral Growth",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-h65hjshx.jpg",              imageAlt: "Ericcouu success story"
            },
            {
              id: "dhar-mann",              name: "Brandon Clark - Gym Coach",              price: "",              variant: "Followers | Trending Content",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-mr1xedhd.jpg",              imageAlt: "Brandon Clark success story"
            },
            {
              id: "paul-american",              name: "PB Investing - Trader",              price: "",              variant: "Followers | Trading Content",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881750051-0ym5nbmx.jpg?_wi=2",              imageAlt: "PB Investing success story"
            },
            {
              id: "tate-mccrae",              name: "Sexyishaan - Influencer",              price: "",              variant: "Entertainment",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-1pjxjkc4.jpg",              imageAlt: "Sexyishaan success story"
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why you need Clipping"
          description={[
            "I started private clipping work because I saw creators and brands struggling to repurpose their best content. They were sitting on goldmines—podcasts, streams, videos—but lacked the time, skills, or network to turn them into viral clips.",            "Now, with a dedicated team of expert clippers and a proven personalized methodology, I've helped launch private projects that generated over 10 Million views. No agencies. No gatekeeping. Just direct collaboration and results.",            "Every client I work with gets direct access to a team obsessed with viral growth, algorithmic optimization, and transparent metrics. Your success is my success, and my team is committed to your project's unique vision."
          ]}
          useInvertedBackground={false}
          showBorder={false}
          buttons={[{ text: "Schedule Consultation", href: "https://calendly.com" }]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know before starting your private clipping project with our dedicated team."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqs={[
            {
              id: "1",              title: "Whats Clipping ?",              content: "Clipping is the process of turning long-form content such as podcasts, livestreams, and YouTube videos into short, high-impact clips designed for platforms like TikTok, Instagram Reels, and YouTube Shorts.Through private clipping collaboration, you work directly with my dedicated team to identify the most engaging moments from your content. We then transform those moments into high-retention short-form videos with optimized hooks, captions, and formatting designed to perform well in social media algorithms. "
            },
            {
              id: "2",              title: "How does the personalized clipping process work?",              content: "Step 1: Book an intro call where we discuss your goals, content strategy, and vision. Step 2: Your content gets assigned to our dedicated team who create and optimize clips for each platform while maintaining direct communication with you. Step 3: Clips launch simultaneously across social platforms and we track real-time performance together with detailed analytics and regular updates."
            },
            {
              id: "3",              title: "How quickly can I launch my private project?",              content: "Most private clipping projects launch within 2-5 business days after the initial strategy call. Your content goes through our personalized optimization process, and begins gaining traction immediately. Real-time results start appearing within hours, with our team providing direct updates on performance."
            },
            {
              id: "4",              title: "What types of creators and businesses do you work with?",              content: "I work with podcasters, streamers,  influencers, TV shows, brands, product launches, apps, startups, and content entrepreneurs seeking personalized team management. Essentially, if you have longform or short-form content and want to maximize viral reach through direct collaboration with expert clippers, we're a fit."
            },
            {
              id: "5",              title: "Is there a cost to start? What's the pricing model?",              content: "Pricing varies based on your project scope, content volume, and dedicated team support level. I offer custom packages tailored to your specific goals and vision. Contact me for a consultation and I'll provide transparent pricing with no hidden fees."
            },
            {
              id: "6",              title: "How is this different from hiring a video editor?",              content: "I'm not just editing videos—I'm providing personalized team management and optimization for viral growth across platforms. My private clipping collaboration includes audience research, platform algorithms, trend analysis, optimal timing, direct communication with your dedicated team, and distribution through my network. It's a complete organic growth system with direct collaboration, not just editing."
            },
            {
              id: "7",              title: "Do I retain ownership of my clips?",              content: "100%. You retain full ownership of all clips created through our private collaboration. My team handles creation, optimization, and distribution, but the content is yours. We simply amplify it through our network to drive maximum views and engagement."
            },
            {
              id: "8",              title: "What kind of results should I expect?",              content: "Results vary based on content quality, audience size, and platform fit. My private collaboration clients typically see 3-5x ROI within the first month. Many experience viral clips (100K-500K+ views), new followers, lead generation, and increased business opportunities from the exposure managed by our dedicated team."
            },
          ]}
          faqsAnimation="slide-up"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to launch your private clipping project with a dedicated team? Let's discuss your unique vision and explore how direct collaboration can help you reach millions of engaged viewers—no ad spend required."
          animationType="entrance-slide"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Book A Call", href: "https://calendly.com" },
            { text: "See Case Studies", href: "#case-studies" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="billiclipd"
          columns={[
            {
              items: [
                { label: "Home", href: "/" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Process", href: "#process" },
              ],
            },
            {
              items: [
                { label: "About", href: "#about" },
                { label: "FAQ", href: "#faq" },
              ],
            },
            {
              items: [
                { label: "Contact", href: "#contact" },
                { label: "Book A Call", href: "https://calendly.com" },
                { label: "Privacy Policy", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}