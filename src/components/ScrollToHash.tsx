import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    let attempts = 0;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < 10) {
        window.requestAnimationFrame(scrollToTarget);
      }
    };

    window.requestAnimationFrame(scrollToTarget);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;