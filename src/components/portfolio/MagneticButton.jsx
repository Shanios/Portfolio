import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  download,
  ariaLabel
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });
  const handleMove = e => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({
      x: x * 0.25,
      y: y * 0.35
    });
  };
  const reset = () => setPos({
    x: 0,
    y: 0
  });
  const base = "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-colors";
  const styles = variant === "primary" ? "bg-accent text-accent-foreground shadow-[0_8px_30px_-6px_var(--accent-glow)] hover:shadow-[0_12px_40px_-6px_var(--accent-glow)]" : "border border-border text-foreground hover:border-accent hover:text-accent";
  const inner = /*#__PURE__*/_jsx(motion.span, {
    animate: {
      x: pos.x,
      y: pos.y
    },
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      mass: 0.3
    },
    className: "inline-flex items-center gap-2",
    children: children
  });
  if (href) {
    return /*#__PURE__*/_jsx("a", {
      ref: ref,
      href: href,
      download: download,
      "aria-label": ariaLabel,
      onMouseMove: handleMove,
      onMouseLeave: reset,
      className: `${base} ${styles}`,
      children: inner
    });
  }
  return /*#__PURE__*/_jsx("button", {
    ref: ref,
    onClick: onClick,
    "aria-label": ariaLabel,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    className: `${base} ${styles}`,
    children: inner
  });
}
