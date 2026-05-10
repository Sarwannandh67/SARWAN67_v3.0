import { motion } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  Github, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  FileText,
  Coffee,
  Globe,
  Clock,
  ExternalLink,
  MessageSquare
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram size={24} />,
    color: "#E4405F",
    handle: "@sarwannandh",
    href: "https://instagram.com/sarwannandh"
  },
  {
    name: "X (Twitter)",
    color: "#FFFFFF",
    handle: "@sarwannandh67",
    href: "https://x.com/sarwannandh67",
    customIcon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} />,
    color: "#0A66C2",
    handle: "/in/sarwannandh",
    href: "https://linkedin.com/in/sarwannandh"
  },
  {
    name: "GitHub",
    icon: <Github size={24} />,
    color: "#FFFFFF",
    handle: "sarwannandh67",
    href: "https://github.com/sarwannandh67"
  },
  {
    name: "YouTube",
    icon: <Youtube size={24} />,
    color: "#FF0000",
    handle: "@sarwannandh",
    href: "https://youtube.com/@sarwannandh"
  },
  {
    name: "Facebook",
    icon: <Facebook size={24} />,
    color: "#1877F2",
    handle: "sarwannandh",
    href: "https://facebook.com/sarwannandh"
  },
  {
    name: "Reddit",
    icon: <MessageSquare size={24} />,
    color: "#FF4500",
    handle: "u/NoSwimming4210",
    href: "https://www.reddit.com/user/NoSwimming4210/",
    customIcon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.362.776-.587 1.282-.587.937 0 1.7.761 1.7 1.698 0 .585-.3 1.102-.756 1.406.017.181.026.365.026.549 0 2.592-3.327 4.7-7.425 4.7-4.1 0-7.426-2.108-7.426-4.7 0-.175.008-.348.024-.518a1.693 1.693 0 0 1-.724-1.437c0-.937.763-1.698 1.7-1.698.514 0 .977.234 1.285.603 1.2-.843 2.842-1.396 4.653-1.48l.842-3.953a.256.256 0 0 1 .18-.198l2.946.619c.143-.454.56-.788 1.055-.788zM8.5 13.5c-.71 0-1.288.625-1.288 1.396 0 .77.578 1.396 1.288 1.396.71 0 1.288-.625 1.288-1.396 0-.771-.577-1.396-1.288-1.396zm7 0c-.711 0-1.288.625-1.288 1.396 0 .77.577 1.396 1.288 1.396.71 0 1.288-.625 1.288-1.396 0-.771-.577-1.396-1.288-1.396zm-7 5.353c-.027 0-.012.01-.01.01.21.32.95 1.09 2.51 1.09s2.3-1.09 2.51-1.09c.002 0 .017-.01-.01-.01h-5z"/>
      </svg>
    )
  },
  {
    name: "BuyMeACoffee",
    icon: <Coffee size={24} />,
    color: "#FFDD00",
    handle: "sarwannandh",
    href: "https://buymeacoffee.com/sarwannandh",
    customIcon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.216 6.415l-.132-.666c-.209-1.04-1.122-1.749-2.181-1.749H3.067C1.88 4 1 4.793 1 6.015v10.519c0 1.954 1.584 3.518 3.567 3.518h8.868c1.983 0 3.566-1.564 3.566-3.518v-1.18c2.196-.24 3.966-1.92 4.015-4.108l.209-4.832zm-3.835 11.238l-.001.519c0 1.013-.808 1.637-1.815 1.637H4.567c-1.008 0-1.816-.624-1.816-1.637V6.015c0-.1.082-.265.316-.265h14.832c.112 0 .211.074.232.181l.132.666-.209 4.832c-.015.353-.298.636-.651.651l-2.046.002-.191-1.116-.232-1.353-.191-1.116-.001-.004zm2.146-5.834h-.832l.241-5.568h.832l-.241 5.568z"/>
      </svg>
    )
  },
  {
    name: "WhatsApp",
    icon: <Phone size={24} />,
    color: "#25D366",
    handle: "+91 6305036991",
    href: "https://wa.me/916305036991",
    customIcon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    )
  },
  {
    name: "Snapchat",
    color: "#FFFC00",
    handle: "sarwan6707",
    href: "https://snapchat.com/add/sarwan6707",
    customIcon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
        <path d="M12 0c-.23 0-.44 0-.64.01-.2.01-.42.02-.64.04-.42.04-.84.1-1.25.18-.81.16-1.58.42-2.3.78C5.83 1.67 4.7 2.8 4.04 4.16c-.36.72-.62 1.49-.78 2.3-.08.41-.14.83-.18 1.25-.02.22-.03.44-.04.64-.01.2-.01.41-.01.64 0 .23 0 .44.01.64.01.2.02.42.04.64.04.42.1.84.18 1.25.16.81.42 1.58.78 2.3.1.2.21.39.33.58a.25.25 0 0 0 .41-.05c.12-.22.28-.42.48-.59.2-.17.43-.31.7-.42a2.3 2.3 0 0 1 .41-.12 3.1 3.1 0 0 1 .43-.05h.02c.11 0 .21.01.32.02.21.02.4.05.59.1.59.15 1.14.43 1.63.82.49.39.89.87 1.18 1.43.29.56.44 1.19.44 1.87s-.15 1.31-.44 1.87a3.9 3.9 0 0 1-1.18 1.43c-.49.39-1.04.67-1.63.82-.19.05-.38.08-.59.1-.11.01-.21.02-.32.02h-.02a3.1 3.1 0 0 1-.43-.05 2.3 2.3 0 0 1-.41-.12c-.27-.11-.5-.25-.7-.42-.2-.17-.36-.37-.48-.59a.25.25 0 0 0-.41-.05c-.12.19-.23.38-.33.58-.36.72-.62 1.49-.78 2.3-.08.41-.14.83-.18 1.25-.02.22-.03.44-.04.64-.01.2-.01.41-.01.64 0 .23 0 .44.01.64.01.2.02.42.04.64.04.42.1.84.18 1.25.02.1.04.21.06.31.02.1.04.21.06.31.13.6.32 1.17.56 1.7.66 1.36 1.79 2.49 3.15 3.15.53.24 1.1.43 1.7.56.1.02.21.04.31.06.1.02.21.04.31.06.2.01.41.01.64.01s.44 0 .64-.01c.2-.01.41-.02.61-.04.1-.01.21-.02.31-.04.1-.01.21-.02.31-.04.09-.01.18-.02.27-.03.88-.1 1.73-.34 2.5-.72.67-.31 1.28-.73 1.81-1.22.53-.49.97-1.06 1.29-1.69.32-.63.53-1.31.62-2.02.01-.09.02-.18.03-.27.02-.2.03-.41.04-.61.01-.2.01-.41.01-.64s0-.44-.01-.64c-.01-.2-.02-.41-.04-.61-.01-.09-.02-.18-.03-.27-.09-.71-.3-1.39-.62-2.02-.32-.63-.76-1.2-1.29-1.69a6 6 0 0 0-1.81-1.22c-.77-.38-1.62-.62-2.5-.72-.09-.01-.18-.02-.27-.03-.1-.01-.21-.02-.31-.04-.1-.01-.21-.02-.31-.04-.2-.02-.41-.03-.61-.04-.2-.01-.41-.01-.64 0 0 0 0 0 0 0s0 0 0 0z"/>
      </svg>
    )
  },
  {
    name: "ORCID",
    icon: <Globe size={24} />,
    color: "#A6CE39",
    handle: "0009-0005-8072-6622",
    href: "https://orcid.org/0009-0005-8072-6622",
    customIcon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .942.452.942.99s-.401.99-.942.99a.99.99 0 0 1-.942-.99c0-.538.401-.99.942-.99zm.501 2.528V19.03H5.926V6.906h1.944zm4.463 0c3.33 0 4.463 2.511 4.463 6.062 0 3.663-1.113 6.062-4.463 6.062H9.365V6.906h2.968zm-.017 1.701h-1.02v8.72h1.02c2.144 0 2.511-1.597 2.511-4.36 0-2.703-.35-4.36-2.511-4.36z"/>
      </svg>
    )
  },
  {
    name: "Business Email",
    icon: <Mail size={24} />,
    color: "#4285F4",
    handle: "sarwan@sarwagyna.com",
    href: "mailto:sarwan@sarwagyna.com"
  },
  {
    name: "Google (Gmail)",
    icon: <Mail size={24} />,
    color: "#EA4335",
    handle: "sarwan.biz.67@gmail.com",
    href: "mailto:sarwan.biz.67@gmail.com"
  },
  {
    name: "Resume",
    icon: <FileText size={24} />,
    color: "#FFFFFF",
    handle: "Coming Soon",
    href: "#",
    isPlaceholder: true
  }
];

