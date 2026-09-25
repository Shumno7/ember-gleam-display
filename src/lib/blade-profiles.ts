import type { CSSProperties } from "react";

/**
 * Each blade gets its own card geometry: the outline, corners and image frame
 * are tailored to the weapon, while palette and type roles stay fixed so the
 * set still reads as one atelier.
 */
export type BladeKey = "greatsword" | "longsword" | "sabre" | "smallsword";

export type BladeProfile = {
  key: BladeKey;
  /** Shown top-left, small, letterspaced. */
  label: string;
  /** Shown top-right, decorative. */
  numeral: string;
  /** Bottom line — placeholder copy, swap freely. */
  detail: string;
  /** Geometry handed to the card as CSS custom properties. */
  vars: CSSProperties;
  name: string;
  tagline: string;
  labelClass: string;
  detailClass: string;
  ruleClass: string;
};

export const BLADE_PROFILES: Record<BladeKey, BladeProfile> = {
  greatsword: {
    key: "greatsword",
    label: "Two-handed",
    numeral: "Nº I",
    detail: "Six feet of edge · By appointment",
    vars: {
      "--plate-ratio": "1 / 1",
      "--edge-width": "3px",
      "--edge-radius": "0px",
      "--edge-clip":
        "polygon(0 22px, 22px 0, calc(100% - 22px) 0, 100% 22px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 22px 100%, 0 calc(100% - 22px))",
      "--face-radius": "0px",
      "--face-clip":
        "polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))",
      "--slot-inset": "14px",
      "--slot-radius": "0px",
      "--slot-clip":
        "polygon(0 16px, 16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px))",
      "--slot-mark": "0.2",
    } as CSSProperties,
    name:
      "font-monument font-black uppercase leading-[0.92] tracking-[0.08em] text-[clamp(2.1rem,8vw,3.5rem)] text-gold-bright",
    tagline:
      "font-monument font-semibold uppercase tracking-[0.3em] text-[0.7rem] text-gold",
    labelClass:
      "font-label font-medium uppercase tracking-[0.42em] text-[0.58rem] text-gold",
    detailClass:
      "font-label font-light uppercase tracking-[0.28em] text-[0.55rem] text-gold-dim",
    ruleClass: "h-[3px] w-16 bg-gold",
  },
  longsword: {
    key: "longsword",
    label: "Hand and a half",
    numeral: "Nº II",
    detail: "Hand-forged · By appointment",
    vars: {
      "--plate-ratio": "1 / 1",
      "--edge-width": "1.5px",
      "--edge-radius": "5px",
      "--edge-clip": "none",
      "--face-radius": "3.5px",
      "--face-clip": "none",
      "--slot-inset": "16px",
      "--slot-radius": "4px",
      "--slot-clip": "none",
      "--slot-mark": "0.14",
    } as CSSProperties,
    name:
      "font-monument font-semibold uppercase leading-[0.95] tracking-[0.15em] text-[clamp(1.9rem,7vw,3rem)] text-gold-bright",
    tagline:
      "font-label font-normal uppercase tracking-[0.4em] text-[0.62rem] text-gold",
    labelClass:
      "font-label font-normal uppercase tracking-[0.4em] text-[0.58rem] text-gold",
    detailClass:
      "font-label font-light uppercase tracking-[0.28em] text-[0.55rem] text-gold-dim",
    ruleClass: "h-px w-24 bg-gold/70",
  },
  sabre: {
    key: "sabre",
    label: "Single-handed",
    numeral: "Nº III",
    detail: "Curved back edge · By appointment",
    vars: {
      "--plate-ratio": "1 / 1",
      "--edge-width": "2px",
      "--edge-radius": "10px",
      "--edge-clip":
        "polygon(0 0, 100% 0, 100% calc(100% - 52px), calc(100% - 52px) 100%, 0 100%)",
      "--face-radius": "8px",
      "--face-clip":
        "polygon(0 0, 100% 0, 100% calc(100% - 48px), calc(100% - 48px) 100%, 0 100%)",
      "--slot-inset": "16px",
      "--slot-radius": "0px 8px 0 8px",
      "--slot-clip":
        "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
      "--slot-mark": "0.12",
    } as CSSProperties,
    name:
      "font-elegant font-semibold uppercase leading-[0.95] tracking-[0.12em] text-[clamp(2rem,7.2vw,3.2rem)] text-gold-bright",
    tagline:
      "font-elegant font-light italic tracking-[0.05em] text-[1.1rem] text-gold",
    labelClass:
      "font-label font-normal uppercase tracking-[0.4em] text-[0.58rem] text-gold",
    detailClass:
      "font-label font-light uppercase tracking-[0.28em] text-[0.55rem] text-gold-dim",
    ruleClass: "h-px w-20 origin-left -rotate-[7deg] bg-gold/65",
  },
  smallsword: {
    key: "smallsword",
    label: "Court",
    numeral: "Nº IV",
    detail: "Slender and light · By appointment",
    vars: {
      "--plate-ratio": "1 / 1.06",
      "--edge-width": "1px",
      "--edge-radius": "46% 46% 20px 20px / 32% 32% 20px 20px",
      "--edge-clip": "none",
      "--face-radius": "45% 45% 18px 18px / 31% 31% 18px 18px",
      "--face-clip": "none",
      "--slot-inset": "20px",
      "--slot-radius": "45% 45% 12px 12px / 28% 28% 12px 12px",
      "--slot-clip": "none",
      "--slot-mark": "0.1",
    } as CSSProperties,
    name:
      "font-elegant font-light uppercase leading-[1] tracking-[0.26em] text-[clamp(1.5rem,5.4vw,2.3rem)] text-gold-bright",
    tagline:
      "font-elegant font-light italic tracking-[0.06em] text-[1.2rem] text-gold",
    labelClass:
      "font-label font-normal uppercase tracking-[0.5em] text-[0.55rem] text-gold",
    detailClass:
      "font-label font-light uppercase tracking-[0.3em] text-[0.52rem] text-gold-dim",
    ruleClass:
      "h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent",
  },
};

export const BLADE_ORDER: BladeKey[] = [
  "greatsword",
  "longsword",
  "sabre",
  "smallsword",
];
