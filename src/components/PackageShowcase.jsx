import React, { useState } from "react";

const CopyIcon = ({ size = 14, color = "currentColor" }) => (
   <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
   </svg>
);

const CheckIcon = ({ size = 14, color = "currentColor" }) => (
   <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <polyline points="20 6 9 17 4 12" />
   </svg>
);

const ArrowUpRightIcon = ({ size = 13, color = "currentColor" }) => (
   <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
   </svg>
);

const DownloadIcon = ({ size = 13, color = "currentColor" }) => (
   <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
   </svg>
);

const PackageIcon = ({ size = 13, color = "currentColor" }) => (
   <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="M3.29 7 12 12l8.71-5" />
      <line x1="12" y1="22" x2="12" y2="12" />
   </svg>
);

const PACKAGES = [
   {
      id: "deepz-theme",
      kind: "zed",
      kindLabel: "ZED EXTENSION",
      name: "deepz-theme",
      tagline: "Deep dark theme for Zed — Twilight & Void variants.",
      version: "v0.0.1",
      stat: { icon: DownloadIcon, label: "40+ installs" },
      cmd: "zed: install extension deepz-theme",
      url: "https://zed.dev/extensions/deepz-theme",
      accent: "#A78BFA",
      accentSoft: "rgba(167,139,250,0.12)",
      tags: ["Rust", "WASM", "Theme"],
   },
   {
      id: "mntz-kit",
      kind: "npm",
      kindLabel: "NPM PACKAGE",
      name: "mntz-kit",
      tagline: "Lightweight motion helper for DOM entry animations.",
      version: "v0.0.3",
      stat: { icon: PackageIcon, label: "IntersectionObserver" },
      cmd: "npm i mntz-kit",
      url: "https://www.npmjs.com/package/mntz-kit",
      accent: "#A78BFA",
      accentSoft: "rgba(167,139,250,0.12)",
      tags: ["TypeScript", "DOM", "Animation"],
   },
   {
      id: "simple-formatter-utility",
      kind: "npm",
      kindLabel: "NPM PACKAGE",
      name: "simple-formatter-utility",
      tagline: "Formats dates, numbers & currencies via the Intl API.",
      version: "v1.2.0",
      stat: { icon: PackageIcon, label: "Intl-based" },
      cmd: "npm i simple-formatter-utility",
      url: "https://www.npmjs.com/package/simple-formatter-utility",
      accent: "#A78BFA",
      accentSoft: "rgba(167,139,250,0.12)",
      tags: ["TypeScript", "i18n", "Utility"],
   },
];

