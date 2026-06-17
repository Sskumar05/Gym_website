import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Claw Fitness — Visit, Call or Message" },
      { name: "description", content: "Visit our flagship facility, send us a message, or reach out on WhatsApp. We're here 7 days a week." },
      { property: "og:title", content: "Contact Claw Fitness" },
      { property: "og:description", content: "Get in touch. Book a tour. Start your transformation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach(i => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("ok");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start your journey." subtitle="Drop by the floor, send a message, or hit us on WhatsApp — we usually reply within an hour." />

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-4" data-aos="fade-right">
            {[
              { icon: Phone, label: "Phone", value: "+91 7459995999", href: "tel:+91 7459995999" },
              { icon: Mail, label: "Email", value: "hello@clawfitness.com", href: "mailto:hello@clawfitness.com" },
              { icon: MapPin, label: "Location", value: "165, Vinayagar kovil st, Bharathidasan nagar, Sivaprakasam nagar, Surapet, Chennai, India 600066" },
              { icon: Clock, label: "Hours", value: "Mon–Sun · 5:00 AM – 11:00 PM" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href ?? "#"} className="block glass rounded-2xl p-5 hover:border-primary/50 transition">
                <div className="flex gap-4 items-start">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shrink-0">
                    <Icon className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="font-bold mt-1 normal-case">{value}</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Follow</div>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube, MessageCircle].map((I, i) => (
                  <a key={i} href="#" className="size-10 rounded-full glass grid place-items-center hover:text-primary hover:border-primary"><I className="size-4" /></a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 glass rounded-3xl p-8" data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-black">Send us a message</h2>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              {([
                { k: "name", l: "Full Name", t: "text" },
                { k: "email", l: "Email", t: "email" },
              ] as const).map(({ k, l, t }) => (
                <div key={k}>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">{l}</label>
                  <input type={t} value={(form as any)[k]} onChange={e => setForm({ ...form, [k]: e.target.value })}
                    className="mt-1 w-full text-base bg-surface border border-border rounded-xl px-4 py-3 focus:border-primary outline-none normal-case" />
                  {errors[k] && <p className="text-xs text-destructive mt-1 normal-case">{errors[k]}</p>}
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone (optional)</label>
                <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full text-base bg-surface border border-border rounded-xl px-4 py-3 focus:border-primary outline-none normal-case" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full text-base bg-surface border border-border rounded-xl px-4 py-3 focus:border-primary outline-none normal-case resize-none" />
                {errors.message && <p className="text-xs text-destructive mt-1 normal-case">{errors.message}</p>}
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary">Send Message <Send className="size-4" /></button>
                <a href="https://wa.me/15550102030" target="_blank" rel="noreferrer" className="btn-outline"><MessageCircle className="size-4" /> WhatsApp Us</a>
                {status === "ok" && <span className="text-sm text-primary normal-case">✓ Thanks — we'll be in touch within 1 hour.</span>}
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="container-x mt-10" data-aos="fade-up">
          <div className="rounded-3xl overflow-hidden border border-border h-[420px]">
            <iframe
              title="Claw Fitness Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.96%2C40.74&layer=mapnik"
              className="w-full h-full grayscale invert opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
