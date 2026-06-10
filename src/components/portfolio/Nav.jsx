import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const links = [{
  href: "#about",
  label: "About"
}, {
  href: "#projects",
  label: "Work"
}, {
  href: "#timeline",
  label: "Journey"
}, {
  href: "#contact",
  label: "Contact"
}];
export function Nav() {
  return /*#__PURE__*/_jsx("header", {
    className: "fixed top-3 left-0 right-0 z-40 flex justify-center px-4",
    children: /*#__PURE__*/_jsxs("nav", {
      className: "flex items-center gap-1 rounded-full border border-border bg-background/60 px-2 py-1.5 backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]",
      children: [/*#__PURE__*/_jsx("a", {
        href: "#home",
        className: "px-3 py-1.5 text-sm font-bold gradient-text",
        children: "Home"
      }), /*#__PURE__*/_jsx("span", {
        className: "mx-1 h-4 w-px bg-border"
      }), links.map(l => /*#__PURE__*/_jsx("a", {
        href: l.href,
        className: "rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors",
        children: l.label
      }, l.href))]
    })
  });
}
