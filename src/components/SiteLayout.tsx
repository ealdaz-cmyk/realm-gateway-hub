import { Link, Outlet } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/business-model", label: "Business Model" },
  { to: "/value", label: "How We Create Value" },
  { to: "/global-presence", label: "Global Presence" },
  { to: "/legal", label: "Legal" },
  { to: "/contact", label: "Contact" },
] as const;

const LEGAL_LINKS = [
  { to: "/legal", label: "Legal Notice" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/cookies-policy", label: "Cookies Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="h-9 w-9 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-display text-lg leading-none">
        P
      </div>
      <div className="leading-tight">
        <div className="font-display text-lg tracking-tight">Primevest Developments</div>
        <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Real Estate · Investment · Asset Management
        </div>
      </div>
    </Link>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="container-prose flex items-center justify-between gap-6 h-20">
        <Logo />
        <nav className="hidden xl:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
              className="transition-colors whitespace-nowrap"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden xl:inline-flex items-center px-4 py-2 text-sm border border-foreground/80 hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
        >
          Contact
        </Link>
      </div>
      <div className="xl:hidden border-t border-border">
        <nav className="container-prose flex gap-5 overflow-x-auto py-3 text-xs uppercase tracking-wider">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
              className="whitespace-nowrap"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-tight">Primevest Developments</div>
          <p className="mt-3 text-muted-foreground max-w-md">
            Operated by Primevest Commercial Investment and Management FZCO.
            International real estate, investment and asset management
            company headquartered in Dubai, operating across Europe,
            Southeast Asia, Central America and the Middle East.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-wider">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Headquarters</div>
          <address className="not-italic text-foreground/80 leading-relaxed">
            Primevest Commercial Investment<br />
            and Management FZCO<br />
            IFZA Properties, Dubai Silicon Oasis<br />
            Dubai, United Arab Emirates<br />
            <span className="text-muted-foreground">License Authority: DIEZ</span>
          </address>
        </div>
        <div>
          <div className="eyebrow mb-3">Contact</div>
          <ul className="space-y-1 text-foreground/80">
            <li>info@primevestdevelopments.site</li>
            <li>compliance@primevestdevelopments.site</li>
            <li>+34 616 601 184</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Primevest Commercial Investment and Management FZCO. All rights reserved. · www.primevestdevelopments.site</div>
          <div>Licensed by Dubai Integrated Economic Zones Authority (DIEZ)</div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
