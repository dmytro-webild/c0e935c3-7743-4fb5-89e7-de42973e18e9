"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import { useEffect, useRef } from "react";

interface Clip {
    id: string;
    src: string;
    title: string;
    link: string;
}

const clips: Clip[] = [
    {
        id: "1",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1773165537767-sb172m93.png",    title: "Viral Clip 1",    link: "https://www.tiktok.com/@brandonclipd/video/7593877522681564446"
    },
    {
        id: "2",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1773165537769-ji09ma2s.png",    title: "Viral Clip 2",    link: "https://drive.google.com/file/d/1TFDj__ZvlvGQah-3T6YRsw6wwCGrR2YW/view?usp=drivesdk"
    },
    {
        id: "3",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1773165537769-p7aqg1q7.png",    title: "Viral Clip 3",    link: "https://drive.google.com/file/d/1QbP28qpbNlyWE-kJcLQXlZ70ai5ccjuw/view?usp=drivesdk"
    },
    {
        id: "4",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1773165537769-ecm4mns3.png",    title: "Viral Clip 4",    link: "https://www.tiktok.com/@brandonclipd/video/7594523303847415070"
    },
    {
        id: "5",    src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ab38TzdGBnNuMLrvS5uTUM2zMr/uploaded-1773164050845-j8dxb4nc.png",    title: "Viral Clip 5",    link: "https://drive.google.com/file/d/1Pt43OPdW-tMbRB_3DLumnhedP87cDZzo/view?usp=share_link"
    }
];

export default function WorkPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 2;
        const containerWidth = scrollContainer.scrollWidth;
        const viewportWidth = scrollContainer.clientWidth;

        const scroll = () => {
            scrollPosition += scrollSpeed;
            // Loop back to start for infinite scroll
            if (scrollPosition >= containerWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
        };

        const interval = setInterval(scroll, 30);
        return () => clearInterval(interval);
    }, []);

    const handleClipClick = (link: string) => {
        window.open(link, "_blank");
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
                        { name: "Contact", id: "contact" }
                    ]}
                    button={{
                        text: "Book A Call",            href: "https://calendly.com/ibbiyousuf420/30min"
                    }}
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

                    {/* Horizontal Infinite Scrolling Container */}
                    <div
                        className="w-full overflow-hidden rounded-2xl"
                        style={{
                            background: "linear-gradient(135deg, rgba(var(--primary-cta), 0.05), rgba(var(--accent), 0.05))",              border: "1px solid rgba(var(--foreground), 0.1)"
                        }}
                    >
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 p-6 overflow-x-scroll"
                            style={{
                                scrollBehavior: "smooth",                scrollbarWidth: "none",                msOverflowStyle: "none"
                            }}
                        >
                            {/* Duplicate clips for infinite loop effect */}
                            {[...clips, ...clips].map((clip, index) => (
                                <div
                                    key={`${clip.id}-${index}`}
                                    className="flex-shrink-0 relative group cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                                    style={{
                                        width: "280px",                    aspectRatio: "9/16"
                                    }}
                                    onClick={() => handleClipClick(clip.link)}
                                    role="link"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            handleClipClick(clip.link);
                                        }
                                    }}
                                >
                                    {/* Clip Card Container */}
                                    <div
                                        className="w-full h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300"
                                        style={{
                                            background: "var(--card)",                      border: "2px solid rgba(var(--primary-cta), 0.2)",                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                                        }}
                                    >
                                        {/* Image */}
                                        <img
                                            src={clip.src}
                                            alt={clip.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                                            <div
                                                className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 transform translate-y-8 group-hover:translate-y-0"
                                                style={{
                                                    background: "var(--primary-cta)",                          backdropFilter: "blur(10px)"
                                                }}
                                            >
                                                View
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="mt-3">
                                        <p className="text-sm font-medium text-foreground truncate">
                                            {clip.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info Text */}
                    <div className="text-center mt-8 text-foreground/60">
                        <p className="text-sm md:text-base">
                            👆 Continuous scroll • Click any card to view
                        </p>
                    </div>
                </div>
            </main>
        </ThemeProvider>
    );
}
