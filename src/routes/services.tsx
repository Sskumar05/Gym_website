import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Flame, TrendingDown, TrendingUp, Dumbbell, Activity, Heart, User, Apple, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Programs — Claw Fitness" },
      { name: "description", content: "Strength training, fat loss, hypertrophy, personal coaching, nutrition and group fitness — every program engineered for measurable results." },
      { property: "og:title", content: "Claw Fitness Services" },
      { property: "og:description", content: "Premium training programs for every goal." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: TrendingDown, title: "Weight Loss Programs", desc: "Sustainable fat-loss systems combining smart training and personalized nutrition." },
  { icon: TrendingUp, title: "Weight Gain Programs", desc: "Hypertrophy-focused programming and caloric strategies for serious lean mass." },
  { icon: Dumbbell, title: "Strength Training", desc: "Powerlifting and barbell mastery built on proven progressive overload models." },
  { icon: Activity, title: "Functional Training", desc: "Move better, lift heavier, live longer — full-body athletic conditioning." },
  { icon: Heart, title: "Cardio Programs", desc: "HIIT, steady-state and zone training to elevate endurance and recovery." },
  { icon: User, title: "Personal Training", desc: "1-on-1 coaching with elite trainers — fully programmed, fully accountable." },
  { icon: Apple, title: "Nutrition Coaching", desc: "Dietitian-built meal plans matched to your goals, biology and lifestyle." },
  { icon: Users, title: "Group Classes", desc: "High-energy group sessions: spin, HIIT, mobility, yoga and combat-fit." },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What We Do" title="Programs engineered for results." subtitle="Every service at Claw Fitness is built on the same standard — measurable progress, no fluff." />

      <section className="section-padding">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.title} data-aos="fade-up" data-aos-delay={(i % 4) * 80}
                className="group relative overflow-hidden glass rounded-2xl p-7 hover:border-primary/60 hover:-translate-y-1 transition-all">
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-5 group-hover:rotate-6 transition">
                  <s.icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 normal-case leading-relaxed">{s.desc}</p>
                <Flame className="size-4 text-primary mt-5 opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center" data-aos="zoom-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black">Not sure where to start?</h3>
            <p className="mt-3 text-muted-foreground normal-case">Book a free consultation — we'll match you to the right program in 15 minutes.</p>
            <Link to="/contact" className="btn-primary mt-6">Book Consultation <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
