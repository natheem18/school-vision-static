import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { school } from "@/data/site";

export function AdmissionCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="surface-navy relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-accent/25 blur-3xl"
          />
          <div className="relative">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold tracking-[0.14em] uppercase text-accent-foreground">
              Admissions Open
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Academic Year {school.academicYear}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
              Limited seats available from Pre-KG to Grade 12. Submit an enquiry and our admissions
              team will guide you through every step.
            </p>
            <Button asChild variant="cta" size="xl" className="mt-8">
              <Link to="/admission">
                Apply Now
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
