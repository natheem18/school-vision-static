import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Field, SelectInput, TextArea, TextInput } from "@/components/site/FormControls";
import { grades, school } from "@/data/site";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: `Admission Form ${school.academicYear} — ${school.name}` },
      {
        name: "description",
        content: `Submit an admission enquiry for the ${school.academicYear} academic year. Our admissions team will contact the parent or guardian after your submission.`,
      },
      { property: "og:title", content: `Admission Form ${school.academicYear}` },
      {
        property: "og:description",
        content: `Apply online for admission at ${school.name} for the ${school.academicYear} academic year.`,
      },
    ],
  }),
  component: AdmissionPage,
});

function AdmissionPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Admission enquiry submitted", {
      description: "Our admissions team will contact you within two working days.",
    });
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow={`Admissions ${school.academicYear}`}
        title={`Admission Form – ${school.academicYear}`}
        description="Complete the enquiry below to begin the admission process. Fields marked with an asterisk are required."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="flex gap-3 rounded-2xl border border-accent/25 bg-accent/8 p-5">
            <Info className="mt-0.5 size-5 shrink-0 text-accent" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              This is an enquiry form, not a confirmed admission. After submission, our admissions
              team will contact the parent or guardian to schedule an interaction and share the
              document checklist and fee structure.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10"
          >
            <div>
              <h2 className="text-lg font-bold text-foreground">Student details</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Student Name" htmlFor="studentName" required>
                  <TextInput id="studentName" name="studentName" required placeholder="Full name" />
                </Field>
                <Field label="Date of Birth" htmlFor="dob" required>
                  <TextInput id="dob" name="dob" type="date" required />
                </Field>
                <Field label="Gender" htmlFor="gender" required>
                  <SelectInput id="gender" name="gender" required defaultValue="">
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Prefer not to say</option>
                  </SelectInput>
                </Field>
                <Field label="Applying Grade / Class" htmlFor="grade" required>
                  <SelectInput id="grade" name="grade" required defaultValue="">
                    <option value="" disabled>
                      Select grade
                    </option>
                    {grades.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </SelectInput>
                </Field>
                <Field label="Previous School" htmlFor="previousSchool">
                  <TextInput
                    id="previousSchool"
                    name="previousSchool"
                    placeholder="Name of previous school (if any)"
                  />
                </Field>
                <Field label="Academic Year" htmlFor="academicYear" required>
                  <SelectInput
                    id="academicYear"
                    name="academicYear"
                    required
                    defaultValue={school.academicYear}
                  >
                    <option>{school.academicYear}</option>
                    <option>2027–28</option>
                  </SelectInput>
                </Field>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-lg font-bold text-foreground">Parent / Guardian details</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Parent / Guardian Name" htmlFor="parentName" required>
                  <TextInput id="parentName" name="parentName" required placeholder="Full name" />
                </Field>
                <Field label="Parent / Guardian Phone" htmlFor="parentPhone" required>
                  <TextInput
                    id="parentPhone"
                    name="parentPhone"
                    type="tel"
                    required
                    placeholder="+91 98400 00000"
                  />
                </Field>
                <Field label="Email" htmlFor="parentEmail" required>
                  <TextInput
                    id="parentEmail"
                    name="parentEmail"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Address" htmlFor="address" required className="sm:col-span-2">
                  <TextArea
                    id="address"
                    name="address"
                    rows={3}
                    required
                    placeholder="Residential address with city and PIN code"
                  />
                </Field>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <Field label="Message / Additional Information" htmlFor="message">
                <TextArea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Anything else you would like the admissions team to know"
                />
              </Field>
            </div>

            <Button type="submit" variant="cta" size="xl" className="w-full">
              Submit Application
            </Button>

            {submitted && (
              <p className="text-center text-sm font-medium text-accent">
                Enquiry received — our admissions team will contact you shortly.
              </p>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}
