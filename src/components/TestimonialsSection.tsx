import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
    {
        name: "Kushal Yadav",
        designation: "Business Owner",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        review: "Skyway delivered an exceptional website for my business. The design is modern, responsive, and exactly what I envisioned. Their technical expertise and attention to detail made the entire process smooth and professional.",
        rating: 5,
    },
    {
        name: "Shurbhi Agarwal",
        designation: "Engineering Graduate",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
        review: "The career counseling session at Skyway was incredibly insightful. They helped me identify my strengths and guided me toward the right career path. The personalized advice gave me the confidence I needed to pursue my goals.",
        rating: 5,
    },
    {
        name: "Gopal Agarwal",
        designation: "MBA Student",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        review: "Thanks to Skyway's admission services, I got into a top MBA program with a great scholarship. Their expert guidance and support throughout the application process was invaluable. Highly recommend their services!",
        rating: 5,
    },
    {
        name: "Shweta Khandelwal",
        designation: "Freelance Professional",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        review: "The work-from-home opportunity provided by Skyway has been life-changing. It's genuine, flexible, and the earnings are consistent. I can now balance my professional and personal life perfectly while earning a stable income.",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="testimonials" className="py-10 relative overflow-hidden" ref={ref}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

            <div className="container relative z-10 px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block text-secondary font-medium mb-4">
                        Client Success Stories
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Real experiences from real people who have transformed their journey with Skyway
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="glass-card p-8 h-full flex flex-col relative overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border/50 rounded-xl">
                                {/* Quote Icon */}
                                <div className="absolute -top-2 -right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                    <Quote className="w-24 h-24 text-accent" />
                                </div>

                                {/* Review Text */}
                                <p className="text-foreground/80 mb-6 flex-grow leading-relaxed">
                                    "{testimonial.review}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-full overflow-hidden ring-accent/20 group-hover:ring-accent/40 transition-all duration-300">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                                                <User className="w-6 h-6 text-primary-foreground" />
                                            </div>
                                        </div>
                                        {/* Verified Badge */}
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center ring-2 ring-background">
                                            <svg
                                                className="w-3 h-3 text-background"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground mb-4">
                        Join hundreds of satisfied clients who have achieved their goals with us
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex -space-x-3">
                            {testimonials.slice(0, 4).map((testimonial, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-background"
                                >
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-medium text-foreground/80">
                            +500 Happy Clients
                        </span>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default TestimonialsSection;
