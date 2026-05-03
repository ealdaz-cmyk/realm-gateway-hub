import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal & Corporate — Primevest Developments" },
      { name: "description", content: "Corporate information about Primevest Commercial Investment and Management FZCO: registration in Dubai (IFZA), licensed activities, group structure and regulatory framework." },
      { property: "og:title", content: "Legal & Corporate — Primevest Developments" },
      { property: "og:description", content: "Corporate, regulatory and licensing information." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Corporate"
        title="Corporate, regulatory and licensing information."
        intro="Primevest Developments is the operating brand of Primevest Commercial Investment and Management FZCO, a Free Zone company registered in Dubai under the Dubai Integrated Economic Zones Authority (DIEZ)."
      />

      <section className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-10">
          {[
            { t: "Registered entity", c: "Primevest Commercial Investment and Management FZCO, a Free Zone Company (FZCO) registered at IFZA Properties, Dubai Silicon Oasis, United Arab Emirates. The Dubai entity acts as the group's holding and contractual counterpart for international operations." },
            { t: "Regulatory authority", c: "The company is licensed by the Dubai Integrated Economic Zones Authority (DIEZ), the federal authority overseeing the IFZA free zone in Dubai Silicon Oasis." },
            { t: "Licensed activities", c: "Investment in Commercial Enterprises & Management · Commercial Brokers · Portal. All operational activities of the group fall within the scope of the activities authorized under the trade license." },
            { t: "Group structure", c: "The Dubai holding company operates internationally through local counterparts and contractual partners in each jurisdiction where managed assets are located. Each counterpart complies with local corporate, tax and regulatory requirements." },
            { t: "Regulatory framework", c: "Real estate intermediation activities are conducted in compliance with the regulations of each market. Hospitality and accommodation operations comply with applicable local regulations. Where licensed third parties are involved (real estate brokers, payment processors, property managers), only authorized counterparts are used." },
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
              ["Company name", "Primevest Commercial Investment and Management FZCO"],
              ["Jurisdiction", "Dubai, United Arab Emirates"],
              ["Authority", "Dubai Integrated Economic Zones Authority (DIEZ)"],
              ["Registered office", "IFZA Properties, Dubai Silicon Oasis"],
              ["Legal form", "Free Zone Company (FZCO)"],
              ["Activities", "Investment in Commercial Enterprises & Management · Commercial Brokers · Portal"],
              ["Group function", "Holding & operating company"],
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
            team at compliance@primevestdevelopments.site.
          </p>
        </aside>
      </section>
    </>
  );
}
