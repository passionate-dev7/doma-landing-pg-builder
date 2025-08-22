export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Doma Landing Builder",
  description:
    "Create high-converting landing pages for your tokenized domains. Direct sales, no middlemen, powered by Doma Protocol.",
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Templates",
      href: "/templates",
    },
    {
      title: "Analytics",
      href: "/analytics",
    },
    {
      title: "Docs",
      href: "/docs",
    },
  ],
  links: {
    twitter: "https://twitter.com/domaprotocol",
    github: "https://github.com/doma-protocol/landing-builder",
    docs: "https://docs.doma.finance",
  },
}
