/**
 * Redirect map for migrating from the old Squarespace site at revitalizemedicalclinic.com.
 *
 * Rules:
 * - Preserve high-value SEO slugs wherever possible.
 * - Do NOT change existing clean Next.js routes — only add redirects for old paths.
 * - Auburn location pages redirect to /locations (closure handled there).
 * - Add permanent (308) redirects for SEO equity; temporary (307) for uncertain paths.
 *
 * To add a new redirect, append to REDIRECT_MAP:
 *   { source: "/old-path", destination: "/new-path", permanent: true }
 */

export type RedirectEntry = {
  source: string;
  destination: string;
  permanent: boolean;
};

export const REDIRECT_MAP: RedirectEntry[] = [
  // ─── About ───────────────────────────────────────────────────────────────────
  { source: "/about-us",   destination: "/about", permanent: true },
  { source: "/about-us-1", destination: "/about", permanent: true },

  // ─── Contact / booking ───────────────────────────────────────────────────────
  { source: "/contact-us",                destination: "/contact", permanent: true },
  { source: "/schedule-appointment-today",destination: "/book",    permanent: true },
  { source: "/thank-you",                 destination: "/",        permanent: false },
  { source: "/thank-you-for-contacting",  destination: "/contact", permanent: false },
  { source: "/thank-you-so-much",         destination: "/contact", permanent: false },

  // ─── Services — aesthetics section ──────────────────────────────────────────
  { source: "/aesthetics/fractional-laser",   destination: "/services/fractional-co2-laser",  permanent: true },
  { source: "/aesthetics/laser-hair-removal", destination: "/services/laser-hair-removal",     permanent: true },
  { source: "/aesthetics/microneedling",      destination: "/services/microneedling",           permanent: true },
  { source: "/aesthetics",                    destination: "/services",                         permanent: true },

  // ─── Services — facials section ──────────────────────────────────────────────
  { source: "/facials/aquafirme-facials",  destination: "/services/aquafirme-facials",   permanent: true },
  { source: "/facials/vampire-facial",     destination: "/services/vampire-facial-prp",  permanent: true },
  { source: "/facials/vi-peel-facials",    destination: "/services/vi-peel",             permanent: true },
  { source: "/facials",                    destination: "/services",                     permanent: true },

  // ─── Services — injectables section ─────────────────────────────────────────
  { source: "/injectables/cellenis-derma-prp", destination: "/services/cellenis-prp-gel-filler", permanent: true },
  { source: "/injectables/prp",                destination: "/services/vampire-facial-prp",       permanent: true },
  { source: "/dermal-fillers",                 destination: "/services/dermal-fillers",           permanent: true },
  { source: "/neuromodulator-treatments",      destination: "/services/neuromodulators",          permanent: true },

  // ─── Services — hair restoration ─────────────────────────────────────────────
  { source: "/hair-restoration/regrowth-treatment", destination: "/services/derive-hair-restoration", permanent: true },
  { source: "/hair-restoration",                    destination: "/services/derive-hair-restoration", permanent: true },

  // ─── Services — wellness section ─────────────────────────────────────────────
  { source: "/wellness/fat-dissolving-injections", destination: "/services/fat-dissolving-injections", permanent: true },
  { source: "/wellness/iv-hydration-therapy",      destination: "/services/iv-hydration",              permanent: true },
  { source: "/wellness/light-stemtherapy",         destination: "/services/low-level-light-therapy",   permanent: true },
  { source: "/wellness",                           destination: "/services",                            permanent: true },

  // ─── Services — men's health section ────────────────────────────────────────
  { source: "/mens-health/erectile-dysfunction", destination: "/services/erectile-dysfunction",  permanent: true },
  { source: "/mens-health/hormone-therapy",      destination: "/services/hormone-therapy-men",   permanent: true },
  { source: "/mens-health",                      destination: "/services",                        permanent: true },

  // ─── Services — women's health section ──────────────────────────────────────
  { source: "/womans-health/hormone-therapy", destination: "/services/hormone-therapy-women", permanent: true },
  { source: "/womans-health/o-shot",          destination: "/services/o-shot",                 permanent: true },
  { source: "/womans-health",                 destination: "/services",                         permanent: true },

  // ─── Services — top-level old slugs ─────────────────────────────────────────
  { source: "/medical-weight-loss",         destination: "/services/medical-weight-loss",    permanent: true },

  // ─── Location SEO — old Columbus weight-loss slug ───────────────────────────
  { source: "/columbus-ga-weight-loss-clinic", destination: "/medical-weight-loss-columbus-ga", permanent: true },

  // ─── Ecosystem / rebuild institute ──────────────────────────────────────────
  { source: "/rebuildmetabolichealth",                  destination: "/ecosystem", permanent: true },
  { source: "/rebuildmetabolichealth/:path*",           destination: "/ecosystem", permanent: true },

  // ─── Store / cart ────────────────────────────────────────────────────────────
  { source: "/store",  destination: "/ecosystem", permanent: true },
  { source: "/cart",   destination: "/ecosystem", permanent: true },

  // ─── Misc old home alias ─────────────────────────────────────────────────────
  { source: "/home", destination: "/", permanent: true },

  // ─── Auburn location — permanently closed ───────────────────────────────────
  // Any indexed Auburn location or Auburn-specific page redirects to /locations
  // where visitors will see Columbus and Warner Robins as the active clinics.
  { source: "/auburn",            destination: "/locations", permanent: true },
  { source: "/auburn-al",         destination: "/locations", permanent: true },
  { source: "/locations/auburn",  destination: "/locations", permanent: true },
  { source: "/auburn-aesthetics", destination: "/locations", permanent: true },
  { source: "/revitalize-auburn", destination: "/locations", permanent: true },
  { source: "/auburn-location",   destination: "/locations", permanent: true },

  // ─── Cypionate-only TRT — superseded the cypionate-vs-enanthate post ───────
  // Travis runs cypionate exclusively in his practice; the comparison post
  // was retired before publish. Catch the URL anyway for any external link
  // and direct it to the cypionate-explicit replacement.
  { source: "/blog/testosterone-cypionate-vs-enanthate", destination: "/blog/why-i-use-testosterone-cypionate-only", permanent: true },
];
