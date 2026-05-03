import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Primevest Developments" },
      { name: "description", content: "Privacy Policy of Primevest Commercial Investment and Management FZCO." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const sections: { t: string; c?: string; list?: string[] }[] = [
    {
      t: "1. Data We Collect",
      c: "We may collect:",
      list: [
        "Name and surname",
        "Email address",
        "Phone number",
        "Company information (if applicable)",
        "Any data voluntarily submitted through contact forms",
      ],
    },
    {
      t: "2. Purpose of Processing",
      c: "Personal data is collected for:",
      list: [
        "Responding to inquiries",
        "Providing information about services",
        "Business communication",
        "Compliance and regulatory obligations",
      ],
    },
    {
      t: "3. Legal Basis",
      c: "Data is processed based on:",
      list: [
        "User consent",
        "Legitimate business interest",
        "Compliance with legal obligations",
      ],
    },
    {
      t: "4. Data Sharing",
      c: "We do not sell or rent personal data. Data may be shared with:",
      list: [
        "Service providers (IT, hosting, CRM)",
        "Legal or regulatory authorities (when required)",
      ],
    },
    {
      t: "5. Data Retention",
      c: "Data is retained only as long as necessary for the purposes described or as required by law.",
    },
    {
      t: "6. Data Security",
      c: "We implement appropriate technical and organizational measures to protect personal data.",
    },
    {
      t: "7. User Rights",
      c: "Users may request:",
      list: [
        "Access to their data",
        "Correction",
        "Deletion",
        "Restriction of processing",
      ],
    },
    {
      t: "8. International Transfers",
      c: "Data may be processed in jurisdictions outside the user's country, including the UAE.",
    },
    {
      t: "9. Updates",
      c: "This policy may be updated periodically.",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="How we collect and process personal data."
        intro="Primevest Commercial Investment and Management FZCO (“the Company”) is committed to protecting personal data in accordance with applicable international data protection standards."
      />
      <section className="container-prose py-20 max-w-3xl space-y-10">
        {sections.map((s) => (
          <div key={s.t}>
            <h2 className="text-2xl">{s.t}</h2>
            {s.c && <p className="mt-3 text-muted-foreground leading-relaxed">{s.c}</p>}
            {s.list && (
              <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                {s.list.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
            <div className="rule mt-5" />
          </div>
        ))}
        <p className="text-sm text-muted-foreground">
          Requests regarding user rights should be sent to{" "}
          <a href="mailto:compliance@primevestdevelopments.site" className="text-foreground underline">
            compliance@primevestdevelopments.site
          </a>
          .
        </p>
      </section>
    </>
  );
}
