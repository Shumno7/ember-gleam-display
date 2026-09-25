import { BLADE_PROFILES, type BladeKey } from "@/lib/blade-profiles";
import { cn } from "@/lib/utils";

type SkyforgeCardProps = {
  blade: BladeKey;
  /**
   * Drop your own photography in here — the empty frame disappears the moment
   * a source exists. Nothing is generated or finalised until you pass one.
   */
  imageSrc?: string;
  imageAlt?: string;
  tagline?: string;
  className?: string;
};

export function SkyforgeCard({
  blade,
  imageSrc,
  imageAlt,
  tagline = "Forged for the few",
  className,
}: SkyforgeCardProps) {
  const profile = BLADE_PROFILES[blade];

  return (
    <article
      className={cn("skyforge-plate group", className)}
      style={profile.vars}
      aria-label={`Skyforge — ${profile.label} blade`}
    >
      <div className="skyforge-edge group-hover:brightness-[1.12]">
        <div className="skyforge-face">
          <div
            className="skyforge-slot"
            data-skyforge-slot={profile.key}
            aria-hidden={imageSrc ? undefined : true}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt ?? `Skyforge ${profile.label.toLowerCase()} blade`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <span
                className={cn(
                  "relative z-10 font-label uppercase text-[0.5rem] tracking-[0.34em] text-gold/65",
                  "transition-opacity duration-500 group-hover:opacity-70",
                )}
              >
                Photography goes here
              </span>
            )}
          </div>

          <div className="skyforge-scrim" />

          <div className="skyforge-content">
            <div className="skyforge-crown">
              <span className={profile.labelClass}>{profile.label}</span>
              <span className={profile.detailClass}>{profile.numeral}</span>
            </div>

            <div className="flex flex-col items-start gap-[clamp(0.6rem,2.4%,0.95rem)]">
              <p className={profile.tagline}>{tagline}</p>
              <h2 className={profile.name}>Skyforge</h2>
              <span aria-hidden="true" className={cn("mt-1", profile.ruleClass)} />
              <p className={profile.detailClass}>{profile.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
