import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingBar from "@/components/BookingBar";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revitalizemedicalclinic.com"),
  title: {
    default: "Revitalize Aesthetics & Wellness | Columbus & Warner Robins, GA",
    template: "%s | Revitalize Aesthetics & Wellness",
  },
  description:
    "Premier medical aesthetics and functional wellness in Columbus and Warner Robins, Georgia. Hormone therapy, medical weight loss, Biote pellets, injectables, and advanced aesthetic treatments led by Travis Woodley, MSN, RN, CRNP.",
  keywords: [
    "hormone therapy Columbus GA",
    "medical weight loss Columbus GA",
    "Biote provider Georgia",
    "medical spa Columbus Georgia",
    "botox Columbus GA",
    "Travis Woodley NP",
    "medical weight loss Warner Robins",
    "hormone therapy Warner Robins GA",
  ],
  openGraph: {
    type: "website",
    siteName: "Revitalize Aesthetics & Wellness",
    title: "Revitalize Aesthetics & Wellness | Columbus & Warner Robins, GA",
    description:
      "Hormone therapy, medical weight loss, and advanced aesthetic treatments in Columbus and Warner Robins, Georgia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revitalize Aesthetics & Wellness",
    description: "Premier medical spa in Columbus & Warner Robins, GA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://revitalizemedicalclinic.com/#columbus",
      name: "Revitalize Aesthetics & Wellness — Columbus",
      url: "https://revitalizemedicalclinic.com",
      telephone: "+17622613880",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6901 Ray Wright Way, Suite I",
        addressLocality: "Columbus",
        addressRegion: "GA",
        postalCode: "31909",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 32.5099, longitude: -84.9877 },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "70" },
      hasMap: "https://www.google.com/maps/place/6901+Ray+Wright+Rd,+Columbus,+GA+31909/",
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://revitalizemedicalclinic.com/#warnerrobins",
      name: "Revitalize Aesthetics & Wellness — Warner Robins",
      url: "https://revitalizemedicalclinic.com",
      telephone: "+14783661244",
      address: {
        "@type": "PostalAddress",
        streetAddress: "840 SR 96, Suite 3300",
        addressLocality: "Warner Robins",
        addressRegion: "GA",
        postalCode: "31088",
        addressCountry: "US",
      },
    },
    {
      "@type": "Person",
      name: "Travis Woodley",
      jobTitle: "Nurse Practitioner, Founder",
      honorificSuffix: "MSN, RN, CRNP",
      worksFor: { "@type": "MedicalBusiness", name: "Revitalize Aesthetics & Wellness" },
      sameAs: ["https://www.linkedin.com/in/travis-woodley/"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body style={{ paddingTop: "var(--nav-height)" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <BookingBar />
      </body>
    </html>
  );
}
