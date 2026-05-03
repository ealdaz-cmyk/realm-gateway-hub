import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/value")({
  head: () => ({
    meta: [
      { title: "How We Create Value — Primevest Developments" },
      { name: "description", content: "Primevest Developments creates value through professional asset management, operational optimization and an international execution network across multiple markets." },
      { property: "og:title", content: "How We Create Value — Primevest Developments" },
      { property: "og:description", content: "Asset performance, operational optimization and international execution capacity." },
    ],
  }),
  component: ValuePage,
});

function ValuePage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Create Value"
        title="Professional management of international real estate assets."
        intro="Primevest Developments creates measurable value for owners and investors through a combination of professional asset management, operational discipline, and an international execution capacity that spans four regions."
      />

      <section className="container-prose py-20">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {[
            ["Asset profitability", "Active management of income, costs and capital structure to improve the net return profile of each managed real estate asset."],
            ["Operational optimization", "Standardized processes, performance KPIs and supplier governance to improve efficiency and reduce operating risk."],
            ["Professional management", "Institutional standards in reporting, accounting, contracts and counterparty controls applied to every asset under management."],
            ["International network", "Local execution capacity in Europe, Southeast Asia, Central America and the Middle East coordinated from the Dubai headquarters."],
          ].map(([t, c]) => (
            <div key={t} className="bg-background p-8">
              <div className="rule mb-4" />
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="eyebrow">Value drivers</div>
          <h2 className="mt-3 text-3xl md:text-4xl max-w-3xl">Where the company adds measurable value.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {[
              ["Revenue performance", "Pricing, distribution and channel management to maximize income on managed and operated assets."],
              ["Cost discipline", "Active control of operating costs, capex planning and procurement to protect net margins."],
              ["Reporting & governance", "Periodic financial reporting and KPI tracking aligned with institutional owner and investor requirements."],
            ].map(([t, c]) => (
              <div key={t}>
                <div className="rule mb-4" />
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
