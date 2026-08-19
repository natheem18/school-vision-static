import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Field, TextArea, TextInput } from "@/components/site/FormControls";
import { school } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us — ${school.name}` },
      {
        name: "description",
        content:
          "Reach the school office: address, phone numbers, email, school timings, location map and an enquiry form for parents and visitors.",
      },
      { property: "og:title", content: `Contact ${school.name}` },
      {
        property: "og:description",
        content: "Address, phone, email, school timings and an online enquiry form.",
      },
    ],
  }),
  component: ContactPage,
});

const socialIcons = [
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! Your message has been received.", {
      description: "Our office team will get back to you within one working day.",
    });
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Questions about admissions, transport, fees or a campus visit? Send us a message or drop by the school office during working hours."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
            <h2 className="text-2xl font-extrabold text-foreground">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form and our team will respond by phone or email.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="name" required>
                  <TextInput id="name" name="name" required placeholder="Your full name" />
                </Field>
                <Field label="Email" htmlFor="email" required>
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Phone" htmlFor="phone" required>
                  <TextInput
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98400 00000"
                  />
                </Field>
                <Field label="Subject" htmlFor="subject" required>
                  <TextInput id="subject" name="subject" required placeholder="Admission enquiry" />
                </Field>
              </div>
              <Field label="Message" htmlFor="message" required>
                <TextArea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help you?"
                />
              </Field>
              <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
                Submit Message
              </Button>
              {submitted && (
                <p className="text-sm font-medium text-accent">
                  Thank you — your message has been recorded.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <h2 className="text-lg font-bold text-foreground">School information</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{school.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    <a
                      href={`tel:${school.phone.replace(/\s/g, "")}`}
                      className="block hover:text-accent"
                    >
                      {school.phone}
                    </a>
                    <a
                      href={`tel:${school.altPhone.replace(/\s/g, "")}`}
                      className="block hover:text-accent"
                    >
                      {school.altPhone}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
                  <a href={`mailto:${school.email}`} className="text-muted-foreground hover:text-accent">
                    {school.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    {school.timings}
                    <span className="mt-1 block">{school.officeTimings}</span>
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-sm font-bold text-foreground">Follow us</h3>
                <div className="mt-3 flex gap-3">
                  {socialIcons.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" className="pt-0">
        <SectionHeading
          eyebrow="Location"
          title="Find us on the map"
          description="Replace this embed with your school's Google Maps location."
        />
        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="School location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&output=embed`}
            loading="lazy"
            className="h-[26rem] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
