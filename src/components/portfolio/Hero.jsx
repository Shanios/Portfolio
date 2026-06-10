import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profile from "../../assets/profile.jpg";
import { MagneticButton } from "./MagneticButton";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1]
    }
  }
};
export function Hero() {
  return /*#__PURE__*/_jsx("section", {
    id: "home",
    className: "relative pt-28 pb-24 md:pt-36 md:pb-32",
    children: /*#__PURE__*/_jsxs("div", {
      className: "mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center",
      children: [/*#__PURE__*/_jsxs(motion.div, {
        variants: container,
        initial: "hidden",
        animate: "show",
        className: "order-2 md:order-1",
        children: [/*#__PURE__*/_jsx(motion.p, {
          variants: item,
          className: "text-accent font-medium tracking-wider uppercase text-xs",
          children: "Hi there, my name is"
        }), /*#__PURE__*/_jsx(motion.h1, {
          variants: item,
          className: "mt-4 text-5xl md:text-7xl font-bold tracking-tight gradient-text leading-[1.05]",
          children: "Shan Shaji"
        }), /*#__PURE__*/_jsx(motion.h2, {
          variants: item,
          className: "mt-3 text-2xl md:text-3xl font-semibold text-muted-foreground",
          children: "Software Engineer & AI/ML Developer"
        }), /*#__PURE__*/_jsx(motion.p, {
          variants: item,
          className: "mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",
          children: "I build scalable backend systems and robust data pipelines \u2014 turning messy data into reliable APIs and clear insights with Python, FastAPI & PostgreSQL."
        }), /*#__PURE__*/_jsxs(motion.div, {
          variants: item,
          className: "mt-9 flex flex-wrap gap-4",
          children: [/*#__PURE__*/_jsxs(MagneticButton, {
            href: "#projects",
            variant: "primary",
            children: ["View My Work ", /*#__PURE__*/_jsx(ArrowRight, {
              className: "h-4 w-4"
            })]
          }), /*#__PURE__*/_jsxs(MagneticButton, {
            href: "/resume.pdf",
            variant: "ghost",
            download: true,
            children: [/*#__PURE__*/_jsx(Download, {
              className: "h-4 w-4"
            }), " Download Resume"]
          })]
        })]
      }), /*#__PURE__*/_jsx(motion.div, {
        initial: {
          opacity: 0,
          scale: 0.9
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        transition: {
          duration: 0.8,
          ease: [0.2, 0.8, 0.2, 1]
        },
        className: "order-1 md:order-2 flex justify-center md:justify-end",
        children: /*#__PURE__*/_jsxs("div", {
          className: "relative",
          style: {
            animation: "float-bob 4s ease-in-out infinite"
          },
          children: [/*#__PURE__*/_jsx("div", {
            className: "absolute -inset-2 rounded-[2rem] opacity-80 blur-[2px]",
            style: {
              background: "var(--gradient-ring)",
              animation: "ring-spin 8s linear infinite"
            }
          }), /*#__PURE__*/_jsx("div", {
            className: "relative rounded-[2rem] overflow-hidden border border-border bg-card h-72 w-72 md:h-96 md:w-96",
            children: /*#__PURE__*/_jsx("img", {
              src: profile,
              alt: "Portrait of Shan Shaji",
              width: 768,
              height: 768,
              className: "h-full w-full object-cover"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "absolute -inset-6 -z-10 rounded-full bg-accent/20 blur-3xl"
          })]
        })
      })]
    })
  });
}
