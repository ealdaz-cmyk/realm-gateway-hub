import { Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteLayout } from "../components/SiteLayout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Surf & Wellness Community — International Real Estate & Hospitality" },
      { name: "description", content: "Surf & Wellness Community is an international real estate and hospitality management company headquartered in Dubai, operating lifestyle properties across Europe, Indonesia, LATAM and the UAE." },
      { name: "author", content: "Surf & Wellness Community FZ-LLC" },
      { property: "og:title", content: "Surf & Wellness Community — International Real Estate & Hospitality" },
      { property: "og:description", content: "Surf & Wellness Community is an international real estate and hospitality management company headquartered in Dubai, operating lifestyle properties across Europe, Indonesia, LATAM and the UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Surf & Wellness Community — International Real Estate & Hospitality" },
      { name: "twitter:description", content: "Surf & Wellness Community is an international real estate and hospitality management company headquartered in Dubai, operating lifestyle properties across Europe, Indonesia, LATAM and the UAE." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/273d3768-e110-4ed3-97db-086bf2b515c2/id-preview-ff970a6a--1303e2d7-4a44-47af-a6f4-430f9530b1d5.lovable.app-1777640841910.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/273d3768-e110-4ed3-97db-086bf2b515c2/id-preview-ff970a6a--1303e2d7-4a44-47af-a6f4-430f9530b1d5.lovable.app-1777640841910.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <SiteLayout />;
}
