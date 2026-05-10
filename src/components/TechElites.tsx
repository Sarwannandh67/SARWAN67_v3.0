import React from "react";
import { ArrowRight } from "lucide-react";

export const TechElites = () => {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 flex justify-center bg-[#09090b] relative overflow-hidden font-sans">
      {/* Background dashes spanning the screen, similar to Aceternity styles */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
         <div className="w-full max-w-6xl h-full border-x border-dashed border-white/10" />
      </div>
      <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-white/10 z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-full border-t border-dashed border-white/10 z-0 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10 border-y border-dashed border-white/10 bg-[#09090b]">
        <div className="flex flex-col md:flex-row relative">
          
          {/* Left Column */}
          <div className="md:w-2/3 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-dashed border-white/10 flex flex-col justify-center">
            
            <h2 className="max-w-2xl mb-8">
              <span className="block text-[32px] md:text-[40px] leading-[1.2] text-white/90 mb-4 tracking-[-0.02em]">
                A private community for serious student builders in <strong className="text-white font-semibold">technology</strong>.
              </span>
              <span className="block text-[28px] md:text-[32px] leading-[1.3] text-white/80 tracking-[-0.02em]">
                We are a collective of engineers, designers, and founders pushing each other to build <span className="text-blue-500 font-medium">better</span>, <span className="text-purple-500 font-medium">faster</span>, and smarter.
              </span>
            </h2>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://tte.sarwan67.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors text-white text-[15px] font-medium px-5 py-2.5 rounded-md flex items-center gap-2"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="md:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-6 max-w-sm">
              <p className="text-white/80 leading-relaxed text-[16px]">
                "This is the best community ever when it comes to shipping. Ten on ten recommended. I just can't wait to see what happens with this collective."
              </p>
              <div>
                <div className="text-white font-semibold text-[15px]">Michael Scarn</div>
                <div className="text-white/50 text-sm mt-1">Side projects builder</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
