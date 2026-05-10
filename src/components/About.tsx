import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function About() {
  return (
    <section id="about" className="bg-bg py-16 md:py-24 relative z-20 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-5xl text-text-primary tracking-tight mb-8">
                    About <span className="font-display italic">Me</span>
                </h2>
                <div className="space-y-6 text-muted text-base md:text-lg leading-relaxed text-left sm:text-justify">
                    <p>
                        I am a builder at the intersection of technology, business, and human behavior. Currently pursuing my B.Tech in Computer Science Engineering (AI & ML) at SRM Institute of Science and Technology, I spend my time engineering software, developing hardware systems, and scaling ventures.
                    </p>
                    <p>
                        My journey started with a curiosity for how things work, which quickly evolved into a passion for building systems that solve real problems. From developing online medicine donation platforms to creating AI-based chore management systems, I focus on impact and efficiency.
                    </p>
                    <p className="text-[16px] sm:text-[18px]">
                        Beyond code, I am a disciplined trader and venture builder. I believe in the power of compound interest—not just in capital, but in knowledge, relationships, and technology. My vision is to build a portfolio of companies that push the boundaries of what's possible.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-12"
            >
                <div className="group relative bg-surface/30 border border-stroke p-1 rounded-3xl h-fit transition-colors">
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
                         <h2 className="text-2xl md:text-4xl text-text-primary tracking-tight mb-6">
                            Milestones
                         </h2>
                         <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-muted"><span className="w-2 h-2 rounded-full bg-text-primary/50 shrink-0" /> Runner-up in 3 Hackathons</li>
                            <li className="flex items-center gap-4 text-muted"><span className="w-2 h-2 rounded-full bg-text-primary/50 shrink-0" /> Won 3 Science Expos</li>
                            <li className="flex items-center gap-4 text-muted"><span className="w-2 h-2 rounded-full bg-text-primary/50 shrink-0" /> Self-funded B.Tech Tuition</li>
                            <li className="flex items-center gap-4 text-muted"><span className="w-2 h-2 rounded-full bg-text-primary/50 shrink-0" /> 3rd Place in Science Expo</li>
                         </ul>
                    </div>
                </div>
            </motion.div>

          </div>
      </div>
    </section>
  );
}
