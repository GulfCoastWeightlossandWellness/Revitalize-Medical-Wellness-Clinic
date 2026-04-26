import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getHubItemBySlug, getHubItems } from "@/lib/contentHub";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getHubItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getHubItemBySlug(slug);
  if (!item) return { title: "Content Not Found | Hub" };
  return {
    title: `${item.title} | Content Hub`,
    description: `Hub detail for ${item.title}`,
  };
}

export default async function HubItemDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getHubItemBySlug(slug);
  if (!item) notFound();
  const itemUrl = `https://revitalizemedicalclinic.com/hub/${item.slug}`;
  const sourceHost = (() => {
    try {
      return new URL(item.sourceUrl).hostname;
    } catch {
      return "external-source";
    }
  })();
  const schema =
    item.kind === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          mainEntityOfPage: itemUrl,
          url: itemUrl,
          isBasedOn: item.sourceUrl,
          publisher: {
            "@type": "MedicalBusiness",
            name: "Revitalize Aesthetics & Wellness",
            url: "https://revitalizemedicalclinic.com",
          },
        }
      : {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: item.title,
          url: itemUrl,
          embedUrl: item.embeddable ? item.embedUrl : undefined,
          isBasedOn: item.sourceUrl,
          publisher: {
            "@type": "MedicalBusiness",
            name: "Revitalize Aesthetics & Wellness",
            url: "https://revitalizemedicalclinic.com",
          },
        };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Content Hub",
        item: "https://revitalizemedicalclinic.com/hub",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: item.kind === "article" ? "Articles" : "Videos",
        item: item.kind === "article" ? "https://revitalizemedicalclinic.com/hub/articles" : "https://revitalizemedicalclinic.com/hub/videos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: itemUrl,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section style={{ background: "var(--color-ink)", padding: "68px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "940px", margin: "0 auto" }}>
          <div className="eyebrow-white" style={{ marginBottom: "14px" }}>
            {item.kind === "article" ? "Hub article" : "Hub video"}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#fff",
              fontWeight: 400,
              lineHeight: 1.14,
              marginBottom: "16px",
            }}
          >
            {item.title}
          </h1>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href={item.kind === "article" ? "/hub/articles" : "/hub/videos"} style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.62)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              ← Back to {item.kind === "article" ? "Articles" : "Videos"}
            </Link>
            <Link href="/hub/resources" style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.62)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Hub Resources
            </Link>
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.62)", letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              Open Source ↗
            </a>
          </div>
          <div style={{ marginTop: "14px", fontSize: "0.68rem", color: "rgba(255,255,255,0.44)" }}>
            Source domain: {sourceHost}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "48px clamp(24px, 6vw, 80px) 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: "16px" }} className="hub-detail-layout">
          <aside
            style={{
              background: "#fff",
              border: "1px solid var(--color-divider)",
              borderRadius: "8px",
              padding: "18px 16px",
              height: "fit-content",
              position: "sticky",
              top: "96px",
            }}
            className="hub-detail-sidebar"
          >
            <div style={{ fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-teal-light)", marginBottom: "10px" }}>
              Content Hub
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" }}>
              <Link href="/hub" style={{ fontSize: "0.82rem", color: "var(--color-teal)" }}>Hub Home</Link>
              <Link href="/hub/articles" style={{ fontSize: "0.82rem", color: "var(--color-teal)" }}>Article Dashboard</Link>
              <Link href="/hub/videos" style={{ fontSize: "0.82rem", color: "var(--color-teal)" }}>Video Dashboard</Link>
              <Link href="/hub/resources" style={{ fontSize: "0.82rem", color: "var(--color-teal)" }}>Resource Dashboard</Link>
            </div>
            <div style={{ height: "1px", background: "var(--color-divider)", marginBottom: "12px" }} />
            <a href={SITE.book.allPlatforms} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.72rem", color: "var(--color-muted)", marginBottom: "8px" }}>
              Buy Travis&apos;s book ↗
            </a>
            <a href={SITE.ecosystem.nutritionShop} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.72rem", color: "var(--color-muted)" }}>
              Visit vitamin shop ↗
            </a>
          </aside>

          <div style={{ background: "#fff", borderRadius: "6px", border: "1px solid var(--color-divider)", overflow: "hidden" }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--color-divider)", fontSize: "0.72rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {item.kind === "article" ? "Imported article" : "Embedded player"}
          </div>

          {item.kind === "video" && item.embeddable ? (
            <iframe
              src={item.embedUrl}
              title={item.title}
              loading="lazy"
              style={{ width: "100%", aspectRatio: "16 / 9", border: "none", background: "#000" }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : item.kind === "article" ? (
            <div style={{ padding: "26px 26px 18px" }}>
              {item.heroImage ? (
                <div style={{ marginBottom: "20px" }}>
                  <img
                    src={item.heroImage}
                    alt={`${item.title} infographic`}
                    style={{ width: "100%", maxHeight: "520px", objectFit: "contain", background: "var(--color-bg)", borderRadius: "6px" }}
                  />
                </div>
              ) : null}
              {item.contentHtml ? (
                <article
                  className="hub-article-content"
                  dangerouslySetInnerHTML={{ __html: item.contentHtml }}
                />
              ) : (
                <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.8, color: "var(--color-muted)" }}>
                  Article import is still processing for this item.
                </p>
              )}
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "18px",
                  fontSize: "0.58rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "var(--color-teal)",
                }}
              >
                Open Full Original Article ↗
              </a>
              <style>{`
                .hub-article-content { color: var(--color-ink-2); font-size: 0.96rem; line-height: 1.9; }
                .hub-article-content h2 { font-family: var(--font-display); color: var(--color-ink); font-size: 1.8rem; line-height: 1.2; margin: 28px 0 14px; }
                .hub-article-content h3 { font-family: var(--font-display); color: var(--color-ink); font-size: 1.35rem; line-height: 1.3; margin: 24px 0 12px; }
                .hub-article-content p { margin: 0 0 14px; }
                .hub-article-content ul, .hub-article-content ol { margin: 0 0 16px 20px; }
                .hub-article-content li { margin-bottom: 8px; }
                .hub-article-content img { width: 100%; height: auto; border-radius: 6px; margin: 10px 0 18px; }
                .hub-article-content blockquote { margin: 16px 0; border-left: 3px solid var(--color-teal); padding: 8px 0 8px 14px; color: var(--color-muted); }
              `}</style>
            </div>
          ) : (
            <iframe
              src={item.sourceUrl}
              title={item.title}
              loading="lazy"
              style={{ width: "100%", minHeight: "72vh", border: "none", background: "#fff" }}
            />
          )}
          </div>
        </div>
        <style>{`
          .hub-detail-layout { grid-template-columns: 280px 1fr; }
          @media (max-width: 980px) {
            .hub-detail-layout { grid-template-columns: 1fr !important; }
            .hub-detail-sidebar {
              position: static !important;
              top: auto !important;
            }
          }
        `}</style>
        {item.kind === "video" && !item.embeddable && (
          <p style={{ maxWidth: "1100px", margin: "12px auto 0", fontSize: "0.76rem", color: "var(--color-muted)" }}>
            This video host blocks embedded playback in this context. Use the source link above to watch it directly.
          </p>
        )}
      </section>
    </>
  );
}

