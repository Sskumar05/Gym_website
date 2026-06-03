import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Check, X, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Claw Fitness" },
      { name: "description", content: "Flexible monthly, quarterly, half-yearly and annual plans. Pick the membership that matches your commitment." },
      { property: "og:title", content: "Claw Fitness Membership" },
      { property: "og:description", content: "Premium fitness memberships built for every level of commitment." },
      { property: "og:url", content: "/membership" },
    ],
    links: [{ rel: "canonical", href: "/membership" }],
  }),
  component: MembershipPage,
});

const plans = [
  { name: "Monthly", price: 49, period: "/month", features: ["Full Gym Access", "Locker Room", "Group Classes", "Mobile App"] },
  { name: "Quarterly", price: 129, period: "/3 months", features: ["All Monthly Benefits", "1 PT Session/month", "Nutrition Guide", "Body Composition"], popular: false },
  { name: "Half-Yearly", price: 239, period: "/6 months", features: ["All Quarterly", "2 PT Sessions/month", "Custom Meal Plan", "Recovery Lounge"], popular: true },
  { name: "Annual", price: 449, period: "/year", features: ["All Half-Yearly", "Unlimited Classes", "Quarterly Check-ins", "Guest Passes"] },
];

const featureMatrix = [
  { f: "Full Gym Access", m: [true, true, true, true] },
  { f: "Group Classes", m: [true, true, true, true] },
  { f: "Personal Training", m: [false, true, true, true] },
  { f: "Nutrition Coaching", m: [false, true, true, true] },
  { f: "Recovery Lounge", m: [false, false, true, true] },
  { f: "Guest Passes", m: [false, false, false, true] },
];

function MembershipPage() {
  return (
    <>
      <PageHero eyebrow="Membership" title="Pick your commitment level." subtitle="Every plan unlocks the full Claw Fitness experience. Longer commitments unlock deeper coaching." />

      <section className="section-padding">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((p, i) => (
              <div key={p.name} data-aos="fade-up" data-aos-delay={i * 70}
                className={`relative rounded-3xl p-7 flex flex-col ${p.popular ? "bg-gradient-to-b from-primary/15 to-transparent border-2 border-primary shadow-[var(--shadow-glow)]" : "glass"}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-xs font-bold uppercase tracking-wider">Best Value</div>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black">${p.price}</span>
                  <span className="text-muted-foreground text-xs normal-case">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm normal-case"><Check className="size-4 text-primary mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 ${p.popular ? "btn-primary" : "btn-outline"}`}>Join Now <ArrowRight className="size-4" /></Link>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-20" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-center">Compare features</h2>
            <div className="mt-10 overflow-x-auto glass rounded-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-5 font-bold">Feature</th>
                    {plans.map(p => <th key={p.name} className="p-5 font-bold text-center">{p.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {featureMatrix.map((row, i) => (
                    <tr key={row.f} className={i !== featureMatrix.length - 1 ? "border-b border-border" : ""}>
                      <td className="p-5 normal-case">{row.f}</td>
                      {row.m.map((v, j) => (
                        <td key={j} className="p-5 text-center">
                          {v ? <Check className="size-5 text-primary inline" /> : <X className="size-5 text-muted-foreground/40 inline" />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
