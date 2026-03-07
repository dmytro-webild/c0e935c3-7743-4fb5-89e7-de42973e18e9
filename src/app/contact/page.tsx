"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            { name: "Contact", id: "/contact" },
          ]}
          button={{
            text: "Book A Call",            href: "https://calendly.com"
          }}
        />
      </div>

      <div className="min-h-screen pt-20 pb-20">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Schedule a Call With Me
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70">
                Book a time that works for you. Let's discuss your project and how I can help you turn your content into viral clips.
              </p>
            </div>

            <div className="w-full bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div
                className="calendly-inline-widget w-full h-screen min-h-[800px] sm:min-h-[900px] lg:min-h-[1000px]"
                data-url="https://calendly.com/ibbiyousuf420/30min"
              ></div>
            </div>
          </div>
        </div>
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
                { label: "Contact", href: "/contact" },
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
