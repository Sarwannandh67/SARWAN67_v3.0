import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { LogoLoop } from "@/components/ui/LogoLoop";
import { 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiDocker, 
  SiGithub, 
  SiArduino, 
  SiFramer, 
  SiTailwindcss, 
  SiVite, 
  SiExpress, 
  SiGooglecloud, 
  SiVercel,
  SiPytorch, 
  SiTensorflow, 
  SiScikitlearn, 
  SiOpencv, 
  SiStreamlit,
  SiSqlite, 
  SiNextdotjs, 
  SiRadixui, 
  SiGreensock,
  SiFlask,
  SiMongodb,
  SiRedis,
  SiOpenai
} from "react-icons/si";

const marqueeRows = [
  {
    title: "Frontend & Design",
    direction: "left",
    speed: 30,
    logos: [
      { node: <SiReact />, title: "React" },
      { node: <SiNextdotjs />, title: "Next.js" },
      { node: <SiTypescript />, title: "TypeScript" },
      { node: <SiTailwindcss />, title: "Tailwind CSS" },
      { node: <SiFramer />, title: "Framer Motion" },
      { node: <SiVite />, title: "Vite" },
      { node: <SiRadixui />, title: "Radix UI" },
      { node: <SiGreensock />, title: "GSAP" },
    ]
  },
  {
    title: "Backend & Systems",
    direction: "right",
    speed: 25,
    logos: [
      { node: <SiNodedotjs />, title: "Node.js" },
      { node: <SiExpress />, title: "Express" },
      { node: <SiPython />, title: "Python" },
      { node: <SiPostgresql />, title: "PostgreSQL" },
      { node: <SiDocker />, title: "Docker" },
      { node: <SiGithub />, title: "GitHub" },
      { node: <SiSqlite />, title: "SQLite" },
      { node: <SiGooglecloud />, title: "GCP" },
    ]
  },
  {
    title: "AI/ML & Data Science",
    direction: "left",
    speed: 35,
    logos: [
        { node: <SiOpenai />, title: "OpenAI" },
        { node: <SiPytorch />, title: "PyTorch" },
        { node: <SiTensorflow />, title: "TensorFlow" },
        { node: <SiScikitlearn />, title: "Scikit-Learn" },
        { node: <SiOpencv />, title: "OpenCV" },
        { node: <SiStreamlit />, title: "Streamlit" },
        { node: <SiFlask />, title: "Flask" },
        { node: <SiPython />, title: "Scientific Python" },
    ]
  }
];

const skillsData = [
  { cat: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C", "SQL"] },
  { cat: "Frontend", items: ["React", "Vite", "Tailwind CSS", "shadcn/ui"] },
  { cat: "Backend", items: ["Node.js", "Express", "REST APIs", "Google App Scripts"] },
  { cat: "AI/ML & DS", items: ["GenAI", "Gemini API", "Agentic AI", "RAG", "NLP", "Isolation Forest", "Prophet", "LSTM", "scikit-learn", "OpenCV", "Streamlit", "Agent Orchestration"] },
  { cat: "Databases", items: ["PostgreSQL", "SQLite", "MySQL", "Vector DBs"] },
  { cat: "Cloud & DevOps", items: ["Docker", "GitHub Actions", "Vercel", "Google Cloud"] },
  { cat: "Hardware & IoT", items: ["GSM Systems", "RFID", "Embedded C", "Sensors", "Arduino"] },
  { cat: "Capital & Trading", items: ["Technical Analysis", "Risk Management", "Capital Allocation", "Human Psychology"] },
  { cat: "Business & Strategy", items: ["Venture Building", "Product Scaling", "Business Modeling", "Systems Thinking"] },
  { cat: "Experience & Motion", items: ["Framer Motion", "Lenis", "GSAP", "Smooth Scrolling"] }
];

export function SkillsStack() {
  return (
    <section id="skills" className="bg-surface/50 py-16 md:py-24 relative z-20 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col mb-16 gap-4"
        >
          <div className="w-8 h-px bg-stroke mb-2" />
          <h2 className="text-3xl md:text-5xl text-text-primary tracking-tight">
             Skills & <span className="font-display italic font-normal">Stack</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-md">
             Technologies and tools I use to design, build, and ship systems.
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <div className="flex flex-col gap-12 mb-24">
          {marqueeRows.map((row, idx) => (
            <div key={idx} className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted ml-1">{row.title}</span>
              <div className="py-6 border-y border-stroke/20 bg-surface/10 rounded-2xl overflow-hidden">
                <LogoLoop
                  logos={row.logos}
                  speed={row.speed}
                  direction={row.direction as any}
                  logoHeight={40}
                  gap={80}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="hsl(0, 0%, 4%)"
                  className="bg-transparent"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
            {skillsData.map((section) => (
                <div key={section.cat} className="group relative bg-surface/30 border border-stroke p-1 rounded-2xl transition-colors">
                    <GlowingEffect
                      blur={0}
                      borderWidth={3}
                      spread={80}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />
                    <div className="relative z-10 bg-bg/80 group-hover:bg-bg transition-colors p-5 rounded-[12px] h-full">
                        <h3 className="text-sm uppercase tracking-[0.2em] text-muted mb-4 pb-2 border-b border-stroke/50">{section.cat}</h3>
                        <div className="flex flex-wrap gap-2">
                            {section.items.map(item => (
                                <span key={item} className="text-sm bg-bg text-text-primary border border-stroke px-3 py-1.5 rounded-md hover:border-text-primary/30 transition-colors">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
