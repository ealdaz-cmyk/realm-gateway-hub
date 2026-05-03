import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/cookies-policy")({
  head: () => ({
    meta: [
      { title: "Cookies Policy — Primevest Developments" },
      { name: "description", content: "Cookies Policy of Primevest Commercial Investment and Management FZCO." },
    ],
  }),
  component: CookiesPolicyPage,
});

function CookiesPolicyPage() {
  const sections: { t: string; c?: string; list?: string[] }[] = [
    {
      t: "1. What Are Cookies",
      c: "Cookies are small text files stored on your device when visiting a website.",
    },
    {
      t: "2. Types of Cookies Used",
      list: [
        "Essential cookies (website functionality)",
        "Analytics cookies (traffic analysis)",
      ],
    },
    {
      t: "3. Purpose",
      c: "Cookies are used to:",
      list: [
        "Ensure proper website operation",
        "Analyze user interaction",
        "Improve services",
      ],
    },
    {
      t: "4. Third-Party Cookies",
      c: "We may use third-party services (e.g., analytics tools) that place cookies on your device.",
    },
    {
      t: "5. Managing Cookies",
      c: "Users can manage or disable cookies through their browser settings.",
    },
    {
      t: "6. Consent",
      c: "By using this website, you consent to the use of cookies.",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Cookies Policy"
        title="Use of cookies on this website."
        intro="This website uses cookies to improve user experience and analyze website performance."
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
