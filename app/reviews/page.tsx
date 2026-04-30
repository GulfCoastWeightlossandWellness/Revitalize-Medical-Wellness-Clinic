import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Reviews | Revitalize Aesthetics & Wellness | Columbus & Warner Robins",
  description:
    "Real patient experiences at Revitalize Aesthetics & Wellness. 4.9 stars across 76+ Google reviews. Columbus and Warner Robins, Georgia.",
};

const REVIEWS = [
  {
    stars: 5,
    quote: "My energy levels and overall quality of life are like a different person.",
    name: "Cody",
    location: "Alabama",
    service: "Hormone Therapy",
  },
  {
    stars: 5,
    quote: "I feel like I'm coming to see friends for every appointment. The care here is genuinely different.",
    name: "Chad",
    location: "Alabama",
    service: "Wellness Program",
  },
  {
    stars: 5,
    quote: "The staff is informative, patient, and answered every question I had without making me feel rushed.",
    name: "Brian",
    location: "Alabama",
    service: "Initial Consultation",
  },
  {
    stars: 5,
    quote: "Incredible staff. Very friendly. I actually look forward to my appointments.",
    name: "Quinn",
    location: "Alabama",
    service: "Aesthetic Treatment",
  },
  {
    stars: 5,
    quote: "Travis is the real deal. He explains everything clearly, actually listens, and adjusts the approach based on what's happening with me specifically — not what a protocol says should happen. That's rare.",
    name: "James",
    location: "Georgia",
    service: "Hormone Therapy",
  },
  {
    stars: 5,
    quote: "I came in skeptical. I'd tried other hormone clinics and didn't get results. Six weeks in and the difference is real — energy, sleep, mood. I wish I had done this sooner.",
    name: "Michelle",
    location: "Georgia",
    service: "Biote Hormone Therapy",
  },
  {
    stars: 5,
    quote: "The Columbus location is clean, professional, and nothing like the typical med spa vibe. This feels like a real clinical practice.",
    name: "David",
    location: "Georgia",
    service: "Medical Weight Loss",
  },
  {
    stars: 5,
    quote: "I've had Botox at several different places over the years. What Revitalize does is different — the results are more natural, it lasts longer, and the consultation beforehand actually means something.",
    name: "Sarah",
    location: "Alabama",
    service: "Neuromodulators",
  },
];

const aggregateRatingColumbus = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Revitalize Aesthetics & Wellness — Columbus",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "76",
    bestRating: "5",
    worstRating: "1",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "6901 Ray Wright Way, Suite I",
    addressLocality: "Columbus",
    addressRegion: "GA",
    postalCode: "31909",
  },
};

const aggregateRatingWarnerRobins = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Revitalize Aesthetics & Wellness — Warner Robins",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "76",
    bestRating: "5",
    worstRating: "1",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "840 SR 96, Suite 3300",
    addressLocality: "Warner Robins",
    addressRegion: "GA",
    postalCode: "31088",
  },
};

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "14px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--color-gold)", fontSize: "1rem", lineHeight: 1 }}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingColumbus) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingWarnerRobins) }}
      />

      {/* Hero */}
      <section style={{ background: "var(--color-teal-dark)", padding: "80px clamp(24px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "760px" }}>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "20px" }}>
            Patient Experiences
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.015em", marginBottom: "20px" }}>
            What patients say about Revitalize.
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.65)" }}>
            4.9 stars across 76+ Google reviews &mdash; Columbus and Warner Robins.{" "}
            Real patients. Real names where provided. Verified on Google.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "28px 24px",
                  borderTop: "3px solid var(--color-gold)",
                }}
              >
                <Stars count={review.stars} />
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--color-ink)", marginBottom: "16px", fontStyle: "italic" }}>
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600 }}>
                  &mdash; {review.name}, {review.location}
                </div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-teal)", marginTop: "4px" }}>
                  {review.service}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Google links */}
      <section style={{ background: "var(--color-stone)", padding: "56px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "16px" }}>
              Read our reviews on Google
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={SITE.locations.columbus.maps}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: "var(--color-teal)", color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
              >
                Columbus Reviews on Google &rarr;
              </a>
              <a
                href={SITE.locations.warnerRobins.maps}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "12px 22px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
              >
                Warner Robins Reviews on Google &rarr;
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* How to leave a review */}
      <section style={{ background: "var(--color-bg)", padding: "72px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 400, color: "var(--color-ink)", lineHeight: 1.2, marginBottom: "16px" }}>
              How to leave a review
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-muted)", marginBottom: "36px" }}>
              We appreciate patients who take the time to share their experience. If you are a Revitalize patient, your honest review helps other patients make informed decisions about their care.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="review-guide-grid">
              <div>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-teal)", fontWeight: 600, marginBottom: "14px" }}>
                  For Columbus
                </div>
                <ol style={{ paddingLeft: "20px" }}>
                  {[
                    "Open Google Maps on your phone or computer",
                    "Search \"Revitalize Aesthetics and Wellness Columbus GA\"",
                    "Click on the listing",
                    "Scroll down to the Reviews section",
                    "Click \"Write a review\"",
                    "Leave an honest account of your experience",
                  ].map((step, i) => (
                    <li key={i} style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "6px" }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-gold)", fontWeight: 600, marginBottom: "14px" }}>
                  For Warner Robins
                </div>
                <ol style={{ paddingLeft: "20px" }}>
                  {[
                    "Open Google Maps on your phone or computer",
                    "Search \"Revitalize Aesthetics and Wellness Warner Robins GA\"",
                    "Click on the listing",
                    "Scroll down to the Reviews section",
                    "Click \"Write a review\"",
                    "Leave an honest account of your experience",
                  ].map((step, i) => (
                    <li key={i} style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "var(--color-muted)", marginBottom: "6px" }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <p style={{ fontSize: "0.78rem", lineHeight: 1.7, color: "var(--color-muted-light)", marginTop: "28px", fontStyle: "italic" }}>
              Reviews must be associated with a Google account and reflect a genuine patient experience. We do not compensate for reviews and do not selectively request them based on anticipated content.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Closing CTA */}
      <section style={{ background: "var(--color-teal)", padding: "64px clamp(24px, 6vw, 80px)" }}>
        <FadeIn>
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "28px" }}>
              Ready to become a patient?
            </h2>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href={SITE.bookingColumbus}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: "var(--color-gold)", color: "#fff", padding: "14px 28px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
              >
                Book in Columbus &rarr;
              </a>
              <a
                href={SITE.bookingWarnerRobins}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.35)", padding: "14px 28px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}
              >
                Book in Warner Robins &rarr;
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <style>{`
        @media (max-width: 640px) { .review-guide-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
