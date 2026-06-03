import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";
import trainer4 from "@/assets/trainer4.jpg";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Elite Trainers — Claw Fitness Coaches" },
      { name: "description", content: "Meet the hand-picked, internationally certified Claw Fitness coaches behind thousands of transformations." },
      { property: "og:title", content: "Claw Fitness Trainers" },
      { property: "og:description", content: "Elite coaches. Real expertise. Lifetime results." },
      { property: "og:url", content: "/trainers" },
    ],
    links: [{ rel: "canonical", href: "/trainers" }],
  }),
  component: TrainersPage,
});

const team = [
  { img: trainer1, name: "Marcus Reid", role: "Head Strength Coach", spec: ["Powerlifting", "Hypertrophy", "Programming"], cert: "NSCA-CSCS · USAPL", exp: "12+ Years" },
  { img: trainer2, name: "Elena Cross", role: "Performance Coach", spec: ["HIIT", "Conditioning", "Mobility"], cert: "NASM-CPT · Precision Nutrition", exp: "9+ Years" },
  { img: trainer3, name: "Diego Vega", role: "CrossFit Specialist", spec: ["Olympic Lifts", "Functional", "WODs"], cert: "CrossFit L3 · USAW", exp: "10+ Years" },
  { img: trainer4, name: "Maya Ortiz", role: "Mobility & Yoga Lead", spec: ["Yoga", "Recovery", "Flexibility"], cert: "RYT-500 · FRC", exp: "8+ Years" },
];

function TrainersPage() {
  return (
    <>
      <PageHero eyebrow="The Team" title="The coaches behind every transformation." subtitle="Hand-picked. Internationally certified. Obsessed with your progress." />

      <section className="section-padding">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2">
            {team.map((t, i) => (
              <div key={t.name} data-aos="fade-up" data-aos-delay={(i % 2) * 100}
                className="group glass rounded-3xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden">
                  <img src={t.img} alt={t.name} className="size-full object-cover aspect-[3/4] md:aspect-auto group-hover:scale-105 transition duration-500" loading="lazy" width={800} height={1024} />
                </div>
                <div className="p-7 md:w-3/5">
                  <div className="text-xs text-primary uppercase tracking-wider">{t.exp}</div>
                  <h3 className="text-2xl font-bold mt-1">{t.name}</h3>
                  <p className="text-sm text-muted-foreground normal-case">{t.role}</p>
                  <div className="mt-5">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Specializations</div>
                    <div className="flex flex-wrap gap-2">
                      {t.spec.map((s) => <span key={s} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary normal-case">{s}</span>)}
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-muted-foreground normal-case">
                    <span className="text-foreground/80 font-semibold">Certifications: </span>{t.cert}
                  </div>
                  <div className="mt-6 flex gap-3">
                    {[Instagram, Twitter, Linkedin].map((I, j) => (
                      <a key={j} href="#" className="size-9 rounded-full glass grid place-items-center hover:text-primary hover:border-primary transition"><I className="size-4" /></a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
