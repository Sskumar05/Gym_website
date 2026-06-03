import { Link } from "@tanstack/react-router";
import { Dumbbell, Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 mt-20">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="size-9 rounded-md bg-gradient-to-br from-primary to-primary-glow grid place-items-center">
              <Dumbbell className="size-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl tracking-wider">IRON<span className="text-primary">FORGE</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Forge your strongest self. Premium training, elite coaches, and a relentless community.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="size-9 rounded-full glass grid place-items-center hover:text-primary hover:border-primary transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["/about","About"],["/services","Services"],["/trainers","Trainers"],["/membership","Membership"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="hover:text-primary">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Strength Training</li>
            <li>Weight Loss</li>
            <li>Personal Training</li>
            <li>Nutrition Coaching</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="size-4 text-primary" /> +1 (555) 010-2030</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-primary" /> hello@ironforge.fit</li>
            <li className="flex items-start gap-2"><MapPin className="size-4 text-primary mt-0.5" /> 220 Forge Avenue, Downtown</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} IRONFORGE Gym. All rights reserved.
      </div>
    </footer>
  );
}
