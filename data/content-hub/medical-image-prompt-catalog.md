# Revitalize Medical Image Prompt Catalog

This catalog is designed for high-end, patient-facing, medically credible visuals that feel cohesive across the full site.

Use this as the master source for generating new images with ChatGPT image generation.

## How To Use This Catalog

- Paste the **Global Style Lock** first.
- Then paste one **Placement Prompt** block.
- Generate 4 variants per prompt and keep only the best 1-2.
- Do not ship images that look synthetic, over-smoothed, or "stock photo generic."

## Global Style Lock (prepend to every prompt)

Create a real-photography style image for a premium medical wellness clinic website.
The image must feel authentic, clinical, and human; never look like AI art, stock clichés, or staged influencer content.
Lighting must be natural and soft with true-to-life skin texture, realistic pores, normal imperfections, and believable clinic materials.
Color grade should match this palette: deep clinical teal, warm ivory, muted charcoal, restrained gold accents.
Composition should leave intentional negative space for website text overlays.
Avoid logos, avoid brand marks, avoid readable signage, avoid text in image.
Avoid exaggerated beauty retouching, surreal bokeh, plastic skin, oversaturated colors, and dramatic fake cinematic effects.
Subject styling should feel modern medical practice in Georgia: approachable, clean, professional, trustworthy.
Output should be horizontal unless explicitly stated, with accurate perspective and no warped anatomy.

## Production Specs (Next.js + Performance)

These specs follow current `next/image` best practices and should be treated as constraints during generation/export:

- **Primary formats:** `AVIF` first, `WebP` fallback, `JPEG` only when needed.
- **Desktop hero source size:** `2400x1600` (3:2) or `2560x1440` (16:9) depending on layout.
- **Card/section size:** `1600x1200` (4:3) or `1400x933` (3:2).
- **Portrait clinician size:** `1600x2000` (4:5) or `1800x2400` (3:4).
- **Target file weight after compression:**
  - Hero image: `220KB-420KB`
  - Secondary section image: `120KB-260KB`
  - Small card thumbnail: `45KB-120KB`
- **LCP rule:** homepage hero image gets preload/priority and should stay under `420KB`.
- **CLS rule:** keep stable aspect ratios; always define width/height.
- **Sharpening:** mild only; no crunchy edge halos.
- **Noise/grain:** subtle film-like texture is allowed; fake AI smoothness is not.

## Whole-Site Image Opportunities (High Value)

### Tier 1 (must-have)

- Homepage hero
- Homepage "patient pathways" supporting visual
- Services index hero
- All service detail hero backgrounds (20 services, template-driven)
- About page clinician portrait v2
- Team page staff portraits set
- Locations page clinic environment photos (both locations)
- Blog featured card hero (replace badge-first feel with topic imagery)
- Hub hero visual anchor
- Contact page humanized clinic reception visual

### Tier 2 (strongly recommended)

- Payment plans page trust visual
- Book page lifestyle/editorial support image
- Ecosystem page node backgrounds
- Tools page contextual diagnostic imagery
- SEO location pages city-specific clinic hero variants

## Prompt Blocks By Placement

Each prompt includes objective + composition + export target.

### P01 - Homepage Hero (`/`)

Generate a premium medical clinic lobby scene for a hormone and aesthetic wellness practice.
Show a real, modern clinic interior with warm hospitality: front desk, subtle medical cues, clean seating area, natural daylight through windows, and high-end but not flashy finishes.
No visible logos or readable signage.
Camera angle should be eye-level, slightly wide, with enough negative space on the left side for headline text overlay.
Mood: calm confidence, clinical credibility, welcoming.
Output: `2560x1440`, export AVIF target `320KB-420KB`, backup WebP.

### P02 - Homepage Pathways Support Image

Create a contextual image representing patient decision pathways in a medical wellness clinic.
Scene: clinician in consultation with an adult patient reviewing lab markers on a tablet at a desk.
Both subjects should look natural and engaged, not posed.
Wardrobe: business-casual clinician attire with subtle medical professionalism.
Composition: medium-wide shot with negative space in upper-right corner.
Output: `2000x1333`, target `180KB-280KB`.

