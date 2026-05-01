import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import realEstate from "@/assets/real-estate.jpg";
import hospitality from "@/assets/hospitality.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Surf & Wellness Community" },
      { name: "description", content: "Real estate brokerage, asset management, lease and sublease structuring, and hospitality operations for lifestyle properties." },
      { property: "og:title", content: "Services — Surf & Wellness Community" },
      { property: "og:description", content: "Real estate and hospitality management services for international property owners and investors." },
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
        title="Three integrated service lines for lifestyle real estate."
        intro="Our services cover the full lifecycle of a lifestyle property — from acquisition and contractual structuring to ongoing operation, revenue management and demand activation through our global community network."
      />

      {/* Real Estate */}
      <section className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <img
          src={realEstate}
          alt="Real estate services"
          width={1280}
          height={960}
          loading="lazy"
          className="md:col-span-5 aspect-[4/5] object-cover"
        />
        <div className="md:col-span-7">
          <div className="eyebrow">01 — Core business</div>
          <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Real Estate</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            We act as an intermediary and asset manager for third-party
            property owners and international investors interested in
            tourism-oriented real estate.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {[
              ["Brokerage on third-party purchases", "Sourcing, due diligence support and transaction coordination for buyers acquiring lifestyle properties internationally."],
              ["Sale of properties to international investors", "Structured marketing and disposal of qualifying assets on behalf of owners."],
              ["Real estate transaction structuring", "Coordination of contractual, fiscal and corporate aspects of cross-border real estate transactions in cooperation with local advisors."],
              ["Tourism real estate asset management", "Day-to-day asset management of tourism properties: maintenance oversight, capex planning, owner reporting."],
              ["Lease & sublease contracts", "Negotiation and execution of long-term lease and sublease agreements that allow SWC to operate properties under defined commercial terms."],
            ].map(([t, c]) => (
              <li key={t} className="py-5">
                <div className="font-medium">{t}</div>
                <div className="text-muted-foreground mt-1">{c}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hospitality */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 md:order-1 order-2">
            <div className="eyebrow">02 — Core business</div>
            <h2 className="mt-3 text-4xl md:text-5xl leading-tight">Hospitality Management</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We operate accommodations on behalf of property owners under
              management or lease agreements, generating revenue from guest
              stays and associated services.
            </p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {[
                ["Operational management of accommodations", "Front-of-house, housekeeping, maintenance coordination, supplier management and on-site guest support."],
                ["Occupancy & revenue optimization", "Pricing, distribution and channel management to maximize net revenue for the owner and the operator."],
                ["Guest experience services", "Standardized hospitality services including wellness, surf and lifestyle programming as a value-added layer."],
                ["Revenue management & reporting", "Periodic financial reporting to owners, KPI tracking and cash management on operated assets."],
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

      {/* Demand Generation */}
      <section className="border-t border-border">
        <div className="container-prose py-20">
          <div className="eyebrow">03 — Strategic service</div>
          <h2 className="mt-3 text-4xl md:text-5xl leading-tight max-w-3xl">Demand Generation</h2>
          <p className="mt-5 max-w-3xl text-muted-foreground text-lg leading-relaxed">
            SWC operates a global demand network composed of surf, yoga
            and wellness users and operators. This network is leveraged
            exclusively to drive qualified demand into the real estate
            assets we manage — improving occupancy, reducing dependency
            on third-party OTAs and supporting RevPAR performance.
          </p>
          <ul className="mt-8 grid md:grid-cols-2 gap-px bg-border border border-border">
            {[
              ["Network access", "Connection with +5,000 surf schools, yoga centers, wellness studios and retreat operators worldwide."],
              ["Qualified demand", "Channel of pre-qualified guests aligned with the positioning of managed properties."],
              ["Direct distribution", "Reduces reliance on OTAs and lowers customer acquisition cost on operated assets."],
              ["Revenue performance", "Higher occupancy and average length of stay translate into improved RevPAR for property owners."],
            ].map(([t, c]) => (
              <li key={t} className="bg-background p-6">
                <div className="font-medium">{t}</div>
                <div className="text-muted-foreground mt-1 text-sm leading-relaxed">{c}</div>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-foreground/80 leading-relaxed border-l-2 border-foreground pl-5">
            Our community is not just a brand asset — it is a demand
            engine that supports the performance of the real estate
            assets we manage.
          </p>
        </div>
      </section>
    </>
  );
}
