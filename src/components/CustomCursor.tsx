import { motion, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type CursorState = {
  visible: boolean;
  interactive: boolean;
};

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "[role='button']",
  "[data-cursor='interactive']",
  ".service-card",
  ".magnetic"
].join(",");

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>({
    visible: false,
    interactive: false
  });

  const ringX = useSpring(0, { stiffness: 260, damping: 24, mass: 0.45 });
  const ringY = useSpring(0, { stiffness: 260, damping: 24, mass: 0.45 });
  const dotX = useSpring(0, { stiffness: 900, damping: 42, mass: 0.2 });
  const dotY = useSpring(0, { stiffness: 900, damping: 42, mass: 0.2 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateCapability = () => {
      setEnabled(media.matches);
    };

    updateCapability();
    media.addEventListener("change", updateCapability);

    return () => {
      media.removeEventListener("change", updateCapability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor-enabled");
      return;
    }

    document.documentElement.classList.add("custom-cursor-enabled");

    const onMouseMove = (event: MouseEvent) => {
      const nextX = event.clientX;
      const nextY = event.clientY;
      const target = (event.target as HTMLElement | null)?.closest(INTERACTIVE_SELECTOR);

      setState({
        visible: true,
        interactive: Boolean(target)
      });

      dotX.set(nextX);
      dotY.set(nextY);
      ringX.set(nextX);
      ringY.set(nextY);
    };

    const onMouseLeave = () => {
      setState((prev) => ({ ...prev, visible: false, interactive: false }));
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [dotX, dotY, enabled, ringX, ringY]);

  const ringVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.6 },
      visible: { opacity: 1, scale: state.interactive ? 1.5 : 1 }
    }),
    [state.interactive]
  );

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ left: ringX, top: ringY }}
        animate={state.visible ? "visible" : "hidden"}
        variants={ringVariants}
        transition={{ duration: 0.22, ease: "easeOut" }}
      />
      <motion.div
        className="cursor-dot"
        style={{ left: dotX, top: dotY }}
        animate={{
          opacity: state.visible ? 1 : 0,
          scale: state.interactive ? 0.55 : 1
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </>
  );
};

export default CustomCursor;