### P03 - Services Index Hero (`/services`)

Create an image that communicates breadth of services across hormone health, weight optimization, and aesthetics.
Scene should include a real treatment-planning environment (consult room), with non-identifiable equipment in background.
No procedure action; this is brand-level trust context.
Composition: centered depth, clean foreground, text-safe zone at top left.
Output: `2400x1350`, target `220KB-340KB`.

### P04 - Service Hero System (template image family for all service detail pages)

Create a cohesive set of service hero images with identical visual language.
One image per service category:
1) Hormone/Metabolic
2) Weight/Metabolic
3) Injectables
4) Skin Resurfacing
5) Wellness/IV
6) Sexual Wellness (sensitive, discreet, non-explicit)
All images must feel from the same clinic session/day with matching light, tone, and camera profile.
Each image should include realistic environment cues and relevant non-branded equipment context.
No gore, no needles-in-skin closeups, no explicit body content.
Output each at `2400x1600`, target `220KB-360KB`.

### P05 - Hormone Therapy (Women) Supporting Image

Create a women-focused hormone optimization consult image.
Scene: female patient mid-40s to 50s in private consult with clinician reviewing symptom timeline and lab trends.
Tone should convey relief, clarity, and professionalism.
No infantilized wellness tropes, no spa robes.
Output: `1800x1200`, target `150KB-240KB`.

### P06 - Hormone Therapy (Men) Supporting Image

Create a men-focused testosterone and metabolic consult image.
Scene: male patient in private consultation reviewing practical outcomes (energy, recovery, body composition) with clinician.
Must feel medically grounded, not "fitness influencer."
Output: `1800x1200`, target `150KB-240KB`.

### P07 - Medical Weight Loss Supporting Image

Generate a clinical metabolic coaching moment.
Scene: body composition scan review + practical plan discussion at desk with charts/tablet.
Avoid scales as hero object; focus on clinician guidance and measurable progress.
Output: `1800x1200`, target `150KB-240KB`.

### P08 - Injectables (Neuromodulators + Fillers) Supporting Image

Create a pre-procedure facial assessment moment.
Scene: clinician mapping facial zones with patient seated, mirror nearby, calm informed consent vibe.
No injection needle entering skin.
No overfilled lips or exaggerated cosmetic outcomes.
Output: `1800x1200`, target `150KB-240KB`.

### P09 - Skin Resurfacing Supporting Image (CO2, Microneedling, VI Peel, Vampire Facial)

Create a realistic treatment room setup image for skin resurfacing.
Scene includes prepared device workstation and clinician-patient discussion before treatment.
No aggressive treatment visuals, no redness-heavy shock value.
Output: `1800x1200`, target `150KB-240KB`.

### P10 - Hair Restoration Supporting Image (DE|RIVE)

Create a clinical hair restoration consult visual.
Scene: close collaborative review of scalp imaging/plan in clean consultation room.
Natural, hopeful tone; no cheesy before-after split graphics embedded in image.
Output: `1800x1200`, target `150KB-240KB`.

### P11 - IV Hydration / Wellness Supporting Image

Create an IV therapy environment image.
Scene: patient comfortably seated receiving supervised infusion in a clean, modern clinic bay; clinician nearby.
No hospital drama, no sterile fear vibe.
Output: `1800x1200`, target `150KB-240KB`.

### P12 - Sexual Wellness Supporting Image (O-Shot + ED pages)

Create a discreet, respectful medical consult image for sexual wellness.
Scene: private conversation in consultation room; focus on trust, confidentiality, and professionalism.
No explicit body imagery, no suggestive posing.
Output: `1800x1200`, target `150KB-240KB`.

### P13 - About Page Portrait (`/about`)

Generate a premium environmental portrait of a male clinician in his own clinic setting.
Style: documentary-professional, direct eye contact, approachable authority.
Wardrobe: clean clinical/business-casual attire, no lab coat required.
Background should softly show real clinic context.
Output portrait: `1800x2400` plus landscape crop `2400x1600`.
Target file sizes: portrait `180KB-280KB`, landscape `220KB-340KB`.

