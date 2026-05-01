import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Surf & Wellness Community" },
      { name: "description", content: "Contact Surf & Wellness Community FZ-LLC. Headquarters: DMCC Free Zone, Dubai, United Arab Emirates." },
      { property: "og:title", content: "Contact — Surf & Wellness Community" },
      { property: "og:description", content: "Get in touch with our Dubai office." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with our office."
        intro="For partnership opportunities, owner enquiries, investor relations and compliance documentation requests."
      />

      <section className="container-prose py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-8">
          <div>
            <div className="eyebrow">Headquarters</div>
            <address className="not-italic mt-3 leading-relaxed">
              Surf &amp; Wellness Community FZ-LLC<br />
              DMCC Free Zone<br />
              Dubai, United Arab Emirates
            </address>
          </div>
          <div>
            <div className="eyebrow">General enquiries</div>
            <div className="mt-3">info@swc-group.com</div>
          </div>
          <div>
            <div className="eyebrow">Compliance &amp; corporate</div>
            <div className="mt-3">compliance@swc-group.com</div>
          </div>
          <div>
            <div className="eyebrow">Office hours</div>
            <div className="mt-3 text-muted-foreground">Sunday – Thursday, 09:00 – 18:00 GST</div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 border border-border bg-background p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Full name" name="name" required />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Country" name="country" />
          </div>
          <div>
            <label className="eyebrow block mb-2">Subject</label>
            <select name="subject" className="w-full bg-background border border-input px-4 py-3 text-sm">
              <option>General enquiry</option>
              <option>Property owner — management proposal</option>
              <option>Investor enquiry</option>
              <option>Compliance / corporate documentation</option>
            </select>
          </div>
          <div>
            <label className="eyebrow block mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-background border border-input px-4 py-3 text-sm leading-relaxed"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Your information will be used solely to respond to your enquiry.
            </p>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-accent transition-colors"
            >
              Send message
            </button>
          </div>
          {sent && (
            <div className="text-sm text-foreground border-t border-border pt-4">
              Thank you. Our office will get back to you shortly.
            </div>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-input px-4 py-3 text-sm"
      />
    </div>
  );
}