export function SocialShowcase() {
  return (
    <section id="network" className="bg-bg py-24 relative overflow-hidden z-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-muted mb-4 text-center"
          >
            Digital Footprint
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display italic text-text-primary text-center mb-6"
          >
            Digital Presence.
          </motion.h2>
          <div className="w-12 h-px bg-stroke/50" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.isPlaceholder ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative flex flex-col p-4 md:p-6 bg-surface/30 border border-stroke rounded-2xl hover:bg-surface/50 transition-all duration-300 overflow-hidden ${social.isPlaceholder ? 'cursor-not-allowed grayscale opacity-60' : ''}`}
            >
              {/* Radial glow background */}
              {!social.isPlaceholder && (
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at center, ${social.color} 0%, transparent 70%)` 
                  }}
                />
              )}
              
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <div 
                   className="p-2 md:p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                   style={{ backgroundColor: `${social.color}15`, color: social.color }}
                >
                  {social.customIcon || social.icon}
                </div>
                <div className="text-[10px] text-muted/40 uppercase tracking-widest translate-y-1 hidden sm:block">
                  {social.isPlaceholder ? 'Soon' : 'Connect'} {!social.isPlaceholder && <ExternalLink size={10} className="inline ml-1" />}
                </div>
              </div>

              <div>
                <h3 className="text-sm md:text-lg font-medium text-text-primary mb-1">{social.name}</h3>
                <p className="text-[10px] md:text-xs text-muted font-mono truncate">{social.handle}</p>
              </div>

              {/* Bottom line accent */}
              <div 
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: social.color }}
              />
            </motion.a>
          ))}
        </div>

        {/* Global Network Indicator */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8 }}
           className="mt-20 flex flex-col items-center gap-4 py-8 border-t border-stroke/20"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Available for global collaboration</span>
          </div>
          <div className="flex gap-4">
             <Globe size={14} className="text-muted/40" />
             <div className="h-4 w-px bg-stroke/50" />
             <div className="text-[10px] font-mono text-muted/60">EST 2024 — PERSISTENT</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