### P14 - Team Page Portrait Set (`/team`)

Create a consistent portrait system for staff profiles.
Same lens look, same light direction, same background depth, same color grade.
Deliver at least 4 individuals with neutral expressions and slight warm engagement.
Include one group photo variant for future use.
Output: individual `1600x2000`, group `2400x1600`.
Target: individual `120KB-220KB`, group `220KB-340KB`.

### P15 - Locations Page (Columbus + Warner Robins)

Generate two clinic environment images that feel related but distinct by location.
Each should show reception + treatment-adjacent atmosphere with natural light and premium finishes.
No signage text, no location names in image.
Output: 2 images at `2400x1350`, each `220KB-360KB`.

### P16 - Contact Page Human Trust Visual (`/contact`)

Create a warm front-desk interaction scene.
Patient being welcomed by staff with genuine eye contact and calm body language.
This image should reduce hesitation for first-time inquiries.
Output: `2000x1333`, target `170KB-260KB`.

### P17 - Blog Featured Image System (`/blog` + `/blog/[slug]`)

Create a reusable editorial image style for clinical articles.
Each image should look like a real clinical story frame: consultation, biomarker review, recovery planning, treatment education.
No literal text overlays burned into image.
Produce 8 seed images mapped to major categories: Hormone, Weight Loss, Aesthetics, IV, Hair, Sexual Wellness, Clinic Insights, Nutrition.
Output each: `1600x900`, target `90KB-170KB`.

### P18 - Hub Hero Anchor (`/hub`)

Create a high-end "learning library" visual for patient education.
Scene: clinician recording educational content in clinic (camera, soft lighting, monitor with charts blurred, no readable text).
Must bridge authority + accessibility.
Output: `2400x1350`, target `220KB-340KB`.

### P19 - Book Page Supporting Editorial Image (`/book`)

Create an editorial photo of the author reviewing notes/labs manuscript in a clinical office setting.
Subtle book presence is okay, but no fake printed text.
Tone: thoughtful, evidence-based, trustworthy.
Output: `2000x1333`, target `160KB-250KB`.

### P20 - Payment Plans Trust Image (`/payment-plans`)

Create a neutral financing conversation image in clinic context.
Scene: coordinator helping patient understand options on tablet.
Avoid money symbolism clichés (cash, piggy banks, credit cards close-up).
Output: `1800x1200`, target `140KB-220KB`.

## Negative Prompt Add-On (append to every generation request)

Do not generate:
stock-photo smiles, over-airbrushed skin, uncanny eyes, extra fingers, warped ears, fake text, random logos, unreadable badges, heavy lens flare, dramatic color casts, surreal blur, CGI look, glossy plastic skin, exaggerated beauty filters, cartoonish anatomy, or duplicated facial features.

## Naming Convention For Assets

Use deterministic names so implementation stays clean:

- `home-hero-clinic-lobby-v1.avif`
- `services-hero-hormone-v1.avif`
- `services-hero-injectables-v1.avif`
- `about-travis-portrait-v2.avif`
- `team-carly-portrait-v1.avif`
- `locations-columbus-interior-v1.avif`
- `blog-category-hormone-v1.avif`
- `hub-hero-education-v1.avif`

## Rollout Plan (Task-Master Style)

### Phase 1 - Brand-critical pages

- Homepage
- Services index
- About
- Team
- Locations

### Phase 2 - Conversion-critical pages

- Top 8 service pages by demand
- Contact
- Payment plans
- Book

### Phase 3 - Content scale

- Blog category image system
- Hub hero + section anchors
- Remaining service page variants

### Phase 4 - Optimization pass

- Re-encode to AVIF/WebP
- Validate Lighthouse + Core Web Vitals
- Confirm no CLS from image containers
- Confirm LCP image preload only on true hero

## QA Checklist Before Shipping Any Image

- Context is medically relevant to the exact page.
- No "generic stock" feeling.
- No uncanny visual artifacts at 100% zoom.
- Skin tones and clinic materials look realistic.
- File size is within budget.
- Crop still works on mobile and desktop.
- Alt text can be written honestly in one sentence.

