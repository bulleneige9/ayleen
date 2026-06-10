export type ProductSlug = "prosta" | "serenite" | "sommeil";

export interface Product {
  slug: ProductSlug;
  name: string;
  arabic: string;
  tagline: string;
  taglineAr: string;
  capsules: number;
  weight: string;
  price: number;
  accent: string;
  accentVar: string;
  softVar: string;
  description: string;
  benefits: { fr: string; ar: string }[];
  ingredients: string[];
  image: string;
  shopifyUrl?: string;
}

export const products: Product[] = [
  {
    slug: "prosta",
    name: "PROSTA+",
    arabic: "بروستا",
    tagline: "Confort urinaire & prostatique",
    taglineAr: "راحة بولية و بروستاتية",
    capsules: 30,
    weight: "18g",
    price: 3200,
    accent: "prosta",
    accentVar: "var(--prosta)",
    softVar: "var(--prosta-soft)",
    image: "/images/prosta.webp",
    shopifyUrl: "coming-soon",
    description:
      "Formulé pour soutenir la santé prostatique et le confort urinaire au quotidien, PROSTA+ combine des actifs naturels soigneusement sélectionnés pour leur efficacité et leur tolérance.",
    benefits: [
      { fr: "Confort urinaire au quotidien", ar: "راحة بولية يومية" },
      { fr: "Soutien de la santé prostatique", ar: "دعم صحة البروستاتا" },
      { fr: "Régulation du flux urinaire", ar: "تنظيم التدفق البولي" },
      { fr: "Actifs naturels ciblés", ar: "مكونات طبيعية مستهدفة" },
    ],
    ingredients: ["Extrait de palmier nain", "Zinc", "Pépins de courge", "Ortie", "Lycopène", "Sélénium"],
  },
  {
    slug: "serenite",
    name: "SÉRÉNITÉ+",
    arabic: "سيريني",
    tagline: "Gestion du stress & équilibre mental",
    taglineAr: "إدارة التوتر و التوازن الذهني",
    capsules: 30,
    weight: "13g",
    price: 3200,
    accent: "serenite",
    accentVar: "var(--serenite)",
    softVar: "var(--serenite-soft)",
    image: "/images/serenite.webp",
    shopifyUrl: "https://ayleen-5737.myshopify.com/products/ayleen-sereneti?variant=50784095633655",
    description:
      "Votre allié anti-stress naturel pour retrouver calme, équilibre et sérénité. SÉRÉNITÉ+ a été développé pour offrir un soutien naturel grâce à une association complète de plantes apaisantes et de vitamines essentielles.",
    benefits: [
      { fr: "Anti-stress naturel au quotidien", ar: "مضاد للتوتر طبيعي يومياً" },
      { fr: "Apaise les tensions et la panique", ar: "يهدئ التوترات والذعر" },
      { fr: "Favorise la relaxation et le sommeil", ar: "يعزز الاسترخاء والنوم" },
      { fr: "Soutient le système nerveux", ar: "يدعم الجهاز العصبي" },
      { fr: "Contribue au bien-être mental", ar: "يساهم في الصحة النفسية" },
    ],
    ingredients: ["Mélisse", "Romarin", "Lavande", "Ginkgo biloba", "Millepertuis", "Marjolaine", "Vitamine C", "Vitamine E", "Vitamine B6", "Vitamine B12"],
  },
  {
    slug: "sommeil",
    name: "SOMMEIL+",
    arabic: "سوماي",
    tagline: "Endormissement & sommeil réparateur",
    taglineAr: "النوم العميق و المريح",
    capsules: 30,
    weight: "18g",
    price: 3200,
    accent: "sommeil",
    accentVar: "var(--sommeil)",
    softVar: "var(--sommeil-soft)",
    image: "/images/sommeil.webp",
    shopifyUrl: "coming-soon",
    description:
      "Formulé pour favoriser un endormissement naturel et un sommeil profond et réparateur, SOMMEIL+ associe des plantes reconnues et des actifs ciblés pour vous aider à retrouver des nuits sereines, sans accoutumance.",
    benefits: [
      { fr: "Endormissement naturel et rapide", ar: "نوم طبيعي وسريع" },
      { fr: "Sommeil profond et réparateur", ar: "نوم عميق ومريح" },
      { fr: "Réveil reposé et énergisé", ar: "استيقاظ منتعش ونشيط" },
      { fr: "Sans accoutumance", ar: "بدون إدمان" },
      { fr: "Soutient le rythme naturel du sommeil", ar: "يدعم الإيقاع الطبيعي للنوم" },
    ],
    ingredients: ["Mélatonine", "Valériane", "Camomille", "Passiflore", "Aubépine", "Vitamine B6"],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);