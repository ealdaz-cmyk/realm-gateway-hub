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
  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="How we collect and process personal data."
        intro="This Privacy Policy describes how Primevest Commercial Investment and Management FZCO collects, uses and protects personal information."
      />
      <section className="container-prose py-20 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p>Content to be provided.</p>
      </section>
    </>
  );
}
