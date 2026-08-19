import { createFileRoute } from "@tanstack/react-router";
import { Bus, ShieldCheck, Palette, Music } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, ImageCard } from "@/components/site/Cards";
import { AdmissionCTA } from "@/components/site/AdmissionCTA";
import { school } from "@/data/site";
import heroCampus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/classroom.jpg";
import lab from "@/assets/lab.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";
import auditorium from "@/assets/auditorium.jpg";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: `Our Campus — ${school.name}` },
      {
        name: "description",
        content:
          "Explore smart classrooms, science and computer laboratories, the library, sports facilities, playground, auditorium, activity rooms, transport and campus safety.",
      },
      { property: "og:title", content: `Campus Facilities — ${school.name}` },
      {
        property: "og:description",
        content:
          "Smart classrooms, laboratories, library, sports grounds, auditorium, transport and 24/7 campus security.",
      },
    ],
  }),
  component: CampusPage,
});

const facilities = [
  {
    src: classroom,
    title: "Smart Classrooms",
    description:
      "Air-lit rooms with interactive panels, ergonomic seating and no more than 30 students each.",
  },
  {
    src: lab,
    title: "Science Laboratories",
    description:
      "Separate physics, chemistry and biology labs with individual workstations and safety gear.",
  },
  {
    src: computerLab,
    title: "Computer Laboratory",
    description: "80 networked workstations supporting coding, robotics and digital design.",
  },
  {
    src: library,
    title: "Library & Reading Room",
    description: "15,000+ titles, periodicals, e-resources and dedicated quiet study zones.",
  },
  {
    src: sports,
    title: "Sports Facilities",
    description:
      "400m track, football field, basketball and volleyball courts plus an indoor games hall.",
  },
  {
    src: auditorium,
    title: "Auditorium",
    description: "A 600-seat air-conditioned auditorium for assemblies, theatre and performances.",
  },
];

const support = [
  {
    icon: Palette,
    title: "Activity Rooms",
    description: "Dedicated art, craft, robotics and dance studios timetabled for every grade.",
  },
  {
    icon: Music,
    title: "Music & Performing Arts",
    description: "Soundproofed music rooms with instruments for Carnatic, Western and percussion.",
  },
  {
    icon: Bus,
    title: "Transportation",
    description:
      "A fleet of 24 GPS-tracked buses with trained attendants covering 40+ city routes.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    description:
      "CCTV coverage, controlled entry, fire-safety audits, on-campus nurse and counsellors.",
  },
];

function CampusPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title="A campus built around how children actually learn"
        description="Eight acres of purpose-built learning spaces, green play areas and facilities that support academics, sport and the arts in equal measure."
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <img
            src={heroCampus}
            alt="Aerial view of the school campus building and grounds"
            loading="lazy"
            width={1600}
            height={1104}
            className="w-full rounded-3xl object-cover shadow-card"
          />
          <SectionHeading
            eyebrow="Campus overview"
            title="Everything within a safe, walkable campus"
            description="Academic blocks, laboratories, the library and the sports complex sit around a central green, so students move easily between lessons, activities and play. Every corner is designed for supervision, accessibility and natural light."
            align="left"
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Facilities"
          title="Explore our learning spaces"
          description="A closer look at the spaces students use every day."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <ImageCard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Beyond the classroom"
          title="Support, safety and enrichment"
          description="The services and spaces that make daily school life smooth for students and families."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {support.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <AdmissionCTA />
    </>
  );
}
