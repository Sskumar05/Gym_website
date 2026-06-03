import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(scrolled);
      setShow(h.scrollTop > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-[3px] z-[60] bg-transparent">
        <div className="h-full bg-gradient-to-r from-primary to-primary-glow transition-[width]" style={{ width: `${progress}%` }} />
      </div>

      <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
        <a href="https://wa.me/15550102030" target="_blank" rel="noreferrer"
          className="size-12 rounded-full grid place-items-center bg-[#25D366] text-white shadow-lg hover:scale-110 transition" aria-label="WhatsApp">
          <MessageCircle className="size-5" />
        </a>
        <a href="tel:+15550102030"
          className="size-12 rounded-full grid place-items-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-110 transition" aria-label="Call">
          <Phone className="size-5" />
        </a>
        <AnimatePresence>
          {show && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="size-12 rounded-full grid place-items-center glass hover:text-primary hover:border-primary"
              aria-label="Back to top"
            >
              <ArrowUp className="size-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
