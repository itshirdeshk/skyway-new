import { motion } from "framer-motion";

const LiquidBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary blob - Teal */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-blob-1 opacity-20 blur-[100px]"
        style={{ top: "-10%", right: "-10%" }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary blob - Deep blue */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blob-2 opacity-15 blur-[100px]"
        style={{ top: "40%", left: "-5%" }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent blob - Gold */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-blob-3 opacity-15 blur-[100px]"
        style={{ bottom: "10%", right: "20%" }}
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LiquidBlobs;
