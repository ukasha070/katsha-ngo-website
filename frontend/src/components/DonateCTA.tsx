"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, HeartHandshake, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";

// Tailwind primary color: yellow-500
// Ensure your Tailwind config supports dark mode class strategy.

export type DonateCTAProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  href?: string; // if provided, button becomes a link
  onDonate?: () => void; // fallback click handler if href not provided
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  badges?: string[]; // e.g., ["Tax-deductible", "SSL Secured"]
  stats?: { label: string; value: string }[]; // optional quick stats
};

export default function DonateCTA({
  title = "Your gift changes lives",
  subtitle = "Support our emergency relief, education, and livelihoods programs.",
  ctaLabel = "Donate Now",
  href = "/donate",
  onDonate,
  imageSrc,
  imageAlt = "Donation impact photo",
  className,
  badges = ["Tax-deductible", "SSL Secured"],
  stats = [
    { label: "Families reached", value: "12,480+" },
    { label: "Countries", value: "3" },
  ],
}: DonateCTAProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-yellow-50 dark:bg-zinc-900/60 mb-10",
        " dark:ring-zinc-800 shadow-lg",
        className
      )}
      aria-label="Donate call to action"
    >
      <MaxWidthWrapper className="py-8">
        {/* background accents */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-yellow-300/30 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative min-h-[260px] lg:min-h-[420px]"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />

            {/* Corner badge */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <HeartHandshake className="h-4 w-4" />
              <span>100% Donor Privacy</span>
            </div>
          </motion.div>

          {/* Content side */}
          <div className="relative p-6 sm:p-8 lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              viewport={{ once: true }}
              className="mx-auto max-w-xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-900 ring-1 ring-yellow-200">
                <ShieldCheck className="h-4 w-4" />
                <span>Trusted NGO</span>
              </div>

              <h2 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-white sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                {subtitle}
              </p>

              {/* Badges */}
              {badges?.length ? (
                <ul className="mt-4 flex flex-wrap items-center gap-2">
                  {badges.map((b) => (
                    <li
                      key={b}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-zinc-800 ring-1 ring-yellow-200 backdrop-blur dark:bg-zinc-900/50 dark:text-zinc-200 dark:ring-zinc-700"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Stats */}
              {stats?.length ? (
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-white/70 p-4 ring-1 ring-yellow-200 backdrop-blur dark:bg-zinc-900/50 dark:ring-zinc-800"
                    >
                      <div className="text-lg font-bold text-zinc-900 dark:text-white">
                        {s.value}
                      </div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* CTA Button */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {href ? (
                  <Link
                    href={href}
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-600 px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-yellow-600 transition hover:bg-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70 dark:text-zinc-950"
                    aria-label={ctaLabel}
                  >
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={onDonate}
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-600 px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-yellow-600 transition hover:bg-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70 dark:text-zinc-950"
                    aria-label={ctaLabel}
                  >
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                )}

                <div className="inline-flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Secure payment powered by your provider</span>
                </div>
              </div>

              {/* Mini progress/impact bar (optional aesthetic) */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                  <span>Campaign progress</span>
                  <span>72%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-yellow-200/60">
                  <div className="h-full w-[72%] rounded-full bg-yellow-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

/*
USAGE EXAMPLE

<DonateCTA
  imageSrc="/images/ngo-impact.jpg"
  title="Give today. Create lasting change."
  subtitle="Every contribution strengthens education, health, and livelihoods in our communities."
  href="/donate"
  badges={["Tax-deductible", "SSL Secured", "Mobile Money Accepted"]}
  stats={[
    { label: "People served", value: "25k+" },
    { label: "Projects active", value: "18" },
    { label: "Since", value: "2014" },
  ]}
/>

NOTES
- Primary color uses Tailwind's yellow-500 across accents, with accessible contrast.
- Replace cn() import with your own utility or remove and inline className concatenation.
- Works with Next.js Image optimization. Ensure the provided image path/remote is configured.
- Animations via Framer Motion; remove if you prefer zero-JS animations.
*/
