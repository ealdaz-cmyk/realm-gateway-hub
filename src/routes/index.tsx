import { createFileRoute, Link } from "@tanstack/react-router";
import heroVilla from "@/assets/hero-villa.jpg";
import realEstate from "@/assets/real-estate.jpg";
import hospitality from "@/assets/hospitality.jpg";
import wellness from "@/assets/wellness.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surf & Wellness Community — International Real Estate & Hospitality" },
      { name: "description", content: "International real estate and hospitality management company. Specialized in managing and operating lifestyle properties worldwide." },
      { property: "og:title", content: "Surf & Wellness Community" },
      { property: "og:description", content: "International real estate and hospitality management company headquartered in Dubai." },
      { property: "og:image", content: "/og-cover.jpg" },
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
          alt="Premium beachfront villa managed by Surf & Wellness Community"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/10" />
        <div className="container-prose relative pb-20 pt-40 text-background">
          <div className="eyebrow text-background/70">SWC · Headquartered in Dubai</div>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl leading-[1.02] text-background">
            International Real Estate &amp; Hospitality Management Company
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-background/85 leading-relaxed">
            Combining real estate, hospitality management and a global demand network to operate lifestyle properties worldwide.
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

      {/* AT A GLANCE — bank-readable summary */}
      <section className="border-b border-border">
        <div className="container-prose py-20">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { k: "Activity", v: "Real Estate & Hospitality Management" },
              { k: "Headquarters", v: "Dubai, United Arab Emirates (Free Zone)" },
              { k: "Operations", v: "Europe · Indonesia · LATAM · Middle East" },
              { k: "Asset model", v: "Third-party properties under management, lease & sublease agreements" },
              { k: "Revenue streams", v: "Brokerage commissions · Management fees · Revenue sharing" },
              { k: "Demand engine", v: "Global community network of surf & wellness users driving occupancy" },
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
              A focused operator across three integrated verticals.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground text-lg leading-relaxed">
            SWC structures, intermediates and manages lifestyle real estate
            assets owned by third parties, operates them under hospitality
            standards, and activates demand through a global community
            network of surf and wellness users — a competitive advantage
            that improves occupancy and revenue performance.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[
            {
              img: realEstate,
              eyebrow: "01 — Core",
              title: "Real Estate",
              copy: "Brokerage of property purchases and sales, structuring of real estate transactions for international investors, and asset management of tourism-oriented properties under lease and sublease agreements.",
            },
            {
              img: hospitality,
              eyebrow: "02 — Core",
              title: "Hospitality Management",
              copy: "Operational management of accommodations, occupancy and revenue optimization, and a full guest-experience layer for owners who outsource operations to a specialized international operator.",
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

        <div className="mt-16 grid md:grid-cols-12 gap-8 items-center border-t border-border pt-12">
          <img
            src={wellness}
            alt="Lifestyle and wellness experience layer"
            width={1280}
            height={960}
            loading="lazy"
            className="md:col-span-5 aspect-[4/3] object-cover"
          />
          <div className="md:col-span-7">
            <div className="eyebrow">03 — Strategic asset</div>
            <h3 className="mt-2 text-2xl">Demand Generation — Global Community Network</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              SWC has access to a global community of surf and wellness
              users, including a network of more than 5,000 surf schools,
              yoga centers, wellness studios and retreat operators. This
              network is not a commercial product: it is a demand engine
              that channels qualified guests into the properties we
              manage, supporting occupancy, reducing vacancy risk and
              improving revenue performance.
            </p>
            <Link to="/community" className="inline-block mt-5 text-sm border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
              Explore the demand network →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE GENERATE VALUE — value chain for banks */}
      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="eyebrow">How we generate value</div>
          <h2 className="mt-3 text-3xl md:text-5xl leading-tight max-w-3xl">
            A clear, traceable value chain — from sourcing to revenue.
          </h2>
          <div className="mt-12 grid md:grid-cols-5 gap-px bg-border border border-border">
            {[
              ["01", "Source", "Identify third-party real estate assets in target lifestyle destinations."],
              ["02", "Structure", "Sign management, lease or sublease agreements with property owners."],
              ["03", "Operate", "Run hospitality operations: front-of-house, housekeeping, maintenance, reporting."],
              ["04", "Activate demand", "Channel qualified guests through our global community network."],
              ["05", "Generate revenue", "Earn fees, revenue share and accommodation income under signed contracts."],
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
