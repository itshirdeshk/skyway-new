import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <img src="./skyway_logo.png" width={"30px"} height={"30px"}></img>
                  <span className="font-display text-2xl font-bold text-primary">Skyway</span>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Your trusted partner for education, technology, employment, 
                  and academic excellence. Building futures, one success at a time.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-serif font-bold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {["Home", "Services", "About", "Contact"].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-serif font-bold text-foreground mb-4">Services</h4>
                <ul className="space-y-3">
                  {[
                    "Admissions",
                    "Tech Solutions",
                    "Work From Home",
                    "Academic Support",
                  ].map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border/50 my-8" />

            {/* Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Skyway. All rights reserved.
              </p>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground shadow-soft hover:shadow-glow transition-shadow"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
