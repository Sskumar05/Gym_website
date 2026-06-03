import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Ruler, Weight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/bmi")({
  head: () => ({
    meta: [
      { title: "BMI Calculator — Claw Fitness" },
      { name: "description", content: "Calculate your Body Mass Index instantly with our interactive BMI calculator. Get personalized fitness recommendations." },
      { property: "og:title", content: "BMI Calculator" },
      { property: "og:description", content: "Find your BMI and get personalized fitness tips." },
      { property: "og:url", content: "/bmi" },
    ],
    links: [{ rel: "canonical", href: "/bmi" }],
  }),
  component: BmiPage,
});

function categorize(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "oklch(0.72 0.20 230)", tips: ["Increase caloric intake with nutrient-dense foods", "Prioritize strength training to build lean muscle", "Consider our Weight Gain Program with coach support"] };
  if (bmi < 25) return { label: "Normal Weight", color: "oklch(0.78 0.18 150)", tips: ["You're in a healthy range — focus on performance goals", "Mix strength training with cardio for longevity", "Track macros to stay consistent year-round"] };
  if (bmi < 30) return { label: "Overweight", color: "oklch(0.78 0.18 80)", tips: ["Combine strength training with structured cardio", "Aim for a modest caloric deficit (200-400 kcal)", "Join our Weight Loss Program for accountability"] };
  return { label: "Obese", color: "oklch(0.68 0.20 25)", tips: ["Consult a medical professional before starting", "Start with low-impact movement and walking", "Our coaches can build a safe, progressive plan"] };
}

function BmiPage() {
  const [heightUnit, setHeightUnit] = useState<"cm" | "ft">("cm");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [cm, setCm] = useState(175);
  const [ft, setFt] = useState(5);
  const [inch, setInch] = useState(9);
  const [kg, setKg] = useState(72);
  const [lbs, setLbs] = useState(160);

  const bmi = useMemo(() => {
    const meters = heightUnit === "cm" ? cm / 100 : ((ft * 12 + inch) * 2.54) / 100;
    const kilos = weightUnit === "kg" ? kg : lbs * 0.4536;
    if (!meters || !kilos) return 0;
    return Math.round((kilos / (meters * meters)) * 10) / 10;
  }, [heightUnit, weightUnit, cm, ft, inch, kg, lbs]);

  const cat = categorize(bmi || 22);
  const pct = Math.min(Math.max((bmi / 40) * 100, 5), 100);
  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <>
      <PageHero eyebrow="Tools" title="Calculate your BMI." subtitle="Get an instant BMI reading and tailored next steps." />

      <section className="pb-24">
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="glass rounded-3xl p-8" data-aos="fade-right">
              {/* Height */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold uppercase tracking-wider flex items-center gap-2"><Ruler className="size-4 text-primary" /> Height</label>
                  <div className="flex glass rounded-full p-1 text-xs">
                    {(["cm", "ft"] as const).map(u => (
                      <button key={u} onClick={() => setHeightUnit(u)} className={`px-3 py-1 rounded-full uppercase font-bold ${heightUnit === u ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{u}</button>
                    ))}
                  </div>
                </div>
                {heightUnit === "cm" ? (
                  <input type="number" value={cm} onChange={e => setCm(+e.target.value)} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-lg font-bold focus:border-primary outline-none" />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input type="number" value={ft} onChange={e => setFt(+e.target.value)} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-lg font-bold focus:border-primary outline-none" />
                      <div className="text-xs text-muted-foreground mt-1 normal-case">Feet</div>
                    </div>
                    <div>
                      <input type="number" value={inch} onChange={e => setInch(+e.target.value)} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-lg font-bold focus:border-primary outline-none" />
                      <div className="text-xs text-muted-foreground mt-1 normal-case">Inches</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Weight */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold uppercase tracking-wider flex items-center gap-2"><Weight className="size-4 text-primary" /> Weight</label>
                  <div className="flex glass rounded-full p-1 text-xs">
                    {(["kg", "lbs"] as const).map(u => (
                      <button key={u} onClick={() => setWeightUnit(u)} className={`px-3 py-1 rounded-full uppercase font-bold ${weightUnit === u ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{u}</button>
                    ))}
                  </div>
                </div>
                {weightUnit === "kg" ? (
                  <input type="number" value={kg} onChange={e => setKg(+e.target.value)} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-lg font-bold focus:border-primary outline-none" />
                ) : (
                  <input type="number" value={lbs} onChange={e => setLbs(+e.target.value)} className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-lg font-bold focus:border-primary outline-none" />
                )}
              </div>
            </div>

            {/* Result */}
            <motion.div key={bmi} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-8 text-center flex flex-col items-center justify-center" data-aos="fade-left">
              <div className="relative size-48">
                <svg viewBox="0 0 160 160" className="size-full -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="oklch(1 0 0 / 0.08)" strokeWidth="10" fill="none" />
                  <motion.circle cx="80" cy="80" r="70" stroke={cat.color} strokeWidth="10" fill="none" strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={false}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <div>
                    <div className="text-5xl font-black">{bmi || "--"}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">BMI</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 inline-block px-5 py-2 rounded-full font-bold uppercase tracking-wider text-sm" style={{ background: `color-mix(in oklab, ${cat.color} 20%, transparent)`, color: cat.color, border: `1px solid ${cat.color}` }}>
                {cat.label}
              </div>
              <div className="mt-6 text-left w-full">
                <div className="text-xs uppercase tracking-wider text-primary font-bold flex items-center gap-2"><Sparkles className="size-4" /> Fitness Tips</div>
                <ul className="mt-3 space-y-2">
                  {cat.tips.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground normal-case">• {t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Range bar */}
          <div className="mt-12 glass rounded-2xl p-6" data-aos="fade-up">
            <div className="flex h-3 rounded-full overflow-hidden">
              <div className="flex-1 bg-[oklch(0.72_0.20_230)]" title="Underweight" />
              <div className="flex-[1.5] bg-[oklch(0.78_0.18_150)]" title="Normal" />
              <div className="flex-1 bg-[oklch(0.78_0.18_80)]" title="Overweight" />
              <div className="flex-1 bg-[oklch(0.68_0.20_25)]" title="Obese" />
            </div>
            <div className="grid grid-cols-4 mt-3 text-xs text-muted-foreground normal-case">
              <div>Under &lt; 18.5</div>
              <div>Normal 18.5–24.9</div>
              <div>Over 25–29.9</div>
              <div className="text-right">Obese 30+</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
