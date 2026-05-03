import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import realEstate from "@/assets/real-estate.jpg";
import hospitality from "@/assets/hospitality.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Primevest Developments" },
      { name: "description", content: "Real estate intermediation, asset management, hospitality management, and lease & operations services for international property owners and investors." },
      { property: "og:title", content: "Services — Primevest Developments" },
      { property: "og:description", content: "Real estate, asset and hospitality management services." },
      { property: "og:image", content: realEstate },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Four service lines covering the full real estate value chain."
        intro="From acquisition and brokerage to asset management, hospitality operations and lease structures — Primevest Developments offers institutional clients a single counterpart for the management of international real estate assets."
      />

      {/* A. Real Estate Intermediation */}
      <section className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <img
          src={realEstate}
          alt="Real estate intermediation"
          width={1280}
          height={960}
          loading="lazy"
          className="md:col-span-5 aspect-[4/5] object-cover"
        />
        <div className="md:col-span-7">
          <div className="eyebrow">A — Core business</div>
          <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Real Estate Intermediation</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            We act as broker and counterpart in real estate transactions
            on behalf of property owners and international investors,
            sourcing, structuring and closing acquisitions and disposals
            of qualifying assets.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {[
              ["Acquisition of third-party assets", "Sourcing, due diligence support and transaction coordination for the purchase of real estate assets in target markets."],
              ["Sale of assets to investors", "Structured marketing and disposal of qualifying real estate assets to qualified institutional and private investors."],
              ["Real estate brokerage", "Intermediation between buyers and sellers under formal brokerage mandates, with transparent commission structures."],
              ["Transaction structuring", "Coordination of contractual, fiscal and corporate aspects of cross-border real estate transactions in cooperation with licensed local advisors."],
            ].map(([t, c]) => (
              <li key={t} className="py-5">
                <div className="font-medium">{t}</div>
                <div className="text-muted-foreground mt-1">{c}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* B. Asset Management */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="eyebrow">B — Core business</div>
          <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Asset Management</h2>
          <p className="mt-5 max-w-3xl text-muted-foreground text-lg leading-relaxed">
            We provide professional asset management services on real
            estate assets owned by third parties under formal management
            agreements, with the objective of optimizing asset performance
            and protecting owner interests.
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-px bg-border border border-border">
            {[
              ["Asset performance management", "Active management of real estate assets to optimize income, occupancy and long-term value."],
              ["Profitability optimization", "Cost control, revenue management and operational efficiency to maximize net returns for owners."],
              ["Operational management", "Coordination of maintenance, capex planning, supplier management and on-site operations."],
              ["Revenue management & reporting", "Pricing, distribution and periodic financial reporting to property owners and investors."],
            ].map(([t, c]) => (
              <div key={t} className="bg-background p-6">
                <div className="font-medium">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Hospitality Management */}
      <section className="border-t border-border">
        <div className="container-prose py-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 md:order-1 order-2">
            <div className="eyebrow">C — Operational line</div>
            <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Hospitality Management</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We operate accommodations on behalf of owners under
              management agreements, generating revenue from guest stays
              and associated services in compliance with local accommodation
              regulations.
            </p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {[
                ["Operation of accommodations", "Direct or third-party management of accommodation assets under formal contracts."],
                ["Operations on behalf of owners", "Front-of-house, housekeeping, maintenance, supplier management and guest support on owner's account."],
                ["Occupancy optimization", "Pricing, distribution and channel management to maximize occupancy and net revenue."],
                ["Reporting & cash management", "Periodic financial reporting, KPI tracking and cash management on operated assets."],
              ].map(([t, c]) => (
                <li key={t} className="py-5">
                  <div className="font-medium">{t}</div>
                  <div className="text-muted-foreground mt-1">{c}</div>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={hospitality}
            alt="Hospitality management"
            width={1280}
            height={960}
            loading="lazy"
            className="md:col-span-5 md:order-2 order-1 aspect-[4/5] object-cover"
          />
        </div>
      </section>

      {/* D. Lease & Operations */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="eyebrow">D — Operational line</div>
          <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Lease &amp; Operations</h2>
          <p className="mt-5 max-w-3xl text-muted-foreground text-lg leading-relaxed">
            Primevest Developments enters into long-term lease agreements
            with property owners and operates the leased assets directly,
            including under sublease structures, retaining the operating
            margin within a defined contractual framework.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              ["Lease acquisition", "Negotiation and execution of long-term lease contracts with property owners under defined commercial terms."],
              ["Direct operation", "Direct exploitation of leased assets, including all operational, commercial and reporting obligations."],
              ["Sublease structures", "Structured sublease arrangements that allow controlled re-commercialization of leased properties."],
            ].map(([t, c]) => (
              <div key={t} className="bg-background p-6">
                <div className="font-medium">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
