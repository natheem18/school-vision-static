import { GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { school } from "@/data/site";
import { cn } from "@/lib/utils";

export function SchoolLogo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const onNavy = tone === "light";
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105",
          onNavy ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground",
        )}
        aria-hidden="true"
      >
        <GraduationCap className="size-6" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-base font-extrabold tracking-tight sm:text-lg",
            onNavy ? "text-primary-foreground" : "text-foreground",
          )}
        >
          {school.name}
        </span>
        <span
          className={cn(
            "text-[11px] font-medium tracking-wide uppercase",
            onNavy ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {school.tagline}
        </span>
      </span>
    </Link>
  );
}
