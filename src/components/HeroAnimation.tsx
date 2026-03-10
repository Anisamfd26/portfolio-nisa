import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Experience", "Projects", "Achievements", "Contact"];

const HeroAnimation = () => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--structure)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--structure)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Central node */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground">
            ANISA MUFIDA
          </h1>
          <motion.div
            className="absolute -bottom-1 left-0 h-[2px] bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />
        </div>

        <motion.p
          className="mt-4 font-heading text-xs md:text-sm tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          COMPUTER SCIENCE STUDENT
        </motion.p>

        <motion.div
          className="mt-2 font-body text-sm text-structure"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Product Owner · Project Manager · Frontend Dev
        </motion.div>

        {/* Terminal cursor */}
        <motion.div
          className="mt-6 flex items-center gap-2 font-heading text-xs text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-structure">{">"}</span>
          <span>system.ready</span>
          <span className="cursor-blink text-primary">_</span>
        </motion.div>
      </motion.div>

      {/* Dataflow lines to nav items */}
      {started && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
          {navItems.map((_, i) => {
            const centerX = 50;
            const centerY = 45;
            const angle = -90 + (i * 360) / navItems.length;
            const rad = (angle * Math.PI) / 180;
            const endX = centerX + Math.cos(rad) * 35;
            const endY = centerY + Math.sin(rad) * 35;

            return (
              <motion.line
                key={i}
                x1={`${centerX}%`}
                y1={`${centerY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: "easeOut" }}
              />
            );
          })}

          {/* Node dots at endpoints */}
          {navItems.map((_, i) => {
            const centerX = 50;
            const centerY = 45;
            const angle = -90 + (i * 360) / navItems.length;
            const rad = (angle * Math.PI) / 180;
            const endX = centerX + Math.cos(rad) * 35;
            const endY = centerY + Math.sin(rad) * 35;

            return (
              <motion.circle
                key={`dot-${i}`}
                cx={`${endX}%`}
                cy={`${endY}%`}
                r="3"
                fill="hsl(var(--primary))"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              />
            );
          })}
        </svg>
      )}

      {/* Floating nav labels around the hero */}
      {started && navItems.map((item, i) => {
        const angle = -90 + (i * 360) / navItems.length;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * 42;
        const y = Math.sin(rad) * 42;

        return (
          <motion.span
            key={item}
            className="absolute font-heading text-[10px] tracking-[0.15em] text-primary/50 hidden md:block"
            style={{
              left: `calc(50% + ${x}%)`,
              top: `calc(45% + ${y}%)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 + i * 0.1 }}
          >
            {item.toUpperCase()}
          </motion.span>
        );
      })}
    </div>
  );
};

export default HeroAnimation;
