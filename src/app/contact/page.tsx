"use client";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";

export default function ContactPage() {
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
      <nav>
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "#about" },
            { name: "Features", id: "#features" },
            { name: "Pricing", id: "#pricing" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="billiclipd"
        />
      </nav>

      <div id="contact-hero" data-section="contact-hero" className="py-20">
        <ContactText
          text="Get in touch with our team. We'd love to hear about your content and discuss how we can help you go viral."
          animationType="entrance-slide"
          buttons={[
            { text: "Schedule a Call", onClick: () => window.open('https://calendly.com/billiclipd', '_blank') },
            { text: "Back to Home", href: "/" },
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-form" data-section="contact-form" className="py-20">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl rounded-theme bg-card p-10">
            <h2 className="mb-2 text-4xl font-bold text-foreground">Let's Connect</h2>
            <p className="mb-8 text-lg text-foreground/75">
              Fill out the form below or reach out directly. We typically respond within 24 hours.
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-theme border border-accent/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-theme border border-accent/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-theme border border-accent/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-theme bg-primary-cta text-primary-cta-text font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
            <p className="mt-8 text-center text-sm text-foreground/75">
              Or schedule a call directly: billing@billiclipd.com
            </p>
          </div>
        </div>
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
