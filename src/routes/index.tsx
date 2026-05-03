import { createFileRoute, Link } from "@tanstack/react-router";
import heroVilla from "@/assets/hero-villa.jpg";
import realEstate from "@/assets/real-estate.jpg";
import hospitality from "@/assets/hospitality.jpg";
import dubai from "@/assets/dubai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Primevest Developments — International Real Estate & Asset Management Company" },
      { name: "description", content: "Specialized in acquisition, brokerage and management of real estate assets across global markets. Headquartered in Dubai, UAE." },
      { property: "og:title", content: "Primevest Developments" },
      { property: "og:description", content: "International real estate, investment and asset management company headquartered in Dubai." },
      { property: "og:image", content: heroVilla },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          src={heroVilla}
          alt="International real estate asset under Primevest Developments management"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/10" />
        <div className="container-prose relative pb-20 pt-40 text-background">
          <div className="eyebrow text-background/70">Primevest Developments · Headquartered in Dubai</div>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl leading-[1.02] text-background">
            International Real Estate &amp; Asset Management Company
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-background/85 leading-relaxed">
            Specialized in acquisition, brokerage and management of real
            estate assets across global markets.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/services" className="px-6 py-3 bg-background text-foreground text-sm tracking-wide hover:bg-secondary transition-colors">
              Our Services
            </Link>
            <Link to="/business-model" className="px-6 py-3 border border-background/70 text-background text-sm tracking-wide hover:bg-background hover:text-foreground transition-colors">
              Business Model
            </Link>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="border-b border-border">
        <div className="container-prose py-20">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { k: "Activity", v: "Real Estate · Investment · Asset Management" },
              { k: "Headquarters", v: "Dubai, United Arab Emirates (IFZA)" },
              { k: "Operations", v: "Europe · Southeast Asia · Central America · Middle East" },
              { k: "Asset model", v: "Acquisition, brokerage and management of third-party real estate assets" },
              { k: "Revenue streams", v: "Brokerage commissions · Management fees · Lease & operations margin" },
              { k: "Licensing", v: "Investment in Commercial Enterprises & Management · Commercial Brokers · Portal" },
            ].map((i) => (
              <div key={i.k}>
                <div className="eyebrow">{i.k}</div>
                <div className="mt-3 text-lg leading-snug">{i.v}</div>
                <div className="rule mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-prose py-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5">
            <div className="eyebrow">What we do</div>
            <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
              A focused operator across real estate, investment and asset management.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground text-lg leading-relaxed">
            Primevest Developments structures, intermediates and manages
            real estate assets on behalf of property owners and
            international investors. Activities are conducted through
            formal contractual frameworks: brokerage mandates, management
            agreements, and lease and sublease structures.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[
            {
              img: realEstate,
              eyebrow: "01 — Core",
              title: "Real Estate Intermediation",
              copy: "Sourcing, brokerage and structuring of real estate transactions for international investors. Acquisition of third-party assets and disposal to qualified buyers.",
            },
            {
              img: hospitality,
              eyebrow: "02 — Core",
              title: "Asset & Hospitality Management",
              copy: "Day-to-day management of real estate assets, revenue management and operational management of accommodations on behalf of owners under formal agreements.",
            },
          ].map((c) => (
            <article key={c.title} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={c.img}
                  alt={c.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="mt-5 eyebrow">{c.eyebrow}</div>
              <h3 className="mt-2 text-2xl">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HEADQUARTERS */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20 grid md:grid-cols-12 gap-12 items-center">
          <img
            src={dubai}
            alt="Dubai — Primevest Developments headquarters"
            width={1280}
            height={960}
            loading="lazy"
            className="md:col-span-5 aspect-[4/3] object-cover"
          />
          <div className="md:col-span-7">
            <div className="eyebrow">Corporate seat</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Dubai, United Arab Emirates</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Primevest Commercial Investment and Management FZCO is
              registered at IFZA Properties, Dubai Silicon Oasis, under
              the Dubai Integrated Economic Zones Authority (DIEZ). The
              UAE entity acts as the contractual hub for international
              operations.
            </p>
            <Link to="/legal" className="inline-block mt-5 text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
              Corporate &amp; legal information →
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE CHAIN */}
      <section className="border-t border-border">
        <div className="container-prose py-20">
          <div className="eyebrow">Business process</div>
          <h2 className="mt-3 text-3xl md:text-5xl leading-tight max-w-3xl">
            A clear, traceable value chain — from sourcing to returns.
          </h2>
          <div className="mt-12 grid md:grid-cols-5 gap-px bg-border border border-border">
            {[
              ["01", "Source", "Identify real estate assets in target international markets."],
              ["02", "Structure", "Negotiate brokerage, management or lease agreements with owners."],
              ["03", "Manage", "Run asset and operational management to institutional standards."],
              ["04", "Operate or lease", "Direct exploitation under lease and sublease frameworks where applicable."],
              ["05", "Generate returns", "Earn fees, commissions and operating margins under signed contracts."],
            ].map(([n, t, c]) => (
              <div key={n} className="bg-background p-6">
                <div className="font-display text-2xl text-muted-foreground">{n}</div>
                <div className="mt-3 font-medium">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-prose py-20 grid md:grid-cols-12 gap-10 items-center">
          <h2 className="md:col-span-7 text-3xl md:text-5xl leading-tight">
            For institutional partners, investors and property owners.
          </h2>
          <div className="md:col-span-5 md:text-right">
            <Link
              to="/contact"
              className="inline-block px-7 py-3 border border-primary-foreground text-sm tracking-wide hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Contact our office
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
