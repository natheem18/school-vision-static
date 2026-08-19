import { createFileRoute } from "@tanstack/react-router";
import { Medal, Trophy, Star, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StatCard } from "@/components/site/Cards";
import { AdmissionCTA } from "@/components/site/AdmissionCTA";
import { school } from "@/data/site";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: `Results & Achievements — ${school.name}` },
      {
        name: "description",
        content:
          "Board examination results, school toppers, academic statistics, student achievements and awards. Placeholder figures ready to be updated each year.",
      },
      { property: "og:title", content: `Academic Results — ${school.name}` },
      {
        property: "og:description",
        content:
          "100% board pass rate, 95%+ academic excellence, 50+ awards and 500+ student achievements.",
      },
    ],
  }),
  component: ResultsPage,
});

/** Placeholder statistics — replace with the school's published figures. */
const stats = [
  { value: "95%+", label: "Academic Excellence" },
  { value: "100%", label: "Board Pass Rate" },
  { value: "50+", label: "Awards & Recognitions" },
  { value: "500+", label: "Student Achievements" },
];

const boardResults = [
  { exam: "Grade 10 Board", pass: "100%", distinction: "82%", highest: "98.4%", average: "89.7%" },
  { exam: "Grade 12 — Science", pass: "100%", distinction: "79%", highest: "97.8%", average: "88.2%" },
  { exam: "Grade 12 — Commerce", pass: "100%", distinction: "74%", highest: "96.6%", average: "86.5%" },
];

const toppers = [
  { name: "Ananya Iyer", grade: "Grade 12 — Science", score: "97.8%" },
  { name: "Rohan Verma", grade: "Grade 12 — Commerce", score: "96.6%" },
  { name: "Meera Nair", grade: "Grade 10", score: "98.4%" },
  { name: "Karthik Subramanian", grade: "Grade 10", score: "97.9%" },
];

const achievements = [
  {
    icon: Trophy,
    title: "National Sports Meet",
    description: "Gold in under-17 athletics relay and silver in state-level basketball.",
  },
  {
    icon: Star,
    title: "Olympiad Honours",
    description: "34 students ranked in the top 1% of national maths and science olympiads.",
  },
  {
    icon: GraduationCap,
    title: "University Placements",
    description: "Graduates admitted to leading national institutes and universities abroad.",
  },
  {
    icon: Medal,
    title: "Arts & Culture",
    description: "Winners at inter-school debate, classical music and theatre championships.",
  },
];

function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Academic performance and achievements"
        description="A snapshot of our board results, toppers and the awards our students have earned. All figures shown are placeholder content and can be updated each academic year."
      />

      <Section>
        <SectionHeading
          eyebrow="At a glance"
          title="Academic statistics"
          description="Consistent outcomes across grades, streams and co-curricular arenas."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Board examinations"
          title="Board results summary"
          description="Performance across the most recent board examination cycle."
        />
        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="surface-navy">
              <tr>
                <th className="px-6 py-4 font-semibold">Examination</th>
                <th className="px-6 py-4 font-semibold">Pass %</th>
                <th className="px-6 py-4 font-semibold">Distinctions</th>
                <th className="px-6 py-4 font-semibold">Highest Score</th>
                <th className="px-6 py-4 font-semibold">Average</th>
              </tr>
            </thead>
            <tbody>
              {boardResults.map((row) => (
                <tr key={row.exam} className="border-t border-border transition-colors hover:bg-muted">
                  <td className="px-6 py-4 font-semibold text-foreground">{row.exam}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.pass}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.distinction}</td>
                  <td className="px-6 py-4 font-semibold text-accent">{row.highest}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.average}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="School toppers"
          title="Celebrating our highest achievers"
          description="Names and scores are placeholder content for the current cycle."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toppers.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-7 text-center shadow-card transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Medal className="size-7" />
              </span>
              <p className="mt-4 text-base font-bold text-foreground">{t.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.grade}</p>
              <p className="mt-4 text-2xl font-extrabold text-accent">{t.score}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Beyond academics"
          title="Student achievements & awards"
          description="Recognition earned in sport, olympiads, arts and community service."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <FeatureCard key={a.title} {...a} />
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Success highlights"
          title="What these numbers mean day to day"
          description="Structured revision cycles, weekly mentoring, targeted remedial classes and open parent reporting are the habits behind every result above."
          tone="onNavy"
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <StatCard value="34" label="Olympiad top-1% ranks" tone="onNavy" />
          <StatCard value="18" label="Inter-school championships" tone="onNavy" />
          <StatCard value="120+" label="Scholarships secured" tone="onNavy" />
        </div>
      </Section>

      <AdmissionCTA />
    </>
  );
}
