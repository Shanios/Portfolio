import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const nodes = [{
  icon: Briefcase,
  title: "Python Developer Intern",
  org: "QSpiders",
  date: "May 2026 — Present",
  description: "Working on Python-based backend development, strengthening skills in automation, data handling, and server-side application logic."
}, {
  icon: Briefcase,
  title: "MERN Stack Intern",
  org: "Luminar Technolab",
  date: "2025",
  description: "Built full-stack web applications using MongoDB, Express, React, and Node.js. Developed RESTful APIs, implemented JWT authentication, and worked on real-time features."
}, {
  icon: GraduationCap,
  title: "B.Tech, Computer Science",
  org: "APJ Abdul Kalam Technological University",
  date: "2022 — 2026",
  description: "Focused on data structures, algorithms, distributed systems, and AI/ML. Built end-to-end projects spanning computer vision, real-time APIs, and full-stack web applications."
}];
function TimelineNode({
  node,
  index
}) {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start 80%", "start 40%"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const Icon = node.icon;
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    className: "relative pl-20 pb-16 last:pb-0",
    children: [/*#__PURE__*/_jsx(motion.div, {
      style: {
        scale,
        boxShadow: useTransform(glow, v => `0 0 ${v * 30}px ${v * 8}px var(--accent-glow)`)
      },
      className: "absolute left-4 top-1 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-background",
      children: /*#__PURE__*/_jsx(Icon, {
        className: "h-4 w-4 text-accent"
      })
    }), /*#__PURE__*/_jsxs(motion.div, {
      initial: {
        opacity: 0,
        x: 20
      },
      whileInView: {
        opacity: 1,
        x: 0
      },
      viewport: {
        once: true,
        margin: "-80px"
      },
      transition: {
        duration: 0.5,
        delay: index * 0.1
      },
      className: "rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm hover:border-accent transition-colors",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "text-lg font-semibold",
          children: node.title
        }), /*#__PURE__*/_jsx("span", {
          className: "text-xs font-medium text-accent tracking-wider",
          children: node.date
        })]
      }), /*#__PURE__*/_jsx("p", {
        className: "mt-1 text-sm text-muted-foreground",
        children: node.org
      }), /*#__PURE__*/_jsx("p", {
        className: "mt-3 text-sm text-muted-foreground leading-relaxed",
        children: node.description
      })]
    })]
  });
}
export function Timeline() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return /*#__PURE__*/_jsx("section", {
    id: "timeline",
    className: "py-24 md:py-32",
    children: /*#__PURE__*/_jsxs("div", {
      className: "mx-auto max-w-4xl px-6",
      children: [/*#__PURE__*/_jsx(SectionHeading, {
        eyebrow: "03 \u2014 Journey",
        title: "Experience & education."
      }), /*#__PURE__*/_jsxs("div", {
        ref: ref,
        className: "relative mt-14",
        children: [/*#__PURE__*/_jsx("div", {
          className: "absolute left-4 top-0 bottom-0 w-px bg-border"
        }), /*#__PURE__*/_jsx(motion.div, {
          style: {
            height: lineHeight
          },
          className: "absolute left-4 top-0 w-px bg-gradient-to-b from-accent to-accent/0 shadow-[0_0_8px_var(--accent-glow)]"
        }), nodes.map((n, i) => /*#__PURE__*/_jsx(TimelineNode, {
          node: n,
          index: i
        }, n.title))]
      })]
    })
  });
}
