import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Laptop,
  ShieldCheck,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, ImageCard, StatCard, TestimonialCard } from "@/components/site/Cards";
import { AdmissionCTA } from "@/components/site/AdmissionCTA";
import { school } from "@/data/site";
import heroCampus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/classroom.jpg";
import lab from "@/assets/lab.jpg";
import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${school.name} — Inspiring Young Minds, Building Bright Futures` },
      {
        name: "description",
        content:
          "A premium CBSE-style school offering academic excellence, modern smart campus facilities, experienced faculty and a safe, supportive environment. Admissions open.",
      },
      { property: "og:title", content: `${school.name} — Inspiring Young Minds` },
      {
        property: "og:description",
        content:
          "Academic excellence, modern campus and caring faculty from Pre-KG to Grade 12. Admissions open for 2026–27.",
      },
    ],
  }),
  component: HomePage,
});

const whyChooseUs = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Post-graduate, trained educators with an average of 12+ years guiding students with care.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "A rigorous, concept-first curriculum with regular assessment and personalised remediation.",
  },
  {
    icon: BookOpen,
    title: "Modern Campus",
    description:
      "Smart classrooms, well-stocked library and spacious, air-lit learning spaces across the campus.",
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
    description:
      "Athletics, football, basketball, music, dance and 20+ clubs that build teamwork and confidence.",
  },
  {
    icon: Laptop,
    title: "Technology-Based Learning",
    description:
      "Robotics, coding and digital labs integrated into everyday lessons from the primary years.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Supportive",
    description:
      "CCTV-monitored campus, GPS-tracked transport, on-campus nurse and full-time counsellors.",
  },
];

const campusPreview = [
  { src: classroom, title: "Smart Classrooms", description: "Interactive panels in every room." },
  { src: lab, title: "Science Laboratories", description: "Physics, chemistry and biology labs." },
  { src: library, title: "Library", description: "Over 15,000 titles and quiet reading zones." },
  { src: sports, title: "Sports Facilities", description: "Track, courts and a full-size field." },
];

const testimonials = [
  {
    quote:
      "The teachers know my daughter as an individual. Her confidence has grown enormously in two years.",
    name: "Priya Raghavan",
    role: "Parent, Grade 6",
  },
  {
    quote:
      "Weekly mentoring and doubt-clearing sessions made board preparation far less stressful than I expected.",
    name: "Arjun Menon",
    role: "Student, Grade 12",
  },
  {
    quote:
      "Transparent communication, safe transport and genuinely caring staff. We recommend it to every parent we meet.",
    name: "Fatima Sheikh",
    role: "Parent, Grade 3",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="surface-navy relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 size-[28rem] rounded-full bg-accent/20 blur-3xl"
        />
        <div className="container-page relative grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-bold tracking-[0.14em] uppercase text-primary-foreground/85">
              <Sparkles className="size-3.5 text-accent" />
              Admissions open · {school.academicYear}
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
              Inspiring Young Minds. Building Bright Futures.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              {school.name} blends academic rigour with creativity, sport and character education —
              helping every learner from Pre-KG to Grade 12 discover what they are capable of.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="xl">
                <Link to="/admission">
                  Apply for Admission
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/campus">Explore Our Campus</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroCampus}
              alt="Students walking across the school campus at golden hour"
              width={1600}
              height={1104}
              className="w-full rounded-3xl object-cover shadow-elevated"
            />
            <div className="absolute -bottom-8 left-4 hidden rounded-2xl bg-card px-6 py-5 shadow-elevated sm:block">
              <p className="text-3xl font-extrabold text-accent">27+</p>
              <p className="text-xs font-semibold text-muted-foreground">Years of excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About our school"
              title="A place where curiosity is taken seriously"
              description="Founded in 1998, we have grown into a community of over 1,800 students and 120 educators. Our classrooms are built for discussion, questioning and hands-on discovery rather than rote learning."
              align="left"
            />
            <Button asChild variant="navy" size="lg">
              <Link to="/about">
                Learn More
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="text-lg font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To provide a joyful, inclusive and academically strong education that equips
                students with knowledge, integrity and the courage to lead.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="text-lg font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To be a school recognised for nurturing thoughtful, compassionate global citizens
                who contribute meaningfully to the world around them.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why choose us"
          title="Everything a growing learner needs"
          description="Six commitments that shape daily life at our school."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* Campus preview */}
      <Section>
        <SectionHeading
          eyebrow="Campus"
          title="Spaces designed for discovery"
          description="From smart classrooms to laboratories and playing fields, our campus supports every kind of learner."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {campusPreview.map((item) => (
            <ImageCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/campus">
              View Full Campus
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Results */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Academic excellence"
          title="Results that reflect real learning"
          description="Consistent board performance, national-level achievements and students who go on to leading universities."
          tone="onNavy"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="95%+" label="Academic Excellence" tone="onNavy" />
          <StatCard value="100%" label="Board Pass Rate" tone="onNavy" />
          <StatCard value="50+" label="Awards & Recognitions" tone="onNavy" />
          <StatCard value="500+" label="Student Achievements" tone="onNavy" />
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="cta" size="lg">
            <Link to="/results">
              <Award />
              See Full Results
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our families say"
          description="Voices from the parents and students who make up our community."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </Section>

      <AdmissionCTA />

      {/* Icon strip is decorative only */}
      <div className="sr-only">
        <FlaskConical />
      </div>
    </>
  );
}
