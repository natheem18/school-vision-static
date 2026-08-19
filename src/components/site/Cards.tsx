import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/40">
      <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export function StatCard({
  value,
  label,
  tone = "default",
}: {
  value: string;
  label: string;
  tone?: "default" | "onNavy";
}) {
  const onNavy = tone === "onNavy";
  return (
    <div
      className={cn(
        "rounded-2xl border p-7 text-center transition-transform duration-200 hover:-translate-y-1",
        onNavy
          ? "border-primary-foreground/15 bg-primary-foreground/5"
          : "border-border bg-card shadow-card",
      )}
    >
      <p className={cn("text-4xl font-extrabold", onNavy ? "text-accent" : "text-accent")}>
        {value}
      </p>
      <p
        className={cn(
          "mt-2 text-sm font-medium",
          onNavy ? "text-primary-foreground/75" : "text-muted-foreground",
        )}
      >
        {label}
      </p>
    </div>
  );
}

export function ImageCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated">
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={src}
          alt={title}
          loading="lazy"
          width={1200}
          height={800}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="p-6">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </figcaption>
    </figure>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">“{quote}”</p>
      <footer className="mt-6 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-bold text-foreground">{name}</span>
          <span className="block text-xs text-muted-foreground">{role}</span>
        </span>
      </footer>
    </blockquote>
  );
}
