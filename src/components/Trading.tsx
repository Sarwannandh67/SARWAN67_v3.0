import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function Trading() {
  return (
    <section id="trading" className="bg-bg py-16 md:py-24 relative z-20 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-px bg-stroke" />
                    <span className="text-xs text-muted uppercase tracking-[0.3em]">Capital Allocation & Risk Management</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-[52px] text-text-primary tracking-tight mb-8">
                    Trading is the ultimate <span className="font-display italic font-normal text-muted">exercise in human psychology</span> and risk management.
                </h2>
                <div className="text-base md:text-lg text-text-primary/70 space-y-6 max-w-2xl text-justify">
                    <p>
                        By applying systematic thinking and disciplined execution, I turned <strong>₹13,00,000 into ₹18,75,000 within 11 months</strong>, funding my own B.Tech tuition.
                    </p>
                    <p>
                        I approach markets not as a gambler, but as a risk manager. Understanding global geopolitics and human behavior gives me an edge in identifying market inefficiencies.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 flex flex-col gap-6 w-full"
            >
                <div className="group relative bg-surface/50 border border-stroke p-1 rounded-3xl transition-colors">
                    <GlowingEffect
                      blur={0}
                      borderWidth={3}
                      spread={80}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />
                    <div className="relative z-10 p-7 bg-bg/80 group-hover:bg-bg transition-colors rounded-[20px] h-full">
                        <h3 className="text-xl text-text-primary font-medium mb-3">Consistent Profitability</h3>
                        <p className="text-muted">Maintained a steady growth curve through disciplined position sizing.</p>
                    </div>
                </div>
                <div className="group relative bg-surface/50 border border-stroke p-1 rounded-3xl transition-colors">
                    <GlowingEffect
                      blur={0}
                      borderWidth={3}
                      spread={80}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />
                    <div className="relative z-10 p-7 bg-bg/80 group-hover:bg-bg transition-colors rounded-[20px] h-full">
                        <h3 className="text-xl text-text-primary font-medium mb-3">Risk-First Approach</h3>
                        <p className="text-muted">Prioritizing capital preservation over aggressive speculation.</p>
                    </div>
                </div>
            </motion.div>
            
         </div>
      </div>
    </section>
  );
}
