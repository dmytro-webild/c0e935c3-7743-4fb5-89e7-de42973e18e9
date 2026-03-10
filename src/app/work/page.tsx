"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface Clip {
  id: string;
  src: string;
  type: "video" | "image";
  title: string;
}

const clips: Clip[] = [
  {
    id: "1",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-mr1xedhd.jpg",    type: "image",    title: "Viral Clip 1"},
  {
    id: "2",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-h65hjshx.jpg",    type: "image",    title: "Viral Clip 2"},
  {
    id: "3",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881750051-0ym5nbmx.jpg",    type: "image",    title: "Viral Clip 3"},
  {
    id: "4",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-1pjxjkc4.jpg",    type: "image",    title: "Viral Clip 4"},
  {
    id: "5",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1772881146961-mr1xedhd.jpg",    type: "image",    title: "Viral Clip 5"},
];

export default function WorkPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const containerWidth = scrollContainer.scrollWidth;
    const viewportWidth = scrollContainer.clientWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= containerWidth - viewportWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const handleClipClick = (clipId: string) => {
    setPlayingId(playingId === clipId ? null : clipId);
  };

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
          brandName="billiscales"
          navItems={[
            { name: "Case Studies", id: "case-studies" },
            { name: "About", id: "about" },
            { name: "My Work", id: "/work" },
            { name: "Process", id: "process" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Book A Call",            href: "https://calendly.com/ibbiyousuf420/30min"}}
        />
      </div>

      <main className="w-full min-h-screen bg-gradient-to-b from-background to-card pt-32 pb-20">
        <div className="w-full px-4 md:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              My Work
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Scroll through my latest viral clips and shortform content
            </p>
          </div>

          {/* Horizontal Scrolling Container */}
          <div
            className="w-full overflow-hidden rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(var(--primary-cta), 0.05), rgba(var(--accent), 0.05))",              border: "1px solid rgba(var(--foreground), 0.1)"}}
          >
            <div
              ref={scrollContainerRef}
              className="flex gap-4 p-6 overflow-x-scroll scroll-smooth no-scrollbar"
              style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
            >
              {/* Duplicate clips to create infinite loop effect */}
              {[...clips, ...clips].map((clip, index) => (
                <div
                  key={`${clip.id}-${index}`}
                  className="flex-shrink-0 relative group cursor-pointer transition-transform duration-300 hover:scale-105"
                  style={{
                    width: "240px",                    aspectRatio: "9/16"}}
                  onClick={() => handleClipClick(clip.id)}
                >
                  {/* Clip Container */}
                  <div
                    className="w-full h-full rounded-xl overflow-hidden shadow-lg"
                    style={{
                      background: "var(--card)",                      border: "2px solid rgba(var(--primary-cta), 0.2)"}}
                  >
                    {/* Image/Video */}
                    {clip.type === "image" ? (
                      <img
                        src={clip.src}
                        alt={clip.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        src={clip.src}
                        className="w-full h-full object-cover"
                        autoPlay={playingId === clip.id}
                        controls={playingId === clip.id}
                        muted
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      {playingId !== clip.id && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div
                            className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300"
                            style={{
                              background: "var(--primary-cta)",                              backdropFilter: "blur(10px)"}}
                          >
                            <Play
                              size={28}
                              className="text-white fill-white"
                              style={{
                                filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))"}}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-2">
                    <p className="text-sm font-medium text-foreground truncate">
                      {clip.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info text */}
          <div className="text-center mt-8 text-foreground/60">
            <p className="text-sm md:text-base">
              👆 Scroll horizontally • Click any clip to play
            </p>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
