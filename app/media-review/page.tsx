import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";

const MEDIA_DIR = path.join(process.cwd(), "public", "media", "original-site", "images");
const PAGE_SIZE = 60;

type MediaReviewPageProps = {
  searchParams?: Promise<{ page?: string }>;
};

function getImageFiles() {
  if (!fs.existsSync(MEDIA_DIR)) return [];
  return fs
    .readdirSync(MEDIA_DIR)
    .filter((f) => /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b));
}

export default async function MediaReviewPage({ searchParams }: MediaReviewPageProps) {
  const params = searchParams ? await searchParams : {};
  const page = Math.max(1, Number(params.page || "1") || 1);

  const all = getImageFiles();
  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const current = all.slice(start, start + PAGE_SIZE);

  return (
    <main style={{ padding: "32px 24px", maxWidth: "1400px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>Original Site Media Review</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "24px" }}>
        Reviewing local imports from <code>/public/media/original-site/images</code>. Total: {total} images.
      </p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
        {safePage > 1 ? (
          <Link
            href={`/media-review?page=${safePage - 1}`}
            style={{ border: "1px solid var(--color-divider)", padding: "8px 12px", borderRadius: "6px" }}
          >
            Previous
          </Link>
        ) : null}
        <span style={{ padding: "8px 4px", color: "var(--color-muted)" }}>
          Page {safePage} of {totalPages}
        </span>
        {safePage < totalPages ? (
          <Link
            href={`/media-review?page=${safePage + 1}`}
            style={{ border: "1px solid var(--color-divider)", padding: "8px 12px", borderRadius: "6px" }}
          >
            Next
          </Link>
        ) : null}
      </div>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {current.map((file) => {
          const src = `/media/original-site/images/${file}`;
          return (
            <article
              key={file}
              style={{ border: "1px solid var(--color-divider)", borderRadius: "8px", overflow: "hidden" }}
            >
              <div style={{ position: "relative", aspectRatio: "4 / 3", background: "#f7f7f7" }}>
                <Image src={src} alt={file} fill sizes="(max-width: 768px) 50vw, 20vw" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "10px 12px" }}>
                <div
                  style={{
                    fontSize: "0.72rem",
                    lineHeight: 1.45,
                    color: "var(--color-muted)",
                    wordBreak: "break-word",
                  }}
                >
                  {file}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

