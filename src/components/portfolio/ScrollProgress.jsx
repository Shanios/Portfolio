import { motion, useScroll, useSpring } from "framer-motion";
import { jsx as _jsx } from "react/jsx-runtime";
export function ScrollProgress() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2
  });
  return /*#__PURE__*/_jsx(motion.div, {
    style: {
      scaleX,
      transformOrigin: "0% 50%"
    },
    className: "fixed top-0 left-0 right-0 h-[3px] bg-accent z-50 shadow-[0_0_10px_var(--accent-glow)]"
  });
}
