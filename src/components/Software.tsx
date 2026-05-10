import { motion } from "framer-motion";
import { 
    ArrowRight, 
    Bot, 
    BarChart3, 
    Network, 
    Headset, 
    Zap, 
    Home, 
    HeartPulse 
} from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

import GradualBlur from "@/components/ui/GradualBlur";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

const softwareList = [
  { id: 1, title: "FinTech Agent Bot", subtitle: "Enterprise Financial AI Agent", icon: <Bot className="text-sky-400" size={32} />, tech: ["Python", "Google ADK", "Gemini API"], problem: "Static LLMs hallucinate on real-time financial data and cannot execute secure banking transactions.", build: "Engineered an agentic workflow using Google ADK to route queries. The agent intelligently selects tools based on user intent.", impact: "Enabled secure, real-time financial data processing and transaction execution without hallucinations." },
  { id: 2, title: "AI Expense Intelligence", subtitle: "End-to-end AI system", icon: <BarChart3 className="text-emerald-400" size={32} />, tech: ["AI", "NLP", "Machine Learning", "Streamlit"], problem: "Traditional expense trackers lack predictive insights and fail to detect anomalous spending automatically.", build: "Integrated NLP, Isolation Forest, and Prophet/LSTM models, deployed via a Streamlit dashboard.", impact: "Delivered explainable AI insights for proactive financial management." },
  { id: 3, title: "Multi-Agent Orchestration", subtitle: "Complex AI architecture", icon: <Network className="text-purple-400" size={32} />, tech: ["Agentic AI", "LLMs", "Orchestration"], problem: "Single LLMs struggle with complex, multi-step reasoning and execution tasks reliably.", build: "Engineered an orchestration layer that delegates sub-tasks to specialized AI agents.", impact: "Enabled autonomous, error-resistant execution of complex workflows." },
  { id: 4, title: "Enterprise AI Support Systems", subtitle: "Suite of AI agents", icon: <Headset className="text-orange-400" size={32} />, tech: ["RAG", "Voice AI", "Customer Success"], problem: "Customer support and reception are bottlenecked by human availability and high operational costs.", build: "Developed a voice-native AI calling agent and a context-aware RAG chatbot for instant resolution.", impact: "Automated tier-1 support and reception, reducing response latency to near-zero." },
  { id: 5, title: "Autonomous Workflow Agents", subtitle: "Designed for daily productivity", icon: <Zap className="text-yellow-400" size={32} />, tech: ["Automation", "API Integration"], problem: "Daily communication workflows like email sorting and messaging are repetitive and time-consuming.", build: "Built AI agents that autonomously categorize Gmails and provide on-the-go assistance via WhatsApp.", impact: "Reclaimed hours of weekly productivity through intelligent communication routing." },
  { id: 6, title: "RoomiFi AI", subtitle: "Chore management and expense tracking", icon: <Home className="text-pink-400" size={32} />, tech: ["AI", "Full Stack"], problem: "Roommates struggle with dividing chores and tracking shared expenses fairly.", build: "Built an AI-driven platform that automates task assignment and expense splitting.", impact: "Streamlined living arrangements for students and young professionals." },
  { id: 7, title: "MedConnect", subtitle: "Online medicine donation platform", icon: <HeartPulse className="text-red-400" size={32} />, tech: ["Java", "SQL"], problem: "Unused medicines go to waste while many cannot afford basic healthcare.", build: "Developed a secure platform connecting donors with NGOs and verified recipients.", impact: "Facilitated the redistribution of essential medicines to those in need." }
];

export function SoftwareEngineering() {
  return (
    <section id="software" className="bg-bg py-16 md:py-24 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Software Engineering</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-text-primary tracking-tight mb-4">
              Building <span className="font-display italic font-normal">digital products</span>
            </h2>
            <p className="text-muted text-sm md:text-lg">
              Solving real-world problems through clean code and intuitive design.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <ScrollStack useWindowScroll={true}>
            {softwareList.map((item) => (
              <ScrollStackItem key={item.id}>
                 <CardSpotlight 
                   className="flex flex-col justify-between overflow-hidden rounded-[32px] border border-stroke bg-surface/30 p-2 h-full w-full"
                   radius={300}
                 >
                    <div className="relative flex-1 flex flex-col justify-between z-10 w-full overflow-hidden rounded-[24px] bg-bg/80 p-6 md:p-8">
                        <div>
                            <div className="flex flex-col md:flex-row justify-between mb-8 pb-8 border-b border-stroke/50 gap-6">
                                <div className="max-w-xl flex gap-6 items-start">
                                    <div className="w-16 h-16 rounded-2xl bg-stroke/10 flex items-center justify-center shrink-0 border border-stroke/30 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl text-text-primary font-display italic mb-2">{item.title}</h3>
                                        <p className="text-muted">{item.subtitle}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 items-start justify-start md:justify-end">
                                   {item.tech.map(t => (
                                       <span key={t} className="text-xs bg-stroke/30 text-muted px-3 py-1 rounded-full">{t}</span>
                                   ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-8 w-full max-w-full">
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-text-primary opacity-50 mb-2">The Problem</span>
                                    <p className="text-muted leading-relaxed">{item.problem}</p>
                                </div>
                                <div>
                                     <span className="block text-xs uppercase tracking-widest text-text-primary opacity-50 mb-2">The Build</span>
                                    <p className="text-muted leading-relaxed">{item.build}</p>
                                </div>
                                <div>
                                     <span className="block text-xs uppercase tracking-widest text-text-primary opacity-50 mb-2">The Impact</span>
                                    <p className="text-muted leading-relaxed">{item.impact}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-stroke/50 flex justify-end mt-auto w-full">
                            <button className="group/btn inline-flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full bg-stroke/20 border border-stroke/50 text-text-primary hover:bg-text-primary hover:bg-opacity-10 transition-colors duration-300">
                                View Project
                                <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                 </CardSpotlight>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
        <GradualBlur
          target="parent"
          position="bottom"
          height="12rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
    </section>
  );
}
