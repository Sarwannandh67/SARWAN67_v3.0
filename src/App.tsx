/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { LoadingScreen } from "./components/LoadingScreen";
import { Hero } from "./components/Hero";
import { Ventures } from "./components/Ventures";
import { SoftwareEngineering } from "./components/Software";
import { SkillsStack } from "./components/SkillsStack";
import { Hardware } from "./components/Hardware";
import { Trading } from "./components/Trading";
import { About } from "./components/About";
import { SocialShowcase } from "./components/SocialShowcase";
import { TechElites } from "./components/TechElites";
import { Footer } from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="loading"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        </motion.div>
      ) : (
        <motion.main 
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-bg min-h-screen text-text-primary selection:bg-text-primary selection:text-bg"
        >
          <Hero />
          <Ventures />
          <SoftwareEngineering />
          <SkillsStack />
          <Hardware />
          <Trading />
          <About />
          <SocialShowcase />
          <TechElites />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}

