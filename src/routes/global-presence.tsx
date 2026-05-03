import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import dubai from "@/assets/dubai.jpg";

export const Route = createFileRoute("/global-presence")({
  head: () => ({
    meta: [
      { title: "Geographical Presence — Primevest Developments" },
      { name: "description", content: "Primevest Developments operates real estate assets across Europe (Canary Islands, Portugal), Southeast Asia (Lombok, Bali), Central America (El Salvador) and the Middle East (Dubai)." },
      { property: "og:title", content: "Geographical Presence — Primevest Developments" },
      { property: "og:description", content: "International operations across Europe, Southeast Asia, Central America and the Middle East." },
      { property: "og:image", content: dubai },
    ],
  }),
  component: GlobalPresencePage,
});

const REGIONS = [
  {
    region: "Middle East",
    role: "Group headquarters",
    places: [
      "United Arab Emirates — Dubai",
      "IFZA Properties, Dubai Silicon Oasis",
    ],
    notes: "Holding entity, group governance, treasury and contractual hub for international operations. Licensed by the Dubai Integrated Economic Zones Authority (DIEZ).",
  },
  {
    region: "Europe",
    role: "Active market",
    places: ["Canary Islands (Spain)", "Portugal"],
    notes: "Real estate intermediation, asset management and operation of tourism-oriented properties along the Atlantic coastline.",
  },
  {
    region: "Southeast Asia",
    role: "Active market",
    places: ["Lombok (Indonesia)", "Bali (Indonesia)"],
    notes: "Asset management, hospitality operations and lease structures on third-party real estate assets across Indonesian markets.",
  },
  {
    region: "Central America",
    role: "Active market",
    places: ["El Salvador"],
    notes: "Real estate intermediation and management of tourism-oriented properties in selected Central American coastal destinations.",
  },
];

function GlobalPresencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Geographical Presence"
        title="One operator. Four regions. Local execution in every market."
        intro="Primevest Developments operates internationally through a Dubai-headquartered structure with local execution capacity in each market where the company manages real estate assets."
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
              The group is headquartered at IFZA Properties, Dubai Silicon
              Oasis, under the Dubai Integrated Economic Zones Authority
              (DIEZ). The UAE entity acts as the contractual counterpart
              for international clients and centralizes group governance,
              treasury and compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="eyebrow">Regions of operation</div>
          <h2 className="mt-3 text-3xl md:text-4xl max-w-3xl">Active markets and managed assets</h2>

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
        </div>
      </section>
    </>
  );
}
