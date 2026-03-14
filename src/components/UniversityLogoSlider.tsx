import { UNIVERSITY_PARTNERS } from "@/data/universities";
import { ExternalLink } from "lucide-react";

const marqueeItems = [...UNIVERSITY_PARTNERS, ...UNIVERSITY_PARTNERS];

const getDomainFromUrl = (website: string) => {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website.replace(/^https?:\/\//, "").replace(/^www\./, "");
  }
};

const getFaviconFallback = (website: string) => {
  const domain = getDomainFromUrl(website);
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
};

const UniversityLogoSlider = () => {
  return (
    <section className="mt-20">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-block text-secondary font-medium mb-3">University Tie-Ups</span>
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Trusted By Leading <span className="gradient-text">University Partners</span>
        </h3>
        <p className="text-muted-foreground">
          Hover over a logo to see the university name. Click to visit the official website.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card/50 py-6">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max items-center gap-5 animate-marquee-left hover:[animation-play-state:paused]">
          {marqueeItems.map((university, index) => (
            <a
              key={`${university.name}-${index}`}
              href={university.website}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-background/80 px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              aria-label={university.name}
            >
              <img
                src={university.logoUrl}
                alt={university.name}
                loading="lazy"
                className="max-h-14 w-auto max-w-full object-contain"
                onError={(event) => {
                  const image = event.currentTarget;

                  if (image.dataset.fallbackStep === "favicon") {
                    image.src = "/skyway_logo.png";
                    image.dataset.fallbackStep = "local";
                    return;
                  }

                  if (!image.dataset.fallbackStep) {
                    image.src = getFaviconFallback(university.website);
                    image.dataset.fallbackStep = "favicon";
                  }
                }}
              />

              <div className="pointer-events-none absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg bg-primary px-3 py-1 text-xs text-primary-foreground opacity-0 shadow-md transition-all duration-200 group-hover:-bottom-6 group-hover:opacity-100">
                <span className="whitespace-nowrap">{university.name}</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityLogoSlider;
