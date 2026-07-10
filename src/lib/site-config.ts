export const siteConfig = {
  pilotNameMain: "Vee",
  pilotNameAccent: "FPV",
  tagline: "VILNIUS, LT",
  email: "contact@veefpv.com",
  title: "VeeFPV — FPV Drone Cinematography",
  description:
    "FPV drone cinematography for concerts, sport and creative projects — flown by Vitarė Vaišnoraitė, an A1/A3 licensed & insured pilot based in Vilnius, Lithuania.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
] as const;
