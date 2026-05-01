import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import wellness from "@/assets/wellness.jpg";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Global Community & Demand Network — Surf & Wellness Community" },
      { name: "description", content: "SWC's global community of surf and wellness users acts as a demand engine that drives occupancy and revenue performance for the real estate assets we manage." },
      { property: "og:title", content: "Global Community & Demand Network — SWC" },
      { property: "og:description", content: "A demand network of +5,000 surf schools, yoga centers, wellness studios and retreat operators feeding qualified guests into managed properties." },
      { property: "og:image", content: wellness },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Community & Demand Network"
        title="Access to a growing international network of surf and wellness users."
        intro="Our community is not the business — it is a strategic asset that generates demand and occupancy for the real estate properties we operate."
      />

      <section className="container-prose py-20 grid md:grid-cols-12 gap-12 items-start">
        <img
          src={wellness}
          alt="Global surf and wellness community"
          width={1280}
          height={960}
          loading="lazy"
          className="md:col-span-5 aspect-[4/5] object-cover"
        />
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
          <p>
            Surf & Wellness Community has access to a global community of
            surf and wellness enthusiasts cultivated over years of
            operations across Europe, Indonesia, Latin America and the
            Middle East.
          </p>
          <p>
            This network includes a structured ecosystem of surf schools,
            yoga centers, wellness studios and retreat operators that
            collectively reach an international audience of qualified
            travellers actively seeking lifestyle accommodation.
          </p>
          <p className="border-l-2 border-foreground pl-5 text-foreground">
            Our community is not just a brand asset — it is a demand
            engine that supports the performance of the real estate
            assets we manage.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-20">
          <div className="eyebrow">Network composition</div>
          <h2 className="mt-3 text-3xl md:text-4xl max-w-3xl">A structured ecosystem of operators and end-users.</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              ["+5,000", "Surf schools connected across global coastlines."],
              ["Yoga centers", "Independent studios and franchises in active markets."],
              ["Wellness studios", "Holistic, fitness and recovery centers."],
              ["Retreat operators", "Independent operators organising international retreats."],
            ].map(([t, c]) => (
              <div key={t} className="bg-background p-6">
                <div className="font-display text-2xl">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="eyebrow">Why it matters for the operating model</div>
        <h2 className="mt-3 text-3xl md:text-4xl max-w-3xl">A demand engine for the properties we manage.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {[
            ["Drives occupancy", "Channels a continuous flow of qualified guests into managed accommodations across all regions of operation."],
            ["Reduces vacancy risk", "Direct demand reduces dependency on third-party OTAs and stabilises cash flows for property owners."],
            ["Improves revenue performance", "Higher occupancy and longer average stays support RevPAR and management fee growth."],
          ].map(([t, c]) => (
            <div key={t}>
              <div className="rule mb-4" />
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="container-prose py-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <div className="eyebrow">Position within the group</div>
            <h2 className="mt-3 text-2xl md:text-3xl leading-tight">
              The community is a strategic asset — not a stand-alone business line.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Revenue is generated by SWC through real estate services
              and hospitality operations. The community network exists
              to support and de-risk those revenue streams.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/business-model"
              className="inline-block px-6 py-3 border border-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              See the business model
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}