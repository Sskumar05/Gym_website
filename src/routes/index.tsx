import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Dumbbell, Apple, Users, Trophy, HeartPulse, Star, Quote, ChevronRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import facility from "@/assets/facility.jpg";
import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";
import trainer4 from "@/assets/trainer4.jpg";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLAW FITNESS — Forge Your Strongest Self" },
      { name: "description", content: "Premium fitness brand with elite trainers, world-class equipment and personalized programs for strength, weight loss and transformation." },
      { property: "og:title", content: "CLAW FITNESS — Forge Your Strongest Self" },
      { property: "og:description", content: "Join the most premium fitness experience. Elite coaches, smart programs, real results." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Trophy, title: "Expert Trainers", desc: "Internationally certified coaches with decades of combined elite experience." },
  { icon: Dumbbell, title: "Premium Equipment", desc: "Commercial-grade machines, free weights and recovery tools from top brands." },
  { icon: HeartPulse, title: "Personalized Plans", desc: "Custom programming engineered around your body, goals and lifestyle." },
  { icon: Apple, title: "Nutrition Support", desc: "Macro-tailored meal plans and 1-on-1 nutrition coaching included." },
  { icon: Users, title: "Driven Community", desc: "Train with motivated members who push you to never settle for average." },
  { icon: Star, title: "Real Results", desc: "Proven systems with thousands of transformations and lifetime members." },
];

const trainers = [
  { img: trainer1, name: "Marcus Reid", role: "Head Strength Coach", spec: "Powerlifting · Hypertrophy", exp: "12+ Years" },
  { img: trainer2, name: "Elena Cross", role: "Performance Coach", spec: "HIIT · Conditioning", exp: "9+ Years" },
  { img: trainer3, name: "Diego Vega", role: "CrossFit Specialist", spec: "Functional · Olympic Lifts", exp: "10+ Years" },
  { img: trainer4, name: "Maya Ortiz", role: "Mobility & Yoga Lead", spec: "Recovery · Flexibility", exp: "8+ Years" },
];

const plans = [
  { name: "Monthly", price: 49, period: "/mo", features: ["Full Gym Access", "Locker Room", "Group Classes"] },
  { name: "Quarterly", price: 129, period: "/3mo", features: ["All Monthly", "1 PT Session/mo", "Nutrition Guide"], popular: true },
  { name: "Annual", price: 449, period: "/yr", features: ["All Quarterly", "4 PT Sessions", "Body Composition"] },
];

