export const SITE = {
  name: "Revitalize Aesthetics & Wellness",
  tagline: "Clinical precision. Lasting results.",
  url: "https://revitalizemedicalclinic.com",
  phone: {
    columbus: "(762) 261-3880",
    columbusHref: "tel:7622613880",
    warnerRobins: "(478) 366-1244",
    warnerRobinsHref: "tel:4783661244",
  },
  email: "twoodley@revitalizemedicalclinic.com",
  // Main booking portal — shows both locations for patient choice.
  booking: "https://revitalizeaesthetics.janeapp.com/",
  // Location-specific booking URLs — confirmed active via JaneApp portal.
  bookingColumbus: "https://revitalizeaesthetics.janeapp.com/locations/columbus/book",
  bookingWarnerRobins: "https://revitalizeaesthetics.janeapp.com/locations/warner-robins/book",
  locations: {
    columbus: {
      address: "6901 Ray Wright Way, Suite I",
      city: "Columbus",
      state: "GA",
      zip: "31909",
      phone: "(762) 261-3880",
      phoneHref: "tel:7622613880",
      // Directions link confirmed via Google Maps search for this address.
      maps: "https://www.google.com/maps/place/6901+Ray+Wright+Way+Suite+I+Columbus+GA+31909/",
      // Map embed URL (no API key required). Replace with the official embed code
      // from Google Maps → Share → Embed a map, once the owner provides it.
      embedMapUrl: "https://maps.google.com/maps?q=6901+Ray+Wright+Way+Suite+I+Columbus+GA+31909&output=embed",
      // Hours sourced from Yelp (April 2026). Verify against owner's GBP dashboard before launch.
      hours: "Mon – Fri: 9:00 AM – 5:00 PM  ·  Sat – Sun: Closed",
    },
    warnerRobins: {
      address: "840 SR 96, Suite 3300",
      city: "Warner Robins",
      state: "GA",
      zip: "31088",
      phone: "(478) 366-1244",
      phoneHref: "tel:4783661244",
      // Directions link confirmed for this address.
      maps: "https://maps.google.com/?q=840+SR+96+Suite+3300+Warner+Robins+GA+31088",
      // Map embed URL (no API key required). Replace with official embed code from GBP.
      embedMapUrl: "https://maps.google.com/maps?q=840+SR+96+Suite+3300+Warner+Robins+GA+31088&output=embed",
      // TODO: Verify Warner Robins hours against GBP. Columbus hours used as safe default.
      hours: "Mon – Fri: 9:00 AM – 5:00 PM  ·  Sat – Sun: Closed",
    },
  },
  social: {
    instagram: "https://www.instagram.com/revitalize.aestheticswellness/",
    instagramBook: "https://www.instagram.com/yourenotbrokenofficial/",
    facebook: "https://www.facebook.com/profile.php?id=61553635717041",
    facebookBook: "https://www.facebook.com/Yourenotbrokenofficial",
    youtube: "https://www.youtube.com/@rebuildmetabolichealth",
    linkedin: "https://www.linkedin.com/in/travis-woodley/",
    linkedinNewsletter: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7385386886221074432",
  },
  ecosystem: {
    nutritionShop: "https://revitalizenutritionshop.com/",
    rebuildInstitute: "https://rebuildmetabolichealth.com/rebuild-metabolic-health-institute/",
  },
  book: {
    title: "You're Not Broken — You're Unbalanced",
    amazon: "https://www.amazon.com/Youre-Not-Broken-Youre-Unbalanced-rebuilding/dp/B0FQJNQ6XP/",
    kindle: "https://www.amazon.com/Youre-Not-Broken-Youre-Unbalanced-rebuilding-ebook/dp/B0FNKF9FPC/",
    barnesNoble: "https://www.barnesandnoble.com/w/youre-not-broken-youre-unbalanced-travis-woodley/1148354391",
    appleBooks: "https://books.apple.com/gb/book/youre-not-broken-youre-unbalanced/id6752878226",
    kobo: "https://www.kobo.com/us/en/ebook/you-re-not-broken-you-re-unbalanced",
    everand: "https://www.everand.com/book/921008473/You-re-Not-Broken-You-re-Unbalanced",
    overdrive: "https://www.overdrive.com/media/12358889/youre-not-broken-youre-unbalanced",
    allPlatforms: "https://books2read.com/Youre-not-broken",
  },
  paymentPlansPage: "/payment-plans",
  financing: {
    cherry: "https://pay.withcherry.com/revitalizehealthwellness?utm_source=merchant&utm_medium=website",
    cherryManageAccount: "https://auth.withcherry.com/consumer/login",
    // careCredit: "",   // add URL when available
    // scratchpay: "",   // add URL when available
  },
  biote: "https://biote.com",
  reviews: {
    platform: "Google",
    // Review dialog URLs — confirm which location appears in the modal before launch.
    // The #lrd ID is the distinguishing factor; do not swap these without verifying.
    columbusReviewLink: "https://www.google.com/search?q=Revitalize+Aesthetics+%26+Wellness+Reviews#lrd=0x88f3e7448a99f5ed:0x9aeca12dc32998d2,3,,,,",
    warnerRobinsReviewLink: "https://www.google.com/search?q=Revitalize+Aesthetics+%26+Wellness+Reviews#lrd=0x88f33524e3d94a4f:0x3fb938ed8f0a8bf3,3,,,,",
    // Set verifiedCount and verifiedRating to null to show neutral copy.
    // Update to real values once confirmed against the GBP dashboard.
    verifiedCount: null as string | null,
    verifiedRating: null as string | null,
  },
  founder: {
    name: "Travis Woodley",
    credentials: "MSN, RN, CRNP",
    title: "Nurse Practitioner & Founder",
    experience: "17+ years",
  },
};

/** Returns true only when a review link has been populated with a real URL. */
export function hasReviewLink(url: string | undefined): url is string {
  return typeof url === "string" && url.length > 0 && !url.includes("REPLACE_WITH");
}

export const NAV_SERVICES = [
  { label: "Hormone Therapy", href: "/services/hormone-therapy-women" },
  { label: "Medical Weight Loss", href: "/services/medical-weight-loss" },
  { label: "Aesthetics", href: "/services/neuromodulators" },
  { label: "IV Therapy", href: "/services/iv-hydration" },
  { label: "Hair Restoration", href: "/services/derive-hair-restoration" },
  { label: "All Services", href: "/services" },
];
