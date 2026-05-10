import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { EvervaultCard } from "@/components/ui/evervault-card";

const hardwareList = [
    { title: "Smart Water Cooler", desc: "Science Expo Project" },
    { title: "Smart Dustbin (GSM)", desc: "Automated waste management" },
    { title: "Water Tank Alarm", desc: "GSM-based capacity monitoring" },
    { title: "Smart Stick", desc: "Sensor-based aid for blind individuals" },
    { title: "Lost & Found System", desc: "GSM & RFID notification system" },
    { title: "RFID Attendance", desc: "Integrated with Google App Scripts" },
];

export function Hardware() {
  return (
    <section id="hardware" className="bg-bg py-16 md:py-24 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col mb-16 gap-4 text-center items-center justify-center"
        >
          <div className="w-8 h-px bg-stroke mb-2" />
          <h2 className="text-3xl md:text-6xl text-text-primary tracking-tight">
             Hardware <span className="font-display italic font-normal">Systems</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg">
             Bridging the physical and digital worlds through embedded systems and IoT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {hardwareList.map((item, idx) => (
                <div key={idx} className="relative group bg-surface/30 border border-stroke rounded-2xl flex flex-col justify-between p-1 cursor-default min-h-[160px]">
                    <GlowingEffect
                      blur={0}
                      borderWidth={3}
                      spread={80}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />

                    <div className="p-6 relative z-10 bg-bg/80 group-hover:bg-bg transition-colors rounded-[12px] text-center flex-1 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-display italic text-text-primary mb-1">{item.title}</h3>
                        <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
