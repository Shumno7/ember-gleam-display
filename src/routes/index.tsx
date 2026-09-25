import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SkyforgeCard } from "@/components/SkyforgeCard";
import { BLADE_ORDER, BLADE_PROFILES, type BladeKey } from "@/lib/blade-profiles";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skyforge — Forged for the few" },
      {
        name: "description",
        content:
          "Skyforge is a premium boutique sword atelier. One blade, one card: a dark, moody preview for the forge.",
      },
      { property: "og:title", content: "Skyforge — Forged for the few" },
      {
        property: "og:description",
        content:
          "A boutique sword atelier, presented blade by blade. Sharp and bulky for the greatsword, smooth and slender for the smallsword.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [blade, setBlade] = useState<BladeKey>("greatsword");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-[clamp(2rem,6vh,3.5rem)] bg-ink px-5 py-[clamp(2.5rem,8vh,5rem)]">
      <SkyforgeCard key={blade} blade={blade} />

      <nav
        aria-label="Blade"
        className="flex flex-wrap items-center justify-center gap-x-[clamp(1rem,3.5vw,2rem)] gap-y-2"
      >
        {BLADE_ORDER.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setBlade(key)}
            aria-pressed={blade === key}
            className={cn(
              "font-label font-light uppercase tracking-[0.3em] text-[0.6rem] transition-colors duration-300",
              blade === key
                ? "text-gold-bright"
                : "text-gold-dim hover:text-gold-bright",
            )}
          >
            {BLADE_PROFILES[key].label}
          </button>
        ))}
      </nav>
    </main>
  );
}
