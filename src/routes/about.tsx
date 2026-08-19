import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Lightbulb, Scale, Sprout, Users, Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StatCard } from "@/components/site/Cards";
import { AdmissionCTA } from "@/components/site/AdmissionCTA";
import { school } from "@/data/site";
import principal from "@/assets/principal.jpg";
import classroom from "@/assets/classroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — ${school.name}` },
      {
        name: "description",
        content:
          "Our history, vision, mission and core values, the principal's message, faculty strength and the achievements that define our school community.",
      },
      { property: "og:title", content: `About ${school.name}` },
      {
        property: "og:description",
        content:
          "History, vision, mission, core values, faculty and achievements of our school community.",
      },
    ],
  }),
  component: AboutPage,
});

const coreValues = [
  {
    icon: Scale,
    title: "Integrity",
    description: "Honesty in work and word — the foundation of every classroom relationship.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "Questions are welcomed, tested and pursued far beyond the textbook.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy",
    description: "Students learn to listen, include and support one another every day.",
  },
  {
    icon: Sprout,
    title: "Perseverance",
    description: "Effort is celebrated as loudly as attainment across academics and sport.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Parents, teachers and students work as a single team around each child.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "High expectations, clear feedback and the support to meet them.",
  },
];

const reasons = [
  "Small class sizes with a 1:18 teacher-student ratio",
  "Individual learning plans and structured remedial support",
  "Transparent, app-based parent communication and reporting",
  "A safe, inclusive and value-driven school culture",
  "Strong outcomes in boards, olympiads and competitive exams",
  "Rich co-curricular life across sport, arts and service",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Nearly three decades of shaping confident learners"
        description={`${school.name} began in 1998 with 42 students in two rented classrooms. Today it is a thriving campus of more than 1,800 learners guided by 120 educators.`}
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <img
            src={classroom}
            alt="Students learning in a modern smart classroom"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full rounded-3xl object-cover shadow-card"
          />
          <div>
            <SectionHeading
              eyebrow="Our history"
              title="From two classrooms to a landmark campus"
              description="What began as a neighbourhood initiative by a group of teachers has grown steadily, adding a senior secondary wing in 2006, a science block in 2013 and a technology and innovation centre in 2021."
              align="left"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-base font-bold text-foreground">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be recognised for nurturing thoughtful, compassionate global citizens.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-base font-bold text-foreground">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To deliver joyful, inclusive and academically strong education for every learner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Core values"
          title="The principles we teach and live by"
          description="Six values that guide decisions from the staffroom to the playground."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v) => (
            <FeatureCard key={v.title} {...v} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <img
            src={principal}
            alt="Portrait of the school principal"
            loading="lazy"
            width={900}
            height={1100}
            className="w-full rounded-3xl object-cover shadow-card"
          />
          <div>
            <SectionHeading
              eyebrow="Principal's message"
              title="“We teach children, not just subjects.”"
              align="left"
            />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Every child arrives with a different starting point, and our task is to meet them
                there. Our teachers are trained to notice quiet struggles as readily as they applaud
                visible success.
              </p>
              <p>
                We hold high academic standards, but we measure ourselves equally on whether our
                students are kind, resilient and curious when they leave us. Parents are partners in
                this work, and our doors are genuinely open.
              </p>
              <p className="font-semibold text-foreground">
                Dr. Anitha Krishnan
                <span className="block text-xs font-medium text-muted-foreground">
                  Principal, {school.name}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our faculty"
              title="Educators who keep learning"
              description="120 full-time teachers, 85% with post-graduate qualifications and all trained in child protection, inclusive teaching and digital pedagogy. Continuous professional development runs through every term."
              align="left"
            />
            <div className="grid gap-6 sm:grid-cols-3">
              <StatCard value="120" label="Faculty members" />
              <StatCard value="1:18" label="Teacher ratio" />
              <StatCard value="12 yrs" label="Average experience" />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why parents choose us"
              title="Reasons families stay with us for years"
              align="left"
            />
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition earned over the years"
          tone="onNavy"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="100%" label="Board Pass Rate" tone="onNavy" />
          <StatCard value="50+" label="State & National Awards" tone="onNavy" />
          <StatCard value="1,800+" label="Students on campus" tone="onNavy" />
          <StatCard value="27+" label="Years of service" tone="onNavy" />
        </div>
      </Section>

      <AdmissionCTA />
    </>
  );
}
