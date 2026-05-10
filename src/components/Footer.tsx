import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";

export function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Video setup
    const video = videoRef.current;
    if (video) {
        const src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
        if (Hls.isSupported()) {
          const hls = new Hls({ enableWorker: false });
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {});
          });
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = src;
          video.addEventListener("loadedmetadata", () => {
            video.play().catch(() => {});
          });
        }
    }

    // Marquee
    const ctx = gsap.context(() => {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            duration: 40,
            ease: "none",
            repeat: -1,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-32 pb-8 overflow-hidden z-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 min-w-[100vw] min-h-[100vh] w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
          />
          <div className="absolute inset-0 bg-black/70" />
           <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
            
        <div className="text-center px-4 max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl text-text-primary font-display italic mb-6">Let's build something significant.</h2>
            <p className="text-muted text-sm md:text-base">Whether you're looking to collaborate on a venture, discuss technology, or explore investment opportunities, my inbox is open.</p>
        </div>

        {/* CTA */}
        <a href="mailto:sarwannandhofficial672007@gmail.com" className="group relative rounded-full text-base sm:text-lg outline-none overflow-hidden mb-24 md:mb-32">
            <span className="absolute inset-0 bg-gradient-to-r from-[#89AACC] to-[#4E85BF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 animate-gradient-shift bg-[length:200%_auto]" />
            <div className="relative z-10 bg-surface group-hover:bg-bg px-8 py-4 rounded-full m-[1.5px] transition-colors border border-stroke group-hover:border-transparent">
                 Send an email
            </div>
        </a>

        {/* Footer Bar */}
        <div className="w-full max-w-[1200px] border-t border-stroke/50 pt-8 px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center gap-4">
            <div className="text-xs text-muted/60 text-center uppercase tracking-widest leading-relaxed">
                ©2026 sarwan67.com all rights reserved<br/>Sarwan Thondamalla aka Sarwannandh. v3.0
            </div>
        </div>
      </div>
    </footer>
  );
}
