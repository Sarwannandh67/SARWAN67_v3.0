import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Update active nav based on scroll position
      const sections = ["ventures", "software", "skills", "hardware", "trading", "about"];
      let current = "Home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          current = section.charAt(0).toUpperCase() + section.slice(1);
        }
      }
      if (window.scrollY < 300) current = "Home";
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string, name: string) => {
    setActive(name);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "ventures", name: "Ventures" },
    { id: "software", name: "Software" },
    { id: "skills", name: "Skills" },
    { id: "hardware", name: "Hardware" },
    { id: "trading", name: "Trading" },
    { id: "about", name: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={cn(
          "inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-all duration-300",
          scrolled && "shadow-md shadow-black/10"
        )}
      >
        <button onClick={() => scrollTo("home", "Home")} className="w-10 h-10 rounded-full gradient-border-ring flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform shrink-0">
          <div className="w-full h-full bg-bg rounded-full flex items-center justify-center relative z-10 scale-[0.95]">
            <span className="font-display italic text-sm text-text-primary transition-transform">S</span>
          </div>
        </button>

        <div className="w-px h-5 bg-stroke mx-2 hidden lg:block shrink-0" />

        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id, item.name)}
              className={cn(
                "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors",
                active === item.name
                  ? "text-text-primary bg-stroke/50"
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-2 hidden md:block shrink-0" />

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-stroke/30 text-text-primary transition-colors hover:bg-stroke/50"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button onClick={() => scrollTo("contact", "Contact")} className="relative group text-xs sm:text-sm rounded-full ml-auto md:ml-0">
            <span className="absolute inset-[-2px] bg-gradient-to-r from-[#89AACC] to-[#4E85BF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[length:200%_auto] animate-gradient-shift" />
            <div className="relative z-10 flex items-center gap-1 bg-surface group-hover:bg-transparent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full h-full">
              <span className="text-text-primary whitespace-nowrap">Contact</span>
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-text-primary shrink-0" />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 bg-surface/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:hidden shadow-2xl z-40"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id, item.name)}
                  className={cn(
                    "text-lg text-left px-4 py-3 rounded-2xl transition-colors",
                    active === item.name
                      ? "bg-stroke/50 text-text-primary font-medium"
                      : "text-muted hover:text-text-primary hover:bg-stroke/30"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
