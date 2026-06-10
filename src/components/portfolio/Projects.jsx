import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import p1 from "../../assets/project-1.jpg";
import p2 from "../../assets/project-2.jpg";
import p3 from "../../assets/project-3.jpg";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const projects = [{
  title: "Steins Gate — AI Surveillance",
  pitch: "Smart home security system with anomaly detection (98.67% accuracy), fall detection via YOLO-Pose+LSTM, and contactless heart rate monitoring using rPPG. Streams real-time alerts via WebSockets and Twilio.",
  tags: ["PyTorch", "YOLOv8", "FastAPI", "WebSockets", "React"],
  image: p1,
  repo: "https://github.com/Shanios/Steins_Gate",
  live: "#"
}, {
  title: "Criminal Face Detection",
  pitch: "End-to-end ML surveillance system with 99.3% face recognition accuracy at 30+ FPS, capable of scanning 8–16 concurrent feeds against a 50,000+ offender database using Faiss vector search.",
  tags: ["FaceNet", "FastAPI", "PostgreSQL", "Faiss", "Docker"],
  image: p2,
  repo: "https://github.com/Shanios/BELLO_MESSAGING_APP",
  live: "#"
}, {
  title: "Student Engagement Platform",
  pitch: "Full-stack platform with webcam-based engagement detection (OpenCV + MediaPipe), a RAG chatbot powered by Groq LLM, ZegoCloud video calls, and automated attendance analytics. Deployed on Railway + Vercel.",
  tags: ["FastAPI", "PostgreSQL", "React", "Groq API", "SQLAlchemy"],
  image: p3,
  repo: "https://github.com/Shanios/student_engagement_final_with_db",
  live: "#"
}];
export function Projects() {
  return /*#__PURE__*/_jsx("section", {
    id: "projects",
    className: "py-24 md:py-32",
    children: /*#__PURE__*/_jsxs("div", {
      className: "mx-auto max-w-6xl px-6",
      children: [/*#__PURE__*/_jsx(SectionHeading, {
        eyebrow: "02 \u2014 Work",
        title: "Featured projects."
      }), /*#__PURE__*/_jsx("div", {
        className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        children: projects.map((p, i) => /*#__PURE__*/_jsxs(motion.article, {
          initial: {
            opacity: 0,
            y: 30
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: true,
            margin: "-60px"
          },
          transition: {
            duration: 0.55,
            delay: i * 0.12,
            ease: [0.2, 0.8, 0.2, 1]
          },
          className: "glow-card glow-card-hover group flex flex-col rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden",
          children: [/*#__PURE__*/_jsx("div", {
            className: "aspect-[16/10] overflow-hidden bg-muted",
            children: /*#__PURE__*/_jsx("img", {
              src: p.image,
              alt: p.title,
              loading: "lazy",
              width: 800,
              height: 500,
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            })
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex flex-1 flex-col p-6",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "text-lg font-semibold",
              children: p.title
            }), /*#__PURE__*/_jsx("p", {
              className: "mt-2 text-sm text-muted-foreground flex-1",
              children: p.pitch
            }), /*#__PURE__*/_jsx("div", {
              className: "mt-4 flex flex-wrap gap-2",
              children: p.tags.map(t => /*#__PURE__*/_jsx("span", {
                className: "rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground",
                children: t
              }, t))
            }), /*#__PURE__*/_jsxs("div", {
              className: "mt-5 flex items-center gap-4 text-sm",
              children: [/*#__PURE__*/_jsxs("a", {
                href: p.repo,
                className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors",
                children: [/*#__PURE__*/_jsx(Github, {
                  className: "h-4 w-4"
                }), " Code"]
              }), /*#__PURE__*/_jsxs("a", {
                href: p.live,
                className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors",
                children: [/*#__PURE__*/_jsx(ExternalLink, {
                  className: "h-4 w-4"
                }), " Live"]
              })]
            })]
          })]
        }, p.title))
      })]
    })
  });
}
