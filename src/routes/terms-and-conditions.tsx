import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Primevest Developments" },
      { name: "description", content: "Terms and Conditions governing the use of the Primevest Developments website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const sections: { t: string; c?: string; list?: string[] }[] = [
    { t: "1. Acceptance of Terms", c: "By accessing this website, you agree to these Terms and Conditions." },
    { t: "2. Nature of Information", c: "All information provided is for general informational purposes only. Nothing on this website constitutes:", list: ["Financial advice", "Investment advice", "Legal advice"] },
    { t: "3. No Offer", c: "The website does not constitute an offer to buy or sell any real estate asset or financial product. All transactions are subject to separate agreements." },
    { t: "4. User Obligations", c: "Users agree to:", list: ["Use the website lawfully", "Not misuse content", "Not attempt unauthorized access"] },
    { t: "5. Limitation of Liability", c: "The Company shall not be liable for:", list: ["Errors in content", "Website interruptions", "Any indirect damages"] },
    { t: "6. External Links", c: "The Company is not responsible for third-party websites linked from this site." },
    { t: "7. Governing Law", c: "These terms are governed by UAE law." },
    { t: "8. Modifications", c: "The Company reserves the right to update these terms at any time." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Terms & Conditions"
        title="Terms governing the use of this website."
        intro="These Terms and Conditions govern the access to and use of the website www.primevestdevelopments.site, operated by Primevest Commercial Investment and Management FZCO."
      />
      <section className="container-prose py-20 max-w-3xl space-y-10">
        {sections.map((s) => (
          <div key={s.t}>
            <h2 className="text-2xl">{s.t}</h2>
            {s.c && <p className="mt-3 text-muted-foreground leading-relaxed">{s.c}</p>}
            {s.list && (
              <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                {s.list.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
            <div className="rule mt-5" />
          </div>
        ))}
      </section>
    </>
  );
}
