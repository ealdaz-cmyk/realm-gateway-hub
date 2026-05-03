import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal Notice — Primevest Developments" },
      { name: "description", content: "Legal Notice of Primevest Commercial Investment and Management FZCO, operator of www.primevestdevelopments.site." },
      { property: "og:title", content: "Legal Notice — Primevest Developments" },
      { property: "og:description", content: "Legal Notice and corporate information." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Notice"
        title="Legal Notice."
        intro="This website (www.primevestdevelopments.site) is operated by Primevest Commercial Investment and Management FZCO."
      />

      <section className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-10">
          {[
            { t: "Purpose of the Website", c: "This website is intended to provide general information about the services offered by the Company, including real estate intermediation, asset management, and hospitality management. The content does not constitute financial, legal, or investment advice." },
            { t: "Limitation of Liability", c: "The Company makes reasonable efforts to ensure the accuracy of the information provided. However, no guarantees are made regarding completeness or accuracy. The Company shall not be liable for any damages arising from the use of this website." },
            { t: "Intellectual Property", c: "All content on this website (texts, graphics, logos) is the property of the Company unless otherwise stated. Unauthorized use or reproduction is strictly prohibited." },
            { t: "Governing Law", c: "This website is governed by the laws and regulations of the United Arab Emirates." },
          ].map((b) => (
            <div key={b.t}>
              <h2 className="text-2xl">{b.t}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.c}</p>
              <div className="rule mt-5" />
            </div>
          ))}
        </div>

        <aside className="md:col-span-5 md:pl-10 md:border-l border-border">
          <div className="eyebrow">Company information</div>
          <dl className="mt-4 space-y-5 text-sm">
            {[
              ["Company name", "Primevest Commercial Investment and Management FZCO"],
              ["Jurisdiction", "Dubai, United Arab Emirates"],
              ["Legal form", "Free Zone Company (FZCO)"],
              ["Registered Authority", "Dubai Integrated Economic Zones Authority (DIEZ)"],
              ["Registered Address", "IFZA Properties, Dubai Silicon Oasis, Dubai, UAE"],
              ["General inquiries", "info@primevestdevelopments.site"],
              ["Compliance", "compliance@primevestdevelopments.site"],
              ["Phone", "+34 616 601 184"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-2 gap-4 border-b border-border pb-4">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </>
  );
}
