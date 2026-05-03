import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Primevest Developments" },
      { name: "description", content: "Disclaimer for the Primevest Developments website." },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  const paragraphs = [
    "The information provided on this website is for informational purposes only and does not constitute investment, legal, or financial advice.",
    "Primevest Commercial Investment and Management FZCO does not act as a financial advisor or regulated investment entity.",
    "Any real estate transactions or agreements are subject to independent contracts and due diligence.",
    "Users are advised to seek independent professional advice before entering into any transaction.",
  ];

  return (
    <>
      <PageHeader
        eyebrow="Disclaimer"
        title="Informational purposes only."
        intro="The following disclaimer applies to all content published on www.primevestdevelopments.site."
      />
      <section className="container-prose py-20 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </>
  );
}
