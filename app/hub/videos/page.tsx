import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { getHubVideos } from "@/lib/contentHub";

export const metadata: Metadata = {
  title: "Content Hub Videos",
  description: "Embedded video library from the Revitalize ecosystem.",
  alternates: {
    canonical: "https://revitalizemedicalclinic.com/hub/videos",
  },
};

export default function HubVideosPage() {
  const videos = getHubVideos();

  return (
    <>
      <section style={{ background: "var(--color-teal-dark)", padding: "74px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div className="eyebrow-white" style={{ marginBottom: "18px" }}>
            Content hub
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            Video Dashboard
          </h1>
          <p style={{ color: "rgba(255,255,255,0.54)", lineHeight: 1.8, maxWidth: "700px" }}>
            Curated lessons from Travis and the Revitalize ecosystem. Built for patients who want
            practical guidance, not random platform noise.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-bg)", padding: "64px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} className="hub-videos-grid">
          {videos.map((video, idx) => (
            <FadeIn key={video.id} delay={Math.min(idx * 0.03, 0.15)}>
              <article style={{ background: "#fff", border: "1px solid var(--color-divider)", borderRadius: "6px", overflow: "hidden" }}>
                <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--color-divider)" }}>
                  <h2 style={{ fontSize: "0.96rem", lineHeight: 1.4, color: "var(--color-ink)", marginBottom: "6px" }}>
                    {video.title}
                  </h2>
                  {video.publishedAt ? (
                    <p style={{ margin: 0, fontSize: "0.72rem", color: "var(--color-muted)" }}>
                      Published {new Date(video.publishedAt).toLocaleDateString()}
                    </p>
                  ) : null}
                </div>

                {video.embeddable ? (
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    loading="lazy"
                    style={{ width: "100%", aspectRatio: "16 / 9", border: "none", background: "#000" }}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div style={{ padding: "28px 18px", fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.7 }}>
                    This lesson is currently available through the source platform link below.
                  </div>
                )}

                <div style={{ padding: "14px 18px", borderTop: "1px solid var(--color-divider)" }}>
                  <a
                    href={video.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "var(--color-teal)",
                    }}
                  >
                    Watch Source Lesson ↗
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <style>{`
          .hub-videos-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 900px) {
            .hub-videos-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

