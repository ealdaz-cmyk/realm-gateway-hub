import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Primevest Developments" },
      { name: "description", content: "Terms and Conditions governing the use of the Primevest Developments website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms & Conditions"
        title="Terms governing the use of this website."
        intro="These Terms and Conditions govern the access to and use of the website www.primevestdevelopments.site, operated by Primevest Commercial Investment and Management FZCO."
      />
      <section className="container-prose py-20 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p>Content to be provided.</p>
      </section>
    </>
  );
}
