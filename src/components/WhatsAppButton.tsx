import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
    const phoneNumber = "918941092974"; // Replace with your WhatsApp number (country code + number, no spaces or +)
    const message = "Hi! I'd like to know more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                {/* Ping Animation */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                
                {/* Button */}
                <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                    <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                        Chat with us on WhatsApp
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-foreground" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
