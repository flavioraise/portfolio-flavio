import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiMysql,
} from "react-icons/si";
import { FaJava, FaNetworkWired } from "react-icons/fa6";
import { profile } from "@/lib/data";

// Map each stack entry to its brand logo (rendered monochrome).
const LOGOS: Record<string, IconType> = {
  Java: FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  SQL: SiMysql,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Docker: SiDocker,
  Networking: FaNetworkWired,
};

// Infinite horizontal logo wall — a bold divider under the hero.
export default function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...profile.stack, ...profile.stack];

  return (
    <div className="relative overflow-hidden bg-surface/40 py-5">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap sm:gap-14">
        {items.map((tech, i) => {
          const Icon = LOGOS[tech];
          return (
            <span key={i} className="flex items-center gap-10 sm:gap-14">
              <span className="flex items-center gap-3 text-muted">
                {Icon && (
                  <Icon
                    aria-hidden
                    className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
                  />
                )}
                <span className="font-display text-lg font-medium sm:text-xl">
                  {tech}
                </span>
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted/40" />
            </span>
          );
        })}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
