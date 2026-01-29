import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, MapPin, ArrowRight, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

const contactInfo = [
  {
    icon: User,
    label: "Founder and Co-Founder",
    value: "Priya Khandelwal and Hirdesh Khandelwal",
    href: "#contact",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@myskyway.org",
    href: "mailto:info@myskyway.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8941092974",
    href: "tel:+918941092974",
  },

];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      emailjs
        .sendForm('service_bs7r9a8', 'template_bdja9m8', formRef.current, { publicKey: "r9hWl1Umnf8ICtDLk" })
        .then(() => {
          formRef.current?.reset();
          toast.success("Message sent successfully!");
          setIsSubmitting(false);
        }, (error) => {
          setIsSubmitting(false);
          toast.success("Message didn't send successfully! Try to send it again.");
          console.log(error);
        });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary font-medium mb-4">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to <span className="gradient-text">Start Your Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? We're here to help. Reach out and let's discuss how we can support your
              goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                      <Input
                        type="text"
                        name="user_name"
                        placeholder="Enter your beautiful name"
                        required
                        className="rounded-xl h-12 border-border/50 focus:border-secondary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                      <Input
                        type="tel"
                        name="user_phone"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="rounded-xl h-12 border-border/50 focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      name="user_email"
                      placeholder="Enter your email"
                      required
                      className="rounded-xl h-12 border-border/50 focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service Interested In</label>
                    <Input
                      type="text"
                      name="service_interest"
                      placeholder="e.g., Admission, Tech Work, WFH, Academic Support"
                      className="rounded-xl h-12 border-border/50 focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Your Message</label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      name="message"
                      rows={4}
                      required
                      className="rounded-xl border-border/50 focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-primary-foreground rounded-xl h-12 text-lg font-medium shadow-soft hover:shadow-glow transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="glass-card rounded-2xl p-6 flex items-center gap-5 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="glass-card rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10"
              >
                <h4 className="font-serif text-xl font-bold mb-3">Need Tech Services?</h4>
                <p className="text-muted-foreground mb-4">
                  Visit our dedicated technology portal for web and app development.
                </p>
                <Button asChild variant="outline" className="w-full rounded-xl group hover:bg-primary/5">
                  <a href="https://tejovah.com" target="_blank" rel="noopener noreferrer">
                    Visit Tejovah.com
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
