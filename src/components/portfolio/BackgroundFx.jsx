import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function BackgroundFx() {
  return /*#__PURE__*/_jsxs("div", {
    className: "fixed inset-0 -z-10 overflow-hidden pointer-events-none",
    children: [/*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 dot-grid opacity-60",
      style: {
        animation: "pan-grid 18s linear infinite"
      }
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[140px]"
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.22_270/0.18)] blur-[140px]"
    }), /*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background"
    })]
  });
}
