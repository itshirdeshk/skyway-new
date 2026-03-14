import Footer from "@/components/Footer";
import UniversityLogoSlider from "@/components/UniversityLogoSlider";
import { SERVICES_BY_SLUG, type ServiceIconKey, type ServiceSlug } from "@/data/services";
import { ArrowLeft, ArrowUpRight, BookOpen, Briefcase, Code2, FileText, Globe, GraduationCap, Home, Percent, Users } from "lucide-react";
import { type ComponentType } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const iconMap: Record<ServiceIconKey, ComponentType<{ className?: string }>> = {
  graduationCap: GraduationCap,
  code2: Code2,
  briefcase: Briefcase,
  bookOpen: BookOpen,
  users: Users,
  globe: Globe,
  percent: Percent,
  home: Home,
  fileText: FileText
};

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES_BY_SLUG[slug as ServiceSlug] : undefined;
  const isAdmissionService = service?.slug === "admission-services";

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const PrimaryIcon = iconMap[service.iconKey];
  const SecondaryIcon = iconMap[service.iconSecondaryKey];

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <section className="relative z-10 pt-10 pb-14 px-4">
        <div className="container max-w-6xl">
          <div className="glass-card rounded-3xl px-5 py-4 md:px-8 md:py-5 mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>

            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Request Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-soft">
                  <PrimaryIcon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service Detail</p>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold">{service.title}</h1>
                  <p className="text-muted-foreground">{service.subtitle}</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <SecondaryIcon className="h-4 w-4" />
                {service.highlight}
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{service.detailIntro}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {service.cardFeatures.map((feature) => (
                <span key={feature} className="rounded-lg bg-muted px-3 py-1.5 text-sm text-foreground/80">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {service.detailSections.map((section, index) => (
              <article key={section.title} className="glass-card rounded-2xl p-6">
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary text-sm font-bold">
                  {index + 1}
                </div>
                <h2 className="font-serif text-2xl font-bold mb-3">{section.title}</h2>
                {section.description ? (
                  <p className="text-muted-foreground mb-4 leading-relaxed">{section.description}</p>
                ) : null}
                <ul className="space-y-2">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1 h-2 w-2 rounded-full bg-secondary shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {isAdmissionService ? <UniversityLogoSlider /> : null}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetails;
