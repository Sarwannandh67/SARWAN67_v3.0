import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { Navbar } from "./Navbar";

const roles = ["Student", "Entrepreneur", "Trader", "Investor", "Director"];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // Video setup
    const video = videoRef.current;
    let hls: Hls | null = null;

    if (video) {
        const src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
        video.muted = true;
        
        if (Hls.isSupported()) {
          hls = new Hls();
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {
              console.log("Autoplay blocked, waiting for interaction");
            });
          });
          
          hls.on(Hls.Events.ERROR, (_event, data) => {
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  hls?.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  hls?.recoverMediaError();
                  break;
                default:
                  hls?.destroy();
                  break;
              }
            }
          });
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = src;
          video.addEventListener("loadedmetadata", () => {
            video.play().catch(() => {});
          });
        }
    }

    // Role cycle
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // GSAP Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1, ease: "power3.out" }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.8"
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
        {/* Background Video (Blue Planet Effect) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                crossOrigin="anonymous"
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-110 opacity-70"
            />
            {/* Ambient Blue Glow and Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-bg/90 mix-blend-overlay" />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Glow effect matching the blue planet theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg via-bg/40 to-transparent pointer-events-none" />
        </div>

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 mt-20 sm:mt-16 max-w-5xl mx-auto">
            <div className="blur-in text-[10px] sm:text-xs md:text-sm text-text-primary/70 uppercase tracking-[0.2em] mb-6 sm:mb-8 bg-white/5 px-4 py-2 rounded-full border border-stroke/50 backdrop-blur-md">
                CEO at Sarwagyna • Co-Founder at CreatorNex
            </div>
            
            <h1 className="name-reveal text-4xl sm:text-6xl md:text-7xl lg:text-[100px] lg:leading-[120px] font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
                Building the infrastructure for tomorrow.
            </h1>
            
            <div className="blur-in text-lg sm:text-2xl md:text-3xl text-text-primary mb-8 flex items-center justify-center flex-wrap gap-2 font-light">
                <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block font-normal">
                    {roles[roleIndex]}
                </span>
            </div>

            <p className="blur-in text-sm md:text-base text-muted max-w-lg mx-auto mb-10 sm:mb-12 px-2 sm:px-0">
                I am Sarwan Thondamalla—an 18-year-old venture builder, software engineer, and systems thinker. I build companies, engineer technology, and allocate capital.
            </p>

            <div className="blur-in flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto px-6 sm:px-0">
                <button onClick={() => scrollTo("ventures")} className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-all outline-none bg-text-primary text-bg hover:bg-bg hover:text-text-primary overflow-hidden w-full sm:w-auto">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-gradient-shift bg-[length:200%_auto]" />
                    <span className="absolute inset-[1.5px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    <span className="relative z-10 font-medium whitespace-nowrap">Explore my work</span>
                </button>
                
                <button onClick={() => scrollTo("contact")} className="group relative rounded-full text-sm px-7 py-3.5 hover:scale-105 transition-all outline-none border-2 border-stroke bg-bg text-text-primary hover:border-transparent overflow-hidden w-full sm:w-auto">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#89AACC] to-[#4E85BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 animate-gradient-shift bg-[length:200%_auto]" />
                     <span className="absolute inset-[2px] rounded-full bg-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    <span className="relative z-10 font-medium whitespace-nowrap">Get in touch</span>
                </button>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
            <span className="text-[10px] text-muted uppercase tracking-[0.2em] font-medium">SCROLL</span>
            <div className="w-px h-10 bg-stroke relative overflow-hidden">
                <div className="w-full h-[50%] bg-text-primary absolute top-0 left-0 animate-scroll-down" />
            </div>
        </div>
    </section>
  )
}
