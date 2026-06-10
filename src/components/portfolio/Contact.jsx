import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const socials = [{
  icon: Github,
  href: "https://github.com/Shanios",
  label: "GitHub",
  anim: "spin"
}, {
  icon: Linkedin,
  href: "https://www.linkedin.com/in/shanshajipoyyakarayil/",
  label: "LinkedIn",
  anim: "bounce"
}, {
  icon: Mail,
  href: "mailto:shanshajisharon@gmail.com",
  label: "Email",
  anim: "spin"
}];
export function Contact() {
  return /*#__PURE__*/_jsxs("section", {
    id: "contact",
    className: "py-24 md:py-36",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "mx-auto max-w-3xl px-6 text-center",
      children: [/*#__PURE__*/_jsx(SectionHeading, {
        eyebrow: "04 \u2014 Contact",
        title: "Let's build something."
      }), /*#__PURE__*/_jsx("p", {
        className: "mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto",
        children: "I'm currently open to backend, full-stack, and AI/ML engineering opportunities. Drop me a line \u2014 I reply to every message."
      }), /*#__PURE__*/_jsx("div", {
        className: "mt-10 flex justify-center",
        children: /*#__PURE__*/_jsxs(MagneticButton, {
          href: "mailto:shanshajisharon@gmail.com",
          variant: "primary",
          children: [/*#__PURE__*/_jsx(Mail, {
            className: "h-4 w-4"
          }), " Say Hello"]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "mt-12 flex items-center justify-center gap-5",
        children: socials.map(s => {
          const Icon = s.icon;
          return /*#__PURE__*/_jsx(motion.a, {
            href: s.href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": s.label,
            whileHover: s.anim === "spin" ? {
              rotate: 360,
              scale: 1.1
            } : {
              y: -6,
              scale: 1.1
            },
            transition: {
              type: "spring",
              stiffness: 250,
              damping: 12
            },
            className: "flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-accent hover:border-accent hover:shadow-[0_0_24px_var(--accent-glow)] transition-colors",
            children: /*#__PURE__*/_jsx(Icon, {
              className: "h-5 w-5"
            })
          }, s.label);
        })
      })]
    }), /*#__PURE__*/_jsxs("footer", {
      className: "mt-24 text-center text-xs text-muted-foreground",
      children: ["\xA9 ", new Date().getFullYear(), " Shan Shaji. Crafted with care."]
    })]
  });
}
