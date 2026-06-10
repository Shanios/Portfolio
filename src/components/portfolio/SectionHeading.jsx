import { motion } from "framer-motion";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SectionHeading({
  eyebrow,
  title
}) {
  return /*#__PURE__*/_jsxs(motion.div, {
    initial: {
      opacity: 0,
      y: 16
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      margin: "-80px"
    },
    transition: {
      duration: 0.5
    },
    children: [/*#__PURE__*/_jsx("p", {
      className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent",
      children: eyebrow
    }), /*#__PURE__*/_jsx("h2", {
      className: "mt-3 text-3xl md:text-5xl font-bold tracking-tight",
      children: title
    }), /*#__PURE__*/_jsx("div", {
      className: "mt-4 h-px w-24 bg-gradient-to-r from-accent to-transparent"
    })]
  });
}
