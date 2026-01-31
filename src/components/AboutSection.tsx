import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Trusted Excellence",
    description: "Years of proven track record in delivering quality services across all verticals.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "We put our clients first, ensuring personalized solutions for every individual need.",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description: "Our focus is always on delivering measurable outcomes that matter to you.",
  },
];

const highlights = [
  "Expert guidance for admissions",
  "Professional tech development team",
  "Verified work-from-home opportunities",
  "Ph.D. qualified academic consultants",
  "24/7 support availability",
  "Transparent pricing with no hidden costs",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-10 relative overflow-hidden" ref={ref}>
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-medium mb-4">
              About Skyway
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Your Partner in{" "}
              <span className="gradient-text">Building Tomorrow</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Skyway, we believe in creating pathways to success. Whether you're 
              seeking educational opportunities, technological solutions, flexible work 
              arrangements, or academic support, we're here to guide you every step of the way.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-5 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
