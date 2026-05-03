import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/cookies-policy")({
  head: () => ({
    meta: [
      { title: "Cookies Policy — Primevest Developments" },
      { name: "description", content: "Cookies Policy of Primevest Commercial Investment and Management FZCO." },
    ],
  }),
  component: CookiesPolicyPage,
});

function CookiesPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cookies Policy"
        title="Use of cookies on this website."
        intro="This Cookies Policy explains how Primevest Developments uses cookies and similar technologies on www.primevestdevelopments.site."
      />
      <section className="container-prose py-20 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p>Content to be provided.</p>
      </section>
    </>
  );
}
