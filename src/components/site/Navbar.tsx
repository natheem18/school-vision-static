import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchoolLogo } from "./SchoolLogo";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 surface-navy shadow-elevated">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <SchoolLogo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-primary-foreground/85 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              activeProps={{ className: "bg-primary-foreground/15 text-primary-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="cta" size="lg" className="hidden sm:inline-flex">
            <Link to="/admission">
              <GraduationCap />
              Admission Form
            </Link>
          </Button>

          <Button
            variant="onNavy"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/15 lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-primary-foreground/85 transition-colors hover:bg-primary-foreground/10"
                activeProps={{ className: "bg-primary-foreground/15 text-primary-foreground" }}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="lg" className="mt-3 w-full">
              <Link to="/admission" onClick={() => setOpen(false)}>
                <GraduationCap />
                Admission Form
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
