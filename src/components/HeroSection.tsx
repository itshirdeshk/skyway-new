import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Aurora from "./Aurora";
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <Aurora
          colorStops={["#123A72", "#2EA6B4", "#F0B548"]}
          speed={0.75}
          blend={0.58}
          amplitude={0.9}
        />
      </div>



      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">Your Gateway to Success</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Elevate Your</span>
            <br />
            <span className="gradient-text">Future with</span>
            <br />
            <span className="text-foreground">Skyway</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Your trusted partner for education admissions, technology solutions, work from home opportunities, and academic
            excellence. We turn your aspirations into achievements.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="btn-primary magnetic text-primary-foreground rounded-2xl px-8 py-6 text-lg font-medium shadow-lifted hover:shadow-glow transition-all duration-300 group"
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-outline-shimmer magnetic rounded-2xl px-8 py-6 text-lg font-medium border-2 hover:bg-primary/5 transition-all duration-300"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 px-[11px] mx-0 py-0 my-[100px]"
          >
            {[
              {
                value: "100+",
                label: "Students Placed",
              },
              {
                value: "20+",
                label: "Partner Institutions",
              },
              {
                value: "5+",
                label: "Projects Delivered",
              },
              {
                value: "50+",
                label: "Opportunities Provided",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="glass-card hover-card-spotlight rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
