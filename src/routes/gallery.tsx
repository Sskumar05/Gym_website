import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import facility from "@/assets/facility.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside IRONFORGE" },
      { name: "description", content: "Step inside IRONFORGE — premium equipment, intense training sessions, and member transformations." },
      { property: "og:title", content: "IRONFORGE Gallery" },
      { property: "og:description", content: "Premium facility, intense training, real members." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const images = [
  { src: g1, alt: "Dumbbell training" },
  { src: facility, alt: "Cardio floor" },
  { src: g6, alt: "Pull-ups" },
  { src: g2, alt: "Treadmill cardio" },
  { src: g4, alt: "Yoga class" },
  { src: g3, alt: "Boxing ring" },
  { src: hero, alt: "Deadlift" },
  { src: g5, alt: "Kettlebells" },
];

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Inside the forge." subtitle="A look at our premium facility, training culture, and the members who define it." />

      <section className="pb-24">
        <div className="container-x">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(img.src)}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
                className="block w-full mb-5 group relative overflow-hidden rounded-2xl cursor-zoom-in break-inside-avoid"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto group-hover:scale-110 transition duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-md grid place-items-center p-6">
            <button className="absolute top-5 right-5 size-10 rounded-full glass grid place-items-center" onClick={() => setActive(null)}><X className="size-5" /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={active} alt="" className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
