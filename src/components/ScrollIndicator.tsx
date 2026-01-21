import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <div className="flex justify-center py-8">
      <motion.div
        className="w-8 h-14 rounded-full border-2 border-primary/40 flex justify-center p-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-1.5 h-3 bg-primary rounded-full"
          animate={{
            y: [0, 16, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;