function PackageCard({ pkg }) {
   const [copied, setCopied] = useState(false);
   const [hovered, setHovered] = useState(false);
   const Icon = pkg.stat.icon;

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(pkg.cmd);
         setCopied(true);
         setTimeout(() => setCopied(false), 1600);
      } catch (e) {}
   };

   return (
      <div
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         style={{
            backgroundColor: "#121417",
            border: `1px solid ${hovered ? pkg.accent : "#22262C"}`,
            boxShadow: hovered
               ? `0 0 0 1px ${pkg.accentSoft}, 0 20px 40px -20px ${pkg.accentSoft}`
               : "none",
            transition:
               "border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
         }}
         className="rounded-xl overflow-hidden flex flex-col"
      >
         <div
            style={{
               borderBottom: "1px solid #22262C",
               backgroundColor: "#0E1013",
            }}
            className="flex items-center gap-2 px-4 py-3"
         >
            <span
               className="w-2.5 h-2.5 rounded-full"
               style={{ backgroundColor: "#3A3F47" }}
            />
            <span
               className="w-2.5 h-2.5 rounded-full"
               style={{ backgroundColor: "#3A3F47" }}
            />
            <span
               className="w-2.5 h-2.5 rounded-full"
               style={{ backgroundColor: "#3A3F47" }}
            />
            <span
               style={{
                  color: "#7C828B",
                  fontFamily: "'JetBrains Mono', monospace",
               }}
               className="ml-2 text-[11px] tracking-wide truncate"
            >
               {pkg.kind === "npm" ? "package.json" : "extension.toml"}
            </span>
            <span
               style={{
                  marginLeft: "auto",
                  color: pkg.accent,
                  backgroundColor: pkg.accentSoft,
                  fontFamily: "'JetBrains Mono', monospace",
               }}
               className="text-[10px] font-semibold tracking-widest px-2 py-0.5 rounded-full shrink-0"
            >
               {pkg.kindLabel}
            </span>
         </div>

         <div className="px-5 py-5 flex flex-col flex-1">
            <div className="flex items-baseline justify-between gap-3">
               <h3
                  style={{
                     fontFamily: "'Space Grotesk', sans-serif",
                     color: "#E8E9EA",
                  }}
                  className="text-lg font-semibold tracking-tight truncate"
               >
                  {pkg.name}
               </h3>
               <span
                  style={{
                     color: "#7C828B",
                     fontFamily: "'JetBrains Mono', monospace",
                  }}
                  className="text-xs shrink-0"
               >
                  {pkg.version}
               </span>
            </div>

            <p
               style={{ color: "#9AA0A9" }}
               className="mt-2 text-sm leading-relaxed"
            >
               {pkg.tagline}
            </p>

            <div
               style={{ color: "#7C828B" }}
               className="mt-4 flex items-center gap-1.5 text-xs"
            >
               <Icon size={13} color={pkg.accent} />
               <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {pkg.stat.label}
               </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
               {pkg.tags.map((t) => (
                  <span
                     key={t}
                     style={{ color: "#9AA0A9", border: "1px solid #22262C" }}
                     className="text-[10px] px-2 py-0.5 rounded-full"
                  >
                     {t}
                  </span>
               ))}
            </div>

            {/* install / view line — terminal-style, doubles as copy target */}
            <button
               onClick={handleCopy}
               style={{
                  backgroundColor: "#0E1013",
                  border: "1px solid #22262C",
                  fontFamily: "'JetBrains Mono', monospace",
               }}
               className="mt-5 w-full flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left group/copy"
            >
               <span className="flex items-center gap-2 text-xs min-w-0">
                  <span style={{ color: pkg.accent }}>$</span>
                  <span style={{ color: "#C7CBD1" }} className="truncate">
                     {pkg.cmd}
                  </span>
               </span>
               {copied ? (
                  <CheckIcon size={14} color={pkg.accent} />
               ) : (
                  <CopyIcon size={14} color="#5A6069" />
               )}
            </button>

            <a
               href={pkg.url}
               target="_blank"
               rel="noreferrer"
               style={{
                  color: pkg.accent,
                  fontFamily: "'JetBrains Mono', monospace",
               }}
               className="mt-4 inline-flex items-center gap-1 text-xs font-medium hover:opacity-80 transition-opacity"
            >
               {pkg.kind === "npm" ? "View on npm" : "View on Zed"}
               <ArrowUpRightIcon size={13} color={pkg.accent} />
            </a>
         </div>
      </div>
   );
}

export default function PackageShowcase() {
   return (
      <section
         style={{ backgroundColor: "#0A0B0D" }}
         className="w-full px-6 py-32"
      >
         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
      `}</style>

         <div className="container mx-auto">
            <div className="mb-10">
               <p
                  style={{
                     color: "#5A6069",
                     fontFamily: "'JetBrains Mono', monospace",
                  }}
                  className="text-xs tracking-widest text-center"
               >
                  ~/published
               </p>
               <h2
                  style={{
                     fontFamily: "'Space Grotesk', sans-serif",
                     color: "#E8E9EA",
                  }}
                  className="mt-2 text-3xl font-semibold tracking-tight text-center"
               >
                  Open Source Packages
               </h2>
               <p
                  style={{ color: "#7C828B" }}
                  className="mt-2 text-sm text-center"
               >
                  Packages I've built, maintained, and shared with the
                  community.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
               {PACKAGES.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
               ))}
            </div>
         </div>
      </section>
   );
}
