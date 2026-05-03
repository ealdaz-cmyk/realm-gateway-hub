import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Primevest Developments" },
      { name: "description", content: "Primevest Developments is an international real estate, investment and asset management company headquartered in Dubai, operating in Europe, Southeast Asia, Central America and the Middle East." },
      { property: "og:title", content: "About — Primevest Developments" },
      { property: "og:description", content: "International real estate and asset management group based in Dubai." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A corporate operator in real estate, investment and asset management."
        intro="Primevest Developments is the operating brand of Primevest Commercial Investment and Management FZCO, a corporate group dedicated to the intermediation and management of real estate assets owned by third parties across international markets."
      />

      <section className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>
            The group serves international property owners, institutional
            partners and investors that require a single, professional
            counterpart capable of intermediating real estate transactions
            and managing the underlying assets to institutional standards.
          </p>
          <p>
            The company operates under a structured, asset-light model.
            Primevest Developments does not develop or own its own real
            estate portfolio: activities are conducted exclusively on
            third-party assets through brokerage mandates, asset management
            agreements, and lease or sublease contracts.
          </p>
          <p>
            The group is headquartered in Dubai, United Arab Emirates,
            registered at IFZA Properties, Dubai Silicon Oasis, under the
            authority of the Dubai Integrated Economic Zones Authority
            (DIEZ). International operations are conducted through local
            counterparts and contractual arrangements in each jurisdiction
            where managed assets are located.
          </p>
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l border-border space-y-8">
          {[
            { k: "Legal form", v: "Free Zone Company (UAE)" },
            { k: "Authority", v: "Dubai Integrated Economic Zones Authority (DIEZ)" },
            { k: "Activities", v: "Investment in Commercial Enterprises & Management · Commercial Brokers · Portal" },
            { k: "Counterparties", v: "Property owners, investors, institutional partners" },
            { k: "Geographies", v: "Europe · Southeast Asia · Central America · Middle East" },
          ].map((i) => (
            <div key={i.k}>
              <div className="eyebrow">{i.k}</div>
              <div className="mt-2">{i.v}</div>
            </div>
          ))}
        </aside>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="eyebrow">Operating principles</div>
          <h2 className="mt-3 text-3xl md:text-4xl max-w-3xl">
            Transparency, contractual clarity and operational discipline.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {[
              { t: "Contract-based", c: "Every counterparty relationship is formalized through brokerage mandates, management agreements, or lease and sublease contracts with defined scopes and obligations." },
              { t: "Asset-light", c: "The group does not hold real estate on its own balance sheet. Revenue is generated from professional services and the operation of third-party assets." },
              { t: "International", c: "A Dubai-based holding structure with local execution capacity in each market where the company operates managed assets." },
            ].map((b) => (
              <div key={b.t}>
                <div className="rule mb-4" />
                <h3 className="text-xl">{b.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{b.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
