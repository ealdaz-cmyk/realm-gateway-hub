import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal & Corporate — Surf & Wellness Community" },
      { name: "description", content: "Corporate information about Primevest Commercial Investment and Management FZCO: registration in the United Arab Emirates Free Zone, group structure, regulatory framework and B2B/B2C activity." },
      { property: "og:title", content: "Legal & Corporate — Surf & Wellness Community" },
      { property: "og:description", content: "Corporate, regulatory and structural information." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Corporate"
        title="Corporate and regulatory information."
        intro="Surf & Wellness Community is a corporate group registered in the United Arab Emirates and operating internationally through local subsidiaries and contractual arrangements."
      />

      <section className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-10">
          {[
            { t: "Registered entity", c: "Primevest Commercial Investment and Management FZCO, a Free Zone company registered in Dubai, United Arab Emirates. The Dubai entity acts as the group's holding and contractual counterpart for international operations." },
            { t: "Group structure", c: "The holding company operates through local subsidiaries and contractual partners in each jurisdiction where managed assets are located. Each subsidiary complies with local corporate, tax and regulatory requirements." },
            { t: "Regulatory framework", c: "Real estate intermediation activities are conducted in compliance with the regulations of each market. Hospitality operations comply with applicable local accommodation and tax regulations. Where third-party real estate brokers, payment processors or property managers are involved, only licensed counterparts are used." },
            { t: "Activity profile", c: "B2B activity (with property owners, investors, institutional partners and local operators) and B2C activity (with hospitality guests). All counterparties are identified and contractually documented." },
            { t: "Compliance", c: "The group maintains internal procedures consistent with international standards on Know-Your-Customer (KYC) and Anti-Money-Laundering (AML), including counterparty identification, source-of-funds checks for material transactions, and transaction record-keeping." },
          ].map((b) => (
            <div key={b.t}>
              <h2 className="text-2xl">{b.t}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.c}</p>
              <div className="rule mt-5" />
            </div>
          ))}
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l border-border">
          <div className="eyebrow">Corporate identity</div>
          <dl className="mt-4 space-y-5 text-sm">
            {[
              ["Legal name", "Primevest Commercial Investment and Management FZCO"],
              ["Jurisdiction", "United Arab Emirates"],
              ["Registered office", "Dubai Free Zone, United Arab Emirates"],
              ["Group function", "Holding & operating company"],
              ["Activity codes", "Real estate services · Hospitality management"],
              ["Reporting", "Annual financial statements per UAE Free Zone requirements"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-2 gap-4 border-b border-border pb-4">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
            For formal documentation requests (trade license, certificate of
            incorporation, UBO declarations), please contact our compliance
            team at compliance@surfwellness.community.
          </p>
        </aside>
      </section>
    </>
  );
}
