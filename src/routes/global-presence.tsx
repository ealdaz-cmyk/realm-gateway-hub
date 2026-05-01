import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import dubai from "@/assets/dubai.jpg";

export const Route = createFileRoute("/global-presence")({
  head: () => ({
    meta: [
      { title: "Global Presence — Surf & Wellness Community" },
      { name: "description", content: "SWC operates lifestyle real estate and hospitality assets across Europe, Indonesia (Lombok, Bali), Latin America and the United Arab Emirates." },
      { property: "og:title", content: "Global Presence — Surf & Wellness Community" },
      { property: "og:description", content: "Operations across Europe, Indonesia, LATAM and the Middle East." },
      { property: "og:image", content: dubai },
    ],
  }),
  component: GlobalPresencePage,
});

const REGIONS = [
  { region: "Middle East", role: "Group headquarters", places: ["United Arab Emirates — Dubai (Free Zone)"], notes: "Holding entity, group governance, contractual hub for international operations." },
  { region: "Europe", role: "Active market", places: ["Spain", "Portugal", "Selected Mediterranean destinations"], notes: "Brokerage and management of villas and lifestyle accommodations along Atlantic and Mediterranean coastlines." },
  { region: "Indonesia", role: "Active market", places: ["Bali", "Lombok"], notes: "Management and operation of villas, surf camps and wellness retreats under lease and management agreements." },
  { region: "Latin America", role: "Active market", places: ["Selected coastal destinations across Mexico, Costa Rica and adjacent markets"], notes: "Intermediation and management of tourism-oriented properties." },
];

function GlobalPresencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Presence"
        title="One operator. Four regions. Local execution everywhere we work."
        intro="SWC operates internationally through a Dubai-headquartered structure with local subsidiaries and contractual relationships in each market — supported by a global community presence across key surf and wellness destinations."
      />

      <section className="container-prose py-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <img
            src={dubai}
            alt="Dubai — group headquarters"
            width={1600}
            height={900}
            loading="lazy"
            className="md:col-span-5 aspect-[4/3] object-cover"
          />
          <div className="md:col-span-7">
            <div className="eyebrow">Headquarters</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Dubai, United Arab Emirates</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              The group is headquartered in a Dubai Free Zone. The UAE entity
              acts as the contractual counterpart for international clients
              and centralizes group governance, treasury and compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="eyebrow">Regions of operation</div>
          <h2 className="mt-3 text-3xl md:text-4xl max-w-3xl">Active markets and asset types</h2>

          <div className="mt-12 grid gap-px bg-border border border-border">
            {REGIONS.map((r) => (
              <div key={r.region} className="bg-background p-8 grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <div className="eyebrow">{r.role}</div>
                  <h3 className="mt-2 text-2xl">{r.region}</h3>
                </div>
                <ul className="md:col-span-4 text-foreground/85 space-y-1">
                  {r.places.map((p) => <li key={p}>· {p}</li>)}
                </ul>
                <p className="md:col-span-5 text-muted-foreground leading-relaxed">{r.notes}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {[
              ["Villas", "Premium private residences operated for short and mid-term stays."],
              ["Resorts", "Boutique resort properties under management agreements."],
              ["Surf camps", "Coastal accommodations with thematic programming."],
              ["Wellness retreats", "Properties operated for wellness-oriented stays."],
            ].map(([t, c]) => (
              <div key={t} className="border-t border-foreground pt-4">
                <div className="font-medium">{t}</div>
                <div className="text-muted-foreground mt-1">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
