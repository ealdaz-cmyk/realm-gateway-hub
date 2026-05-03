import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/business-model")({
  head: () => ({
    meta: [
      { title: "Business Model — Primevest Developments" },
      { name: "description", content: "Primevest Developments operates third-party real estate assets through brokerage mandates, management agreements and lease/sublease contracts, generating revenue from commissions, fees and operating margins." },
      { property: "og:title", content: "Business Model — Primevest Developments" },
      { property: "og:description", content: "Asset-light operating model based on real estate intermediation, asset management and lease structures." },
    ],
  }),
  component: BusinessModelPage,
});

function BusinessModelPage() {
  return (
    <>
      <PageHeader
        eyebrow="Business Model"
        title="Asset-light. Contract-based. Revenue from services and operations."
        intro="Primevest Developments generates revenue exclusively from professional services, intermediation activity and the operation of properties owned by third parties — under formally signed agreements with identified counterparties."
      />

      {/* Process */}
      <section className="container-prose py-20">
        <div className="eyebrow">Business process</div>
        <h2 className="mt-3 text-3xl md:text-4xl max-w-3xl">From sourcing to returns — five sequential steps.</h2>
        <ol className="mt-10 grid md:grid-cols-5 gap-px bg-border border border-border">
          {[
            ["01", "Sourcing assets", "Identification of qualifying real estate assets in target international markets."],
            ["02", "Structuring transactions", "Execution of brokerage mandates, management agreements or lease/sublease contracts."],
            ["03", "Managing assets", "Asset management, performance monitoring and reporting to owners and investors."],
            ["04", "Operating or leasing", "Direct operation of leased assets and management of accommodations on behalf of owners."],
            ["05", "Generating returns", "Recognition of commissions, management fees, revenue share and operating margins."],
          ].map(([n, t, c]) => (
            <li key={n} className="bg-background p-6 list-none">
              <div className="font-display text-2xl text-muted-foreground">{n}</div>
              <div className="mt-3 font-medium">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contractual frameworks */}
      <section className="border-t border-border bg-secondary">
        <div className="container-prose py-20">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="eyebrow">Contractual frameworks</div>
              <h2 className="mt-3 text-3xl md:text-4xl leading-tight">
                Three formal frameworks govern every relationship.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-8">
              {[
                { n: "01", t: "Brokerage mandates", c: "Signed with property owners or investors for the purchase or sale of specific real estate assets. Remunerated through transaction commissions upon closing." },
                { n: "02", t: "Asset management agreements", c: "Signed with property owners. Primevest Developments manages the asset on the owner's behalf, remunerated through management fees and/or revenue share." },
                { n: "03", t: "Lease & sublease contracts", c: "Long-term lease of properties from owners and direct operation, including under structured sublease arrangements where applicable." },
              ].map((i) => (
                <div key={i.n} className="flex gap-6 border-t border-border pt-6">
                  <div className="font-display text-3xl text-muted-foreground w-12">{i.n}</div>
                  <div>
                    <h3 className="text-xl">{i.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{i.c}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue streams */}
      <section className="container-prose py-20">
        <div className="eyebrow">Revenue streams</div>
        <h2 className="mt-3 text-3xl md:text-4xl">How the company generates income</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Brokerage commissions", "Fees received from property owners or buyers upon completion of real estate transactions under signed brokerage mandates."],
            ["Asset management fees", "Recurring fees received from property owners for the professional management of their real estate assets."],
            ["Revenue sharing", "Variable participation on the net operating revenue of managed properties under management agreements."],
            ["Lease & operations margin", "Net operating margin generated from properties operated under lease and sublease frameworks."],
          ].map(([t, c]) => (
            <div key={t} className="border border-border p-6">
              <div className="rule mb-4" />
              <div className="font-medium">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Counterparties & flows */}
      <section className="border-t border-border bg-secondary">
        <div className="container-prose py-20">
          <div className="eyebrow">Counterparties &amp; flows</div>
          <h2 className="mt-3 text-3xl md:text-4xl max-w-3xl">Clear, traceable flows between identified parties.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-sm">
            {[
              { t: "Inflows", items: ["Property owners (management fees, revenue share)", "Buyers and sellers (brokerage commissions)", "Operating revenue from leased and operated assets, via licensed payment processors"] },
              { t: "Outflows", items: ["Local subsidiaries and licensed service providers", "Owner distributions under management agreements", "Operating expenses, salaries, taxes and statutory obligations"] },
              { t: "Documentation", items: ["Signed contracts with each counterparty", "Invoices and accounting records per jurisdiction", "Periodic financial reporting to owners and investors"] },
            ].map((b) => (
              <div key={b.t} className="border-t border-foreground pt-5 bg-background p-6">
                <div className="eyebrow">{b.t}</div>
                <ul className="mt-4 space-y-2 text-foreground/80">
                  {b.items.map((x) => <li key={x}>· {x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
