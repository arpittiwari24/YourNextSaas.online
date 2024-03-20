/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "sass-nextjs-starter",
  titleTemplate: "%s | sass-nextjs-starter",
  defaultTitle: "sass-nextjs-starter",
  description:
    "Arrpit's Next.js + Typescript + Tailwind CSS + Lemonsqueezy + DaisyUi starter template with SEO and PWA support",
  canonical: "",
  openGraph: {
    url: "",
    title: "sass-nextjs-starter",
    description: "Next.js + Typescript + Tailwind CSS + Lemonsqueezy + DaisyUi template",
    type: "website",
    images: [
      {
        url: "",
        alt: "",
        width: 800,
        height: 600,
      },
    ],
    site_name: "sass-nextjs-starter",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "",
    },
  ],
};

export default defaultSEOConfig;