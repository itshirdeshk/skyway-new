import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Briefcase, BookOpen, ArrowUpRight, Globe, Percent, Home, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [{
  icon: GraduationCap,
  title: "Admission Services",
  subtitle: "India & International",
  description: "Get admitted to top universities across India and internationally with special discounts. Expert guidance for your educational journey.",
  features: ["Special Discounts", "Pan-India Coverage", "International Universities"],
  iconSecondary: Globe,
  highlight: "Up to 30% Off",
  external: false
}, {
  icon: Code2,
  title: "Tech Solutions",
  subtitle: "Digital Excellence",
  description: "Complete technology solutions including website development, app development, and digital transformation services.",
  features: ["Web Development", "CRM Development", "Digital Solutions"],
  iconSecondary: Percent,
  highlight: "Premium Quality",
  external: true
}, {
  icon: Briefcase,
  title: "Work From Home",
  subtitle: "Flexible Opportunities",
  description: "Genuine work-from-home opportunities for those seeking flexible income. Earn ₹15,000 - ₹20,000 per month with our verified programs.",
  features: ["Flexible Hours", "Verified Programs", "Regular Payouts"],
  iconSecondary: Home,
  highlight: "₹15K-20K/Month",
  external: false
}, {
  icon: BookOpen,
  title: "Academic Services",
  subtitle: "Research Excellence",
  description: "Professional assistance for dissertations, thesis writing, research papers, and project work. Expert academic support you can trust.",
  features: ["Dissertation Help", "Thesis Writing", "Research Papers"],
  iconSecondary: FileText,
  highlight: "Expert Support",
  external: false
}, {
  icon: Users,
  title: "Career Counseling",
  subtitle: "Professional Guidance",
  description: "Expert career counseling to help you make informed decisions about your professional future. Personalized guidance for students and professionals.",
  features: ["Career Planning", "Skill Assessment", "Industry Insights"],
  iconSecondary: Briefcase,
  highlight: "1-on-1 Sessions",
  external: false
}];
const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
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
        {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }}>
          <motion.div whileHover={{
            y: -8,
            scale: 1.01
          }} transition={{
            duration: 0.3
          }} className="service-card glass-card rounded-3xl p-8 h-full group cursor-pointer">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
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
              <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                {service.highlight}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {service.features.map(feature => <span key={feature} className="px-3 py-1.5 bg-muted rounded-lg text-sm text-foreground/80">
                {feature}
              </span>)}
            </div>
          </motion.div>
        </motion.div>)}
      </div>
    </div>
  </section>;
};
export default ServicesSection;