import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const ventures = [
  { id: 1, title: "Sarwagyna Pvt Ltd", role: "CEO & Co-Founder", status: "Active", desc: "A parent company operating across multiple domains including IT solutions, AI products, exports, and trading.", span: "md:col-span-7", href: "https://sarwagyna.com" },
  { id: 2, title: "CreatorNex LLC", role: "Co-Founder", status: "Active", desc: "A digital and social marketing agency helping creators and brands scale their digital presence.", span: "md:col-span-5", href: "https://creatornex.com" },
  { id: 3, title: "AgentZ Store", role: "Founder", status: "Closed", desc: "A marketplace for curated cross-platform workflows and automation systems.", span: "md:col-span-5" },
  { id: 4, title: "Wolvra Clothing", role: "Founder", status: "Closed", desc: "A modern fashion brand focused on identity-driven apparel.", span: "md:col-span-7" },
];

export function Ventures() {
  return (
    <section id="ventures" className="bg-bg py-16 md:py-24 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col mb-16 gap-6"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Ventures</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-text-primary tracking-tight mb-4">
              Building <span className="font-display italic font-normal">scalable businesses</span>
            </h2>
            <p className="text-muted text-sm md:text-lg">
              Across technology, marketing, and commerce.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {ventures.map((work) => {
            const CardWrapper = work.href ? "a" : "div";
            return (
              <CardWrapper 
                key={work.id} 
                href={work.href}
                target={work.href ? "_blank" : undefined}
                rel={work.href ? "noopener noreferrer" : undefined}
                className={`group relative bg-surface border border-stroke rounded-3xl flex flex-col transition-all duration-500 overflow-hidden ${work.span} ${work.href ? 'cursor-pointer' : ''}`}
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <DottedGlowBackground
                    className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                    opacity={1}
                    gap={10}
                    radius={1.6}
                    colorLightVar="--color-neutral-500"
                    glowColorLightVar="--color-neutral-600"
                    colorDarkVar="--color-neutral-500"
                    glowColorDarkVar="--color-sky-800"
                    backgroundOpacity={0}
                    speedMin={0.3}
                    speedMax={1.6}
                    speedScale={1}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full p-8 md:p-12">
                  <div className="flex justify-between items-start mb-12 lg:mb-24">
                     <motion.div 
                        animate={{ opacity: [0.6, 1, 0.6], scale: [0.98, 1.02, 0.98] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className={`inline-flex items-center justify-center min-w-[100px] px-4 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] bg-bg/50 border border-stroke rounded-full text-text-primary ${work.status === 'Closed' ? 'opacity-50 grayscale' : ''}`}
                     >
                        <span className="relative z-10">{work.status}</span>
                     </motion.div>
                     <div className="text-muted text-sm hidden sm:block">{work.role}</div>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-display italic text-text-primary mb-4 group-hover:pl-2 transition-all duration-300">{work.title}</h3>
                    <div className="flex justify-between items-end gap-4">
                      <p className="text-muted max-w-sm text-sm sm:text-base leading-relaxed">{work.desc}</p>
                      <span className="text-2xl text-muted group-hover:translate-x-2 group-hover:text-text-primary transition-all duration-300">
                        {work.href ? "↗" : "→"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
