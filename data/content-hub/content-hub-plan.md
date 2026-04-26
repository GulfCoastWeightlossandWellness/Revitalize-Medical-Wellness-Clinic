# Revitalize Unified Content Hub Plan

## Goal
Create one central, searchable, embeddable content destination on the main site that aggregates all available long-form content and media (articles, videos, legacy resources, and key product education) while preserving backlink value.

## What "Success" Looks Like
- Visitors can find everything from one area (`/hub`).
- Articles and videos are embedded whenever possible (not just linked out).
- Legacy links are preserved and mapped so no content is missed.
- Hub pages are SEO-ready and internally linked from nav/footer/blog.

## Confirmed Source Systems
- `www.revitalizemedicalclinic.com` (legacy clinic site)
- `revitalizenutritionshop.com` (Shopify store + blog)
- YouTube channel content (linked from site and shop)
- Vimeo embeds found on legacy content
- Existing local media archive in `public/media/original-site`

## Inventory Artifacts Already Generated
- `data/content-hub/crawl-report.json`
- `data/content-hub/pages.json`
- `data/content-hub/links.json`
- `data/content-hub/media-links.json`
- `data/content-hub/youtube-links.json`
- `data/content-hub/embed-links.json`
- CSV exports in same folder for quick review

## Phase 1: Definitive Content Inventory (No Misses)
1. Run bounded recursive crawls for all known domains and seed from sitemaps.
2. Normalize and dedupe URLs (strip tracking params and bad URL variants).
3. Classify links into:
   - article
   - video
   - image/media
   - product education page
   - external resource/social
4. Build a `master-content-index.json` with required fields:
   - `id`, `type`, `title`, `slug`, `source_url`, `published_at`, `author`,
     `summary`, `thumbnail`, `embed_url`, `media[]`, `tags[]`, `status`.
5. Manual QA pass for false positives and malformed URLs.

## Phase 2: Hub IA + Embed Model
### Route Structure
- `/hub` (overview + featured content)
- `/hub/articles` (filterable article index)
- `/hub/videos` (embedded YouTube/Vimeo index)
- `/hub/resources` (tools, key reference pages, newsletters)
- `/hub/[slug]` (normalized internal detail page)

### Embedding Rules
- **YouTube**: use embed iframe (`youtube.com/embed/{id}`) where available.
- **Vimeo**: embed when provider allows.
- **External articles**:
  - If imported locally: render full local content.
  - If not imported: show summary + media + canonical outbound link.
- **Shopify blog posts**: import and render internally with source attribution.

## Phase 3: Implementation
1. Create `lib/content-hub.ts` loader for master index and filters.
2. Build reusable UI blocks:
   - content card
   - topic filter bar
   - embed player block
   - source attribution block
3. Add schema metadata:
   - `Article`, `VideoObject`, `BreadcrumbList`.
4. Add route handlers for machine feeds:
   - `/hub/feed.xml` (RSS)
   - `/hub/index.json` (JSON index)

## Phase 4: SEO + Link Consolidation
1. Add strong internal linking from:
   - homepage
   - blog pages
   - ecosystem page
   - footer/nav.
2. Canonical strategy:
   - if content fully migrated: canonical to local hub page.
   - if partial: canonical to original source and mark as sourced.
3. Keep outbound source links for trust and compliance.
4. Add future redirect map for any old links you control.

## Phase 5: Ops and Governance
1. Scheduled sync job (weekly) to pull new shop/blog/video items.
2. Diff report: new/updated/missing content.
3. Editorial approval flag before publishing new imported items.
4. Broken embed/link monitor and alert list.

## Risks to Plan Around
- Rate limiting (Shopify and some feeds can return 429).
- Duplicate content/canonical conflicts.
- Media licensing and attribution requirements.
- Inconsistent metadata on older pages.

## Immediate Next Build Step
Implement `/hub` + `/hub/articles` + `/hub/videos` against current crawl data, then replace temporary links with cleaned index records.
