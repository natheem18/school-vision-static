import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { SchoolLogo } from "./SchoolLogo";
import { navLinks, school } from "@/data/site";

const socialIcons = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="surface-navy mt-24">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5 lg:col-span-2">
          <SchoolLogo />
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/70">
            A community of curious learners and dedicated educators, nurturing academic excellence,
            character and confidence from early years through senior secondary.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 text-primary-foreground/80 transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase text-primary-foreground">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[...navLinks, { label: "Admission Form", to: "/admission" as const }].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase text-primary-foreground">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{school.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {school.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${school.email}`} className="hover:text-accent">
                {school.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </p>
          <p>Designed for learners, families and educators.</p>
        </div>
      </div>
    </footer>
  );
}
