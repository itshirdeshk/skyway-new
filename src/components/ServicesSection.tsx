import { motion, useInView } from "framer-motion";
import { type ComponentType, type MouseEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Code2, Briefcase, BookOpen, ArrowUpRight, Globe, Percent, Home, FileText, Users } from "lucide-react";
import { SERVICES, type ServiceIconKey } from "@/data/services";
import UniversityLogoSlider from "@/components/UniversityLogoSlider";

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

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const handleSpotlightMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--spot-x", `${x}%`);
    card.style.setProperty("--spot-y", `${y}%`);
  };

  return <section id="services" className="py-10 relative overflow-hidden" ref={ref}>
    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent py-[50px] mx-[49px] px-[38px] my-[13px]" />

    <div className="container relative z-10 px-4">
      {/* Section Header */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block text-secondary font-medium mb-4">
          Our Services
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Comprehensive Solutions for{" "}
          <span className="gradient-text">Your Success</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          From education to technology, employment to academics – we provide
          end-to-end solutions tailored to your needs.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.iconKey];

          return <motion.div key={service.title} initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }}>
          <Link to={`/services/${service.slug}`} className="block h-full">
            <motion.div whileHover={{
              y: -10,
              scale: 1.02,
              rotateX: 1,
              rotateY: -1
            }} transition={{
              duration: 0.28
            }} onMouseMove={handleSpotlightMove} data-cursor="interactive" className="service-card hover-card-spotlight glass-card rounded-3xl p-8 h-full group cursor-pointer">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium magnetic">
                  {service.highlight}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-7">
                {service.cardFeatures.map(feature => <span key={feature} className="px-3 py-1.5 bg-muted rounded-lg text-sm text-foreground/80">
                  {feature}
                </span>)}
              </div>

              <div className="flex items-center justify-end text-sm font-semibold text-primary">
                <span>View detailed services</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          </Link>
        </motion.div>;
        })}
      </div>

      {/* <UniversityLogoSlider /> */}
    </div>
  </section>;
};

export default ServicesSection;