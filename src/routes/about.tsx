import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import facility from "@/assets/facility.jpg";
import { Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Claw Fitness — Our Story, Mission & Values" },
      { name: "description", content: "Inside Claw Fitness: a 15-year journey of building elite fitness experiences, premium facilities and a community that forges champions." },
      { property: "og:title", content: "About Claw Fitness" },
      { property: "og:description", content: "Our mission, vision and the philosophy behind a world-class gym brand." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Mission", desc: "Make elite-level fitness coaching accessible to every committed athlete." },
  { icon: Eye, title: "Vision", desc: "Become the most trusted premium fitness brand in the world." },
  { icon: Heart, title: "Values", desc: "Integrity, intensity, intelligence — in every rep and every relationship." },
  { icon: Award, title: "Standard", desc: "Uncompromising quality from coaching to equipment to environment." },
];

const timeline = [
  { year: "2010", title: "First Doors Open", desc: "A 2,000 sq.ft. strength garage with one coach and a vision." },
  { year: "2014", title: "Flagship Launch", desc: "Expanded to a 30,000 sq.ft. premium facility downtown." },
  { year: "2018", title: "Coach Academy", desc: "Launched our internal certification program for elite trainers." },
  { year: "2022", title: "Nutrition Lab", desc: "Integrated dietitian-led nutrition coaching for every member." },
  { year: "2026", title: "Global Brand", desc: "Crossed 12,500 active members and 8,700 documented transformations." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="Built on iron. Driven by ambition." subtitle="What started as a single squat rack in a garage is now the standard for premium strength training." />

      <section className="section-padding">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <img src={facility} alt="Facility" className="rounded-3xl" loading="lazy" width={1600} height={1000} />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-black">A standard, not a service.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed normal-case">
              We don't sell memberships. We sell discipline, results, and a place where serious people train next to other serious people. Every coach is hand-picked. Every machine is commercial-grade. Every program is engineered around science, not trends.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed normal-case">
              Whether you're chasing your first pull-up or your first 500 lb deadlift, Claw Fitness meets you where you are — and refuses to let you stay there.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">Mission. Vision. Values.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-14">
            {values.map((v, i) => (
              <div key={v.title} data-aos="fade-up" data-aos-delay={i * 80} className="glass rounded-2xl p-8">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-5">
                  <v.icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 normal-case">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-x max-w-4xl">
          <div className="text-center" data-aos="fade-up">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">The Journey</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">15 years of forging excellence.</h2>
          </div>
          <div className="relative mt-16 pl-8 md:pl-0">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((t, i) => (
              <div key={t.year} data-aos="fade-up" className={`relative grid md:grid-cols-2 gap-4 md:gap-12 mb-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className={`md:text-right ${i % 2 === 1 ? "md:text-left" : ""}`}>
                  <div className="text-4xl font-black text-gradient">{t.year}</div>
                  <h3 className="text-xl font-bold mt-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 normal-case">{t.desc}</p>
                </div>
                <div />
                <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 size-6 rounded-full bg-gradient-to-br from-primary to-primary-glow border-4 border-background" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/membership" className="btn-primary">Join The Standard</Link>
          </div>
        </div>
      </section>
    </>
  );
}