const testimonials = [
  { name: "Sarah K.", text: "Lost 28 lbs in 4 months. The coaching is unmatched — they actually care about your progress.", rating: 5 },
  { name: "James L.", text: "Added 80 lbs to my deadlift in one year. Claw Fitness is the real deal.", rating: 5 },
  { name: "Priya M.", text: "Best fitness investment I've made. The atmosphere alone keeps me showing up.", rating: 5 },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={hero} alt="Athlete training" className="absolute inset-0 size-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 noise-bg opacity-60" />

        <div className="container-x relative z-10 pt-24">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-primary mb-6">
            #1 Premium Fitness Brand
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] max-w-5xl">
            FORGE YOUR <span className="text-gradient">STRONGEST</span> SELF.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Elite coaches. Uncompromising equipment. Programs engineered for real, measurable transformation — not gimmicks.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4">
            <Link to="/membership" className="btn-primary">Join Now <ArrowRight className="size-4" /></Link>
            <Link to="/contact" className="btn-outline"><Phone className="size-4" /> Contact Us</Link>
          </motion.div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { n: 12500, s: "+", l: "Active Members" },
              { n: 45, s: "+", l: "Expert Trainers" },
              { n: 8700, s: "+", l: "Success Stories" },
              { n: 15, s: "+", l: "Years Experience" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6">
                <div className="text-4xl font-black text-gradient"><Counter to={s.n} suffix={s.s} /></div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding noise-bg">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Why Claw Fitness</p>
            <h2 className="text-4xl md:text-6xl font-black mt-3">Built for those who refuse to settle.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {features.map((f, i) => (
              <div key={f.title} data-aos="fade-up" data-aos-delay={i * 80}
                className="group glass rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center mb-5 group-hover:scale-110 transition">
                  <f.icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed normal-case">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" className="relative">
            <img src={facility} alt="Premium gym facility" className="rounded-3xl shadow-[var(--shadow-card)]" loading="lazy" width={1600} height={1000} />
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 hidden md:block">
              <div className="text-3xl font-black text-gradient"><Counter to={15} suffix="+" /></div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Years Forging Champions</div>
            </div>
          </div>
          <div data-aos="fade-left">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">About Claw Fitness</p>
            <h2 className="text-4xl md:text-5xl font-black mt-3">More than a gym. A standard.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed normal-case">
              Claw Fitness was built on a single belief: strength is earned. From our 30,000 sq.ft. flagship floor to our elite coaching roster, every detail exists to push you past your comfort zone — safely, intelligently, and relentlessly.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Premium Facility", "Elite Coaching", "Smart Programming", "Real Community"].map((t) => (
                <div key={t} className="flex items-center gap-2"><ChevronRight className="size-4 text-primary" /><span className="text-sm">{t}</span></div>
              ))}
            </div>
            <Link to="/about" className="btn-primary mt-10">Discover Our Story <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section className="section-padding bg-surface/30">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6" data-aos="fade-up">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Meet The Team</p>
              <h2 className="text-4xl md:text-6xl font-black mt-3">Coaches who get results.</h2>
            </div>
            <Link to="/trainers" className="btn-outline">All Trainers</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            {trainers.map((t, i) => (
              <div key={t.name} data-aos="zoom-in" data-aos-delay={i * 80}
                className="group relative overflow-hidden rounded-2xl bg-surface border border-border">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={t.img} alt={t.name} className="size-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" loading="lazy" width={800} height={1024} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background via-background/85 to-transparent">
                  <div className="text-xs text-primary uppercase tracking-wider">{t.exp}</div>
                  <h3 className="text-lg font-bold mt-1">{t.name}</h3>
                  <p className="text-xs text-muted-foreground normal-case">{t.role} · {t.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PREVIEW */}
      <section className="section-padding">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Membership</p>
            <h2 className="text-4xl md:text-6xl font-black mt-3">Choose your battle plan.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {plans.map((p, i) => (
              <div key={p.name} data-aos="fade-up" data-aos-delay={i * 100}
                className={`relative rounded-3xl p-8 ${p.popular ? "bg-gradient-to-b from-primary/15 to-transparent border-2 border-primary shadow-[var(--shadow-glow)]" : "glass"}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-xs font-bold uppercase tracking-wider">Most Popular</div>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-5xl font-black">${p.price}</span>
                  <span className="text-muted-foreground text-sm">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm normal-case"><ChevronRight className="size-4 text-primary" />{f}</li>
                  ))}
                </ul>
                <Link to="/membership" className={`mt-8 w-full ${p.popular ? "btn-primary" : "btn-outline"}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-surface/30">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Real Stories</p>
            <h2 className="text-4xl md:text-6xl font-black mt-3">Forged in the gym. Proven in life.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {testimonials.map((t, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100}
                className="glass rounded-2xl p-8 relative">
                <Quote className="size-8 text-primary mb-4 opacity-70" />
                <p className="text-muted-foreground leading-relaxed normal-case">"{t.text}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="font-bold">{t.name}</div>
                  <div className="flex">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="size-4 fill-primary text-primary" />)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-x">
          <div data-aos="zoom-in" className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center glass">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/10" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-black max-w-3xl mx-auto">Your transformation starts the day you stop waiting.</h2>
              <p className="mt-6 text-muted-foreground max-w-xl mx-auto normal-case">Book a free trial day. Tour the floor. Train with a coach. No pressure — just proof.</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/membership" className="btn-primary">Start Free Trial <ArrowRight className="size-4" /></Link>
                <Link to="/contact" className="btn-outline">Talk to a Coach</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
