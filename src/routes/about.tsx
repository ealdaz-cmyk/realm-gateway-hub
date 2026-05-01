import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Surf & Wellness Community" },
      { name: "description", content: "Surf & Wellness Community is an international real estate and hospitality management company headquartered in Dubai, operating in Europe, Indonesia, LATAM and the UAE." },
      { property: "og:title", content: "About — Surf & Wellness Community" },
      { property: "og:description", content: "International real estate and hospitality management group based in Dubai." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A hybrid operator: real estate, hospitality and a global demand network."
        intro="Surf & Wellness Community (SWC) is a corporate group dedicated to the structuring, management and operation of lifestyle real estate assets owned by third parties, supported by a proprietary global community network that activates demand for those assets."
      />

      <section className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>
            SWC was established to serve a clear market need: international
            property owners and investors require a single, professional
            counterpart capable of intermediating real estate transactions
            and operating the underlying assets to institutional standards
            — with reliable demand to sustain their performance.
          </p>
          <p>
            The company does not develop or own its own real estate portfolio
            in its initial stage. Instead, SWC operates exclusively on
            properties owned by third parties through brokerage mandates,
            management agreements, and lease or sublease contracts.
          </p>
          <p>
            SWC also operates a global community network of surf and
            wellness users — including more than 5,000 surf schools,
            yoga centers, wellness studios and retreat operators — used
            exclusively to channel qualified demand into the properties
            under management. The combination of real estate services,
            hospitality operations and a proprietary demand network
            defines our hybrid operating model.
          </p>
          <p>
            Our group is headquartered in a Dubai Free Zone and operates
            internationally through local subsidiaries and contractual
            arrangements in each jurisdiction where managed assets are
            located.
          </p>
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l border-border space-y-8">
          {[
            { k: "Legal form", v: "Free Zone Company (UAE)" },
            { k: "Group structure", v: "Holding entity with local subsidiaries" },
            { k: "Sector", v: "Real estate · Hospitality management · Demand network" },
            { k: "Counterparties", v: "Property owners, investors, hospitality guests" },
            { k: "Geographies", v: "Europe, Indonesia, Latin America, Middle East" },
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
              { t: "Contract-based", c: "Every relationship is formalized: brokerage mandates, management agreements, and lease or sublease contracts with clear scopes and obligations." },
              { t: "Asset-light", c: "We do not initially hold real estate on our balance sheet. The business is built on services and operational control of third-party assets." },
              { t: "Demand-backed", c: "A proprietary global community network channels qualified guests into the properties we manage, reinforcing occupancy and revenue performance." },
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
