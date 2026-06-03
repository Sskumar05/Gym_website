import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-36 pb-20 noise-bg overflow-hidden">
      <div className="container-x text-center max-w-3xl">
        {eyebrow && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-primary mb-6">
            {eyebrow}
          </motion.div>
        )}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black">
          {title.split(" ").map((w, i) => i === title.split(" ").length - 1
            ? <span key={i} className="text-gradient">{w}</span>
            : <span key={i}>{w} </span>)}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground">{subtitle}</motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
