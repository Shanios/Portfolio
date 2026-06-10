import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench, GitBranch, Container, Cloud, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const groups = [{
  title: "Languages",
  skills: [{
    name: "Python",
    icon: Code2
  }, {
    name: "JavaScript",
    icon: Code2
  }, {
    name: "SQL",
    icon: Database
  }, {
    name: "HTML",
    icon: Code2
  },{
    name: "CSS",
    icon: Code2
  },{
    name: "C(Basic)",
    icon: Code2
  }]
}, {
  title: "Backend & DB",
  skills: [{
    name: "FastAPI",
    icon: Server
  }, {
    name: "PostgreSQL",
    icon: Database
  }, {
    name: "REST APIs",
    icon: Server
  }, {
    name: "MySQL",
    icon: Database
  }, {
    name: "Oracle",
    icon: Database
  }]
}, {
  title: "Tools",
  skills: [{
    name: "Git",
    icon: GitBranch
  }, {
    name: "Docker",
    icon: Container
  }, {
    name: "AWS",
    icon: Cloud
  }, {
    name: "Linux",
    icon: Wrench
  }]
}];
const list = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
};
const chip = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
};
export function About() {
  return /*#__PURE__*/_jsx("section", {
    id: "about",
    className: "py-24 md:py-32 relative",
    children: /*#__PURE__*/_jsxs("div", {
      className: "mx-auto max-w-6xl px-6",
      children: [/*#__PURE__*/_jsx(SectionHeading, {
        eyebrow: "01 \u2014 About",
        title: "A builder driven by logic."
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid md:grid-cols-5 gap-12 mt-12",
        children: [/*#__PURE__*/_jsxs(motion.div, {
          initial: {
            opacity: 0,
            y: 20
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
            duration: 0.6
          },
          className: "md:col-span-2 space-y-5 text-muted-foreground leading-relaxed",
          children: [/*#__PURE__*/_jsxs("p", {
            children: ["I'm a fresh B.Tech Computer Science graduate from ", /*#__PURE__*/_jsx("span", {
              className: "text-foreground",
              children: "APJ Abdul Kalam Technological University"
            }), ", specialising in backend engineering and applied AI/ML."]
          }), /*#__PURE__*/_jsx("p", {
            children: "I've built end-to-end systems spanning computer vision, real-time surveillance, RAG chatbots, and secure REST APIs \u2014 turning research-grade ideas into production-ready software with Python, PyTorch, FastAPI, and PostgreSQL."
          }), /*#__PURE__*/_jsx("p", {
            children: "When I'm not shipping code, I'm deep in LangChain docs, debugging CUDA memory issues, or figuring out why my vector similarity scores are off."
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "md:col-span-3 space-y-8",
          children: groups.map(g => /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h3", {
              className: "text-sm font-semibold uppercase tracking-widest text-accent mb-4",
              children: g.title
            }), /*#__PURE__*/_jsx(motion.ul, {
              variants: list,
              initial: "hidden",
              whileInView: "show",
              viewport: {
                once: true,
                margin: "-60px"
              },
              className: "flex flex-wrap gap-3",
              children: g.skills.map(s => {
                const Icon = s.icon;
                return /*#__PURE__*/_jsx(motion.li, {
                  variants: chip,
                  children: /*#__PURE__*/_jsxs(motion.div, {
                    whileHover: {
                      y: -4,
                      scale: 1.06
                    },
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    },
                    className: "group relative flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2 backdrop-blur-sm hover:border-accent hover:shadow-[0_8px_24px_-8px_var(--accent-glow)]",
                    children: [/*#__PURE__*/_jsx(Icon, {
                      className: "h-4 w-4 text-accent"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "text-sm font-medium",
                      children: s.name
                    }), /*#__PURE__*/_jsx("span", {
                      className: "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100",
                      children: s.name
                    })]
                  })
                }, s.name);
              })
            })]
          }, g.title))
        })]
      })]
    })
  });
}
